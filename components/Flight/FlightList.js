import React, { useState, useEffect, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { CircularProgress } from '@material-ui/core'
import swal from 'sweetalert'
import getSymbolFromCurrency from 'currency-symbol-map'
import {
  calculateStop,
  minuteToTime,
  simplifyTime,
} from '../../public/js/utils'
import FlightSearch from '../FlightSearch/FlightSearch'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import { ToggleButtonGroup, ToggleButton,Table } from 'react-bootstrap'
import Banner from '../Home/Banner'

const airlines = require('airlines-iata-codes')
const airports = require('iata-airports')
const _ = require('underscore')

export default function FlightList() {
  const router = useRouter()
  const [filteredResult, setFilteredResult] = useState([])
  const [fastestResult, setFastestResult] = useState([])
  const [stopFilter, setStopFilter] = useState([])
  const [airportFilter, setAirportFilter] = useState([])
  const [sort, setSort] = useState(2)
  const [stopFilteredResult, setStopFilteredResult] = useState([])
  const [airportFilteredResult, setAirportFilteredResult] = useState([])
  // const [timeFilter, setTimeFilter] = useState([])

  const flightData = useSelector((state) => state.flightData)
  const { loading } = flightData
  const flightSearchData = flightData?.response?.data?.OTA_AirLowFareSearchRS
  const noFlightData = flightData?.response?.data





  // useEffect(() => {
  //     console.warn(setTimeFilter)
  // }, [])

  useEffect(() => {
    if (noFlightData === 'Server responsed with Error 401') {
      swal({
        title: 'No Flight found ',
        icon: 'error',
      })
    }
  }, [])

  useEffect(() => {
    if (flightSearchData?.PricedItineraries?.PricedItinerary?.length > 0) {
      let arrayToFilter = flightSearchData?.PricedItineraries?.PricedItinerary
      setFilteredResult(arrayToFilter)
      setFastestResult(convertToFastest(arrayToFilter))
    }
  }, [flightSearchData?.PricedItineraries?.PricedItinerary])

  useEffect(() => {
    if (stopFilter?.length > 0 && airportFilter?.length > 0) {
      let filteredArray = []
      for (let stopItem of stopFilteredResult) {
        for (let airportItem of airportFilteredResult) {
          if (stopItem.SequenceNumber === airportItem.SequenceNumber) {
            filteredArray.push(airportItem)
          }
        }
      }

      setFilteredResult(filteredArray)
      setFastestResult(convertToFastest(filteredArray))
    } else if (stopFilter?.length <= 0 && airportFilter?.length > 0) {
      setFilteredResult(airportFilteredResult)
      setFastestResult(convertToFastest(airportFilteredResult))
    } else if (stopFilter?.length > 0 && airportFilter?.length <= 0) {
      setFilteredResult(stopFilteredResult)
      setFastestResult(convertToFastest(stopFilteredResult))
    } else if (stopFilter?.length <= 0 && airportFilter?.length <= 0) {
      setFilteredResult(flightSearchData?.PricedItineraries?.PricedItinerary)
      setFastestResult(
        convertToFastest(flightSearchData?.PricedItineraries?.PricedItinerary)
      )
    } else {
      setFilteredResult(flightSearchData?.PricedItineraries?.PricedItinerary)
      setFastestResult(
        convertToFastest(flightSearchData?.PricedItineraries?.PricedItinerary)
      )
    }
  }, [stopFilteredResult, airportFilteredResult])

  const { query } = router
  const bookNow = (index) => {
    router.push({ pathname: '/flightBooking', query: { id: index } })
  }

  const convertToFastest = (array) =>
    _.sortBy(array, (item) => {
      return item.AirItinerary.OriginDestinationOptions
        .OriginDestinationOption[0].ElapsedTime
    })

  const onFlightStopChange = (filter) => {
    let filtersArray = stopFilter

    let arrayToFilter = flightSearchData?.PricedItineraries?.PricedItinerary
    let filteredArray = stopFilteredResult

    if (filter.checked) {
      filtersArray.push(filter.value)
      setStopFilter(filtersArray)
      if (filter.value === 'NonStop') {
        let newArray = arrayToFilter.filter(
          (item) =>
            item.AirItinerary.OriginDestinationOptions
              .OriginDestinationOption[0].FlightSegment?.length === 1
        )
        setStopFilteredResult([...filteredArray, ...newArray])
      } else if (filter.value === '1Stop') {
        let newArray = arrayToFilter.filter(
          (item) =>
            item.AirItinerary.OriginDestinationOptions
              .OriginDestinationOption[0].FlightSegment?.length === 2
        )
        setStopFilteredResult([...filteredArray, ...newArray])
      } else if (filter.value === '1+Stop') {
        let newArray = arrayToFilter.filter(
          (item) =>
            item.AirItinerary?.OriginDestinationOptions
              ?.OriginDestinationOption[0]?.FlightSegment?.length > 2
        )
        setStopFilteredResult([...filteredArray, ...newArray])
      }
    } else {
      filtersArray = filtersArray.filter((item) => item != filter.value)
      setStopFilter(filtersArray)

      if (filter.value === 'NonStop') {
        let newArray = filteredArray.filter(
          (item) =>
            item.AirItinerary?.OriginDestinationOptions
              ?.OriginDestinationOption[0]?.FlightSegment?.length !== 1
        )
        setStopFilteredResult(newArray)
      } else if (filter.value === '1Stop') {
        let newArray = filteredArray.filter(
          (item) =>
            item.AirItinerary?.OriginDestinationOptions
              ?.OriginDestinationOption[0]?.FlightSegment?.length !== 2
        )
        setStopFilteredResult(newArray)
      } else if (filter.value === '1+Stop') {
        let newArray = filteredArray.filter(
          (item) =>
            item.AirItinerary?.OriginDestinationOptions
              ?.OriginDestinationOption[0]?.FlightSegment?.length <= 2
        )
        setStopFilteredResult(newArray)
      }
    }

    // setStopFilter(filtersArray)

    // if (filtersArray?.length > 0) {
    //   let arrayToFilter = filteredResult?.length > 0 ?
    //     filteredResult
    //     : flightSearchData?.PricedItineraries?.PricedItinerary

    //     let filteredArray = []

    //     for(let item of filtersArray){
    //       if(item === "NonStop"){

    //       }
    //       else if(item === "1Stop"){}
    //       else if(item === "1+Stop"){}
    //     }
    // }
  }

  const onAirlineCheck = (filter) => {
    let filtersArray = airportFilter

    let arrayToFilter = flightSearchData?.PricedItineraries?.PricedItinerary
    let filteredArray = airportFilteredResult

    if (filter.checked) {
      filtersArray.push(filter.value)
      setAirportFilter(filtersArray)

      let newArray = arrayToFilter.filter(
        (item) => item.TPA_Extensions.ValidatingCarrier.Code === filter.value
      )
      setAirportFilteredResult([...filteredArray, ...newArray])
    } else {
      filtersArray = filtersArray.filter((item) => item != filter.value)
      setAirportFilter(filtersArray)

      let newArray = filteredArray.filter(
        (item) => item.TPA_Extensions.ValidatingCarrier.Code !== filter.value
      )
      setAirportFilteredResult(newArray)
    }
  }

  const handleSortChange = (val) => setSort(val)

  const displayItineraryPenalties = (itinerary) => {
    const penalties = {}

    itinerary.AirItineraryPricingInfo.forEach((pricing) => {
      pricing.PTC_FareBreakdowns.PTC_FareBreakdown.forEach((breakDown) => {
        breakDown.PassengerFare.PenaltiesInfo.Penalty.forEach((penalty) => {
          if (!penalties[penalty.Type]) {
            penalties[penalty.Type] = {
              applicability: penalty.Applicability,
              changeable: penalty.Changeable,
              refundable: penalty.Refundable,
              amount: penalty.Amount,
            }
          }
        })
      })
    })

    let exchangePenaltyNote = ''

    if (penalties.Exchange && penalties.Exchange.changeable) {
      exchangePenaltyNote = `Exchangeable for ${penalties.Exchange.amount.toLocaleString(
        'en-us',
        {
          style: 'currency',
          currency: 'GBP',
        }
      )}`
    } else {
      exchangePenaltyNote = "\tCan't be exchanged"
    }

    let refundPenaltyNote = ''

    if (penalties.Refund && penalties.Refund.refundable) {
      refundPenaltyNote = 'Refundable'
    } else {
      refundPenaltyNote = "Can't be refunded"
    }

    return `${exchangePenaltyNote} | ${refundPenaltyNote}`
  }

  const expandRow = {
    renderer: (row) => (
      <>
        {row?.AirItinerary?.OriginDestinationOptions?.OriginDestinationOption.map(
          (origin) => (
            <div>
              {origin?.FlightSegment.map((leg, index) => {
                return (
                  <>
                    <div className='outbound-panel-content '>
                      <div>
                        <div
                          className={
                            origin?.FlightSegment.length - 1 === index
                              ? 'detail-panel last-leg'
                              : 'detail-panel'
                          }
                        >
                          <div className='box1'>
                            <div className='flight-name-logo'>
                              <div className='flight-content'>
                                <span className='code'>
                                  {leg?.OperatingAirline?.Code}{' '}
                                  {leg?.OperatingAirline?.FlightNumber}
                                </span>
                                <span className='code'>Economy</span>
                              </div>
                            </div>
                          </div>
                       
                       
                          <div className='box2'>
                            <div className='flight-name-logo'>
                              <div className='flight-content'>
                                <span className='code'>Depart</span>
                                <span className='f-time'>
                              {leg?.DepartureDateTime}
                            </span>

                            <span className='f-airport'>
                              {leg?.DepartureAirport?.LocationCode}
                            </span>
                              </div>
                            </div>
                          </div>
                       
                          {/* <div className='box2'>
                            <span className='f-title'>Depart</span>
                            <span className='f-time'>
                              {leg?.DepartureDateTime}
                            </span>

                            <span className='f-airport'>
                              {leg?.DepartureAirport?.LocationCode}
                            </span>
                          </div> */}

                            <div className='box3'>
                            <div className='flight-name-logo'>
                              <div className='flight-content'>
                              <span className='f-departure-return-status'>
                              <i className='fa fa-long-arrow-right'></i>
                            </span>
                            <span className='f-duration'>
                              {minuteToTime(leg?.ElapsedTime)}
                            </span>
                              </div>
                            </div>
                          </div>


                          {/* <div className='box3'>
                            <span className='f-departure-return-status'>
                              <i className='fa fa-long-arrow-right'></i>
                            </span>
                            <span className='f-duration'>
                              {minuteToTime(leg?.ElapsedTime)}
                            </span>
                          </div> */}

                            <div className='box4'>
                            <div className='flight-name-logo'>
                              <div className='flight-content'>
                              <span className='f-title'>Arrive</span>
                            <span className='f-time'>
                              {leg?.ArrivalDateTime}
                            </span>

                            <span className='f-airport'>
                              {leg?.ArrivalAirport?.LocationCode}
                            </span>
                              </div>
                            </div>
                          </div>

                          {/* <div className='box4'>
                            <span className='f-title'>Arrive</span>
                            <span className='f-time'>
                              {leg?.ArrivalDateTime}
                            </span>

                            <span className='f-airport'>
                              {leg?.ArrivalAirport?.LocationCode}
                            </span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    {origin?.FlightSegment.length - 1 !== index ? (
                      <div className='layover-full'>
                        <p className='layover-text'>
                          {/* <span className='layover-icon'></span> */}
                          <span className='layover-title'>Layover</span>{' '}
                          <span className='text'> | </span>{' '}
                          <span className='text'>
                            {leg?.ArrivalAirport?.LocationCode}
                          </span>
                        </p>
                      </div>
                    ) : null}
                  </>
                )
              })}
            </div>
          )
        )}
        <div style={{ width: '100%' }}>
          <div
            style={{
              float: 'right',
              border: '1px solid',
              borderRadius:'5px',
              padding: '15px',
              width: '100%',
              marginTop: 20,
            }}
          >
            <h3>Fare Details</h3>
            {row?.AirItineraryPricingInfo?.map((fareInfo) => (
              <div>
                {/* <h5>Base Fare and Charges : </h5> */}
                <h5>
                  Base Fare :{' '}
                  <span style={{ float: 'right' }}>
                    {getSymbolFromCurrency(
                      fareInfo?.ItinTotalFare?.EquivFare?.CurrencyCode
                    )}{' '}
                    {fareInfo?.ItinTotalFare?.EquivFare?.Amount}
                  </span>
                </h5>
                <h5>
                  Tax Amount :{' '}
                  <span style={{ float: 'right' }}>
                    {fareInfo?.ItinTotalFare?.Taxes?.Tax?.map((tax) => (
                      <div>
                        {getSymbolFromCurrency(tax?.CurrencyCode)} {tax?.Amount}
                      </div>
                    ))}
                  </span>
                </h5>
                <h5>
                  Total Fare :{' '}
                  <span style={{ float: 'right' }}>
                    {getSymbolFromCurrency(
                      fareInfo?.ItinTotalFare?.TotalFare?.CurrencyCode
                    )}{' '}
                    {fareInfo?.ItinTotalFare?.TotalFare?.Amount}
                  </span>
                </h5>
              </div>
            ))}
          </div>
        </div>
      </>
    ),
  }

  const columns = [
    {
      dataField: 'TicketingInfo',
      text: 'Airline',
      classes: 'cell-content-center',
      formatter: (cell, row) => (
        <img
          src={`/images/AirlineLogos/Rectangular/${row.AirItinerary.OriginDestinationOptions.OriginDestinationOption[0]?.FlightSegment[0]?.MarketingAirline?.Code}.png`}
          style={{
            width: '100px',
            textAlign: 'center',
          }}
        />
      ),
    },
    {
      dataField: 'AirItinerary',
      text: 'Flight Information',
      classes: 'cell-content-center',
      formatter: (cell, row) => {
        let originDestination =
          row?.AirItinerary?.OriginDestinationOptions?.OriginDestinationOption
        return (
          <div>
            {originDestination.map((destination) => (
              <div className='flight-info-card'>
                <h5 className='flight-info-name'>
                  {
                    destination?.FlightSegment[0]?.DepartureAirport
                      ?.LocationCode
                  }{' '}
                  -{' '}
                  {simplifyTime(
                    destination?.FlightSegment[0]?.DepartureDateTime
                  )}
                </h5>
                <h6>
                  {calculateStop(destination?.FlightSegment)}
                  {' | '}
                  {minuteToTime(destination?.ElapsedTime)}
                </h6>
                <h5 className='flight-info-name'>
                  {
                    destination?.FlightSegment[
                      destination?.FlightSegment?.length - 1
                    ]?.ArrivalAirport?.LocationCode
                  }{' '}
                  -{' '}
                  {simplifyTime(
                    destination?.FlightSegment[
                      destination?.FlightSegment?.length - 1
                    ]?.ArrivalDateTime
                  )}
                </h5>
              </div>
            ))}
            <h6>{displayItineraryPenalties(row)}</h6>
          </div>
        )
      },
    },
    {
      dataField: 'AirItineraryPricingInfo',
      text: 'Price',
      classes: 'cell-content-center',
      formatter: (cell, row, index) => (
        <Fragment>
          <h3 className='color-red-3'>
            {getSymbolFromCurrency(
              row.AirItineraryPricingInfo[0]?.ItinTotalFare?.TotalFare
                ?.CurrencyCode
            )}{' '}
            {row.AirItineraryPricingInfo[0]?.ItinTotalFare?.TotalFare?.Amount}
          </h3>
          
          <button
            className='btn-succes '
            type='button'
            onClick={() => bookNow(row.SequenceNumber)}
          >
            Book Now
          </button>
        </Fragment>
      ),
    },
  ]

  const customTotal = () => null
  // (
  //   <span className="react-bootstrap-table-pagination-total">
  //     Showing {from} to {to} of {size} Results
  //   </span>
  // );

  const options = {
    paginationSize: 4,
    pageStartIndex: 0,
    // alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [
      {
        text: '5',
        value: 5,
      },
      {
        text: '10',
        value: 10,
      },
      {
        text: 'All',
        value: sort === 3 ? fastestResult?.length : filteredResult?.length,
      },
    ], // A numeric array is also available. the purpose of above example is custom the text
  }

  return (
    <>
    <Banner/>

    <div className='search-box'>
    <FlightSearch/>
    </div>

    <section
        className='breadcrumb-outer text-center flight-list-banner'
        
      >
      <div className='container'>
      <div className='breadcrumb-content'>
        <h2>Flights For You</h2>
      </div>
      </div>
    <div className='section-overlay'></div>
    </section>

    {loading ? (
        <p style={{ textAlign: 'center' }}>
          <CircularProgress size={36} />
        </p>
      ) : (
        <>
          <section className='flight-destinations' style={{ paddingTop: "20px"  }}>
            {flightSearchData ? (
              <div className='container'>
                <div className='row'>
                  <div className='col-md-9 col-sm-12'>
                    <div className='flight-table'>
                      {filteredResult?.length > 0 ? (
                        <>
                          <ToggleButtonGroup
                            className='sort-option-group '
                            type='radio'
                            name='sort'
                            value={sort}
                            onChange={handleSortChange}
                          >
                            <ToggleButton className='sort-option' value={1}>
                              <p>BEST</p>
                              <p>
                                {getSymbolFromCurrency(
                                  filteredResult[0]?.AirItineraryPricingInfo[0]
                                    ?.ItinTotalFare?.TotalFare?.CurrencyCode
                                )}{' '}
                                {
                                  filteredResult[0]?.AirItineraryPricingInfo[0]
                                    ?.ItinTotalFare?.TotalFare?.Amount
                                }
                                {' | '}
                                {minuteToTime(
                                  filteredResult[0]?.AirItinerary
                                    .OriginDestinationOptions
                                    .OriginDestinationOption[0].ElapsedTime
                                )}
                              </p>
                            </ToggleButton>
                            <ToggleButton className='sort-option' value={2}>
                              <p>LOWEST</p>
                              <p>
                                {getSymbolFromCurrency(
                                  filteredResult[0]?.AirItineraryPricingInfo[0]
                                    ?.ItinTotalFare?.TotalFare?.CurrencyCode
                                )}{' '}
                                {
                                  filteredResult[0]?.AirItineraryPricingInfo[0]
                                    ?.ItinTotalFare?.TotalFare?.Amount
                                }
                                {' | '}
                                {minuteToTime(
                                  filteredResult[0]?.AirItinerary
                                    .OriginDestinationOptions
                                    .OriginDestinationOption[0].ElapsedTime
                                )}
                              </p>
                            </ToggleButton>
                            <ToggleButton className='sort-option' value={3}>
                              <p>FASTEST</p>
                              <p>
                                {getSymbolFromCurrency(
                                  fastestResult[0]?.AirItineraryPricingInfo[0]
                                    ?.ItinTotalFare?.TotalFare?.CurrencyCode
                                )}{' '}
                                {
                                  fastestResult[0]?.AirItineraryPricingInfo[0]
                                    ?.ItinTotalFare?.TotalFare?.Amount
                                }
                                {' | '}
                                {minuteToTime(
                                  fastestResult[0]?.AirItinerary
                                    .OriginDestinationOptions
                                    .OriginDestinationOption[0].ElapsedTime
                                )}
                              </p>
                            </ToggleButton>
                          </ToggleButtonGroup>

                          <BootstrapTable
                          
                            keyField='SequenceNumber'
                            data={sort === 3 ? fastestResult : filteredResult}
                            columns={columns}
                            expandRow={expandRow}
                            pagination={paginationFactory(options)}
                          />
                        </>
                      ) : (
                        <p
                          style={{
                            textAlign: 'center',
                            fontSize: 30,
                            fontWeight: 'bold',
                            color:'#071c55',
                          }}
                        >
                          No Flight Found
                        </p>
                      )}
                    </div>
                  </div>
                  <div id='sidebar' className='col-md-3 col-sm-12'>
                    <aside className='detail-sidebar sidebar-wrapper'>
                      <div className='sidebar-item'>
                        <div className='detail-title'>
                          <h3>Stop Over</h3>
                        </div>
                        <div className='sidebar-content'>
                          <form>
                            <div className='checkbox'>
                              <label>
                                <input
                                  name='flightstop'
                                  id='NonStop'
                                  value='NonStop'
                                  type='checkbox'
                                  onChange={(e) => onFlightStopChange(e.target)}
                                />{' '}
                                Direct Flight
                              </label>
                            </div>
                            <div className='checkbox'>
                              <label>
                                <input
                                  type='checkbox'
                                  name='flightstop'
                                  id='1Stop'
                                  value='1Stop'
                                  onChange={(e) => onFlightStopChange(e.target)}
                                />{' '}
                                1 Stop
                              </label>
                            </div>
                            <div className='checkbox'>
                              <label>
                                <input
                                  name='flightstop'
                                  id='1+Stop'
                                  value='1+Stop'
                                  type='checkbox'
                                  onChange={(e) => onFlightStopChange(e.target)}
                                />{' '}
                                2+ Stop
                              </label>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className='sidebar-item'>
                        <div className='detail-title'>
                          <h3>Airlines</h3>
                        </div>
                        {flightSearchData?.TPA_Extensions?.AirlineOrderList?.AirlineOrder.map(
                          (airline) => {
                            let airlineName = airlines.getAirlineName(
                              airline?.Code
                            )
                            return (
                              <div
                                className='sidebar-content'
                                key={airline?.Code}
                              >
                                <div className='checkbox'>
                                  <label htmlFor={airline?.Code}>
                                    <input
                                      type='checkbox'
                                      value={airline?.Code}
                                      id={airline?.Code}
                                      onChange={(e) => onAirlineCheck(e.target)}
                                    />{' '}
                                     {airlineName} - ({airline?.Code})
                                  </label>
                                </div>
                              </div>
                            )
                          }
                        )}
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
              
            ) : (
              <p
                style={{
                  textAlign: 'center',
                  fontSize: 24,
                  fontWeight: 'bold',
                  color:'#071c55',
                }}
              >
                No Flight Data
              </p>
            )}
          </section>
        </>
      )}

    {/* <div className='container bg-dark'>
    <div className='row'>
      <div className=' col-sm-12'>
        <h2>hidePageListOnlyOnePage</h2>
      </div>
    </div>
    </div> */}
    </>
  )
}
