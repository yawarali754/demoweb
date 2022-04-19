import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import {
  createPNR,
  requestFLightValidation,
} from '../../redux/actions/flightActions'
import { CountryDropdown } from 'react-country-region-selector'
import swal from 'sweetalert'
import { minuteToTime, changePassengerCode } from '../../public/js/utils'
import getSymbolFromCurrency from 'currency-symbol-map'
import Link from 'next/link'
import { CircularProgress } from '@material-ui/core'
import { toast } from 'react-toastify'

export default function FlightBooking() {
  const dispatch = useDispatch()
  const router = useRouter()
  const [errors, setErrors] = useState({})

  useEffect(() => {
    console.log('errors', errors)
  }, [errors])

  const validate = (values) => {
    const errorsObj = {}
    if (!values.passengerName) {
      errorsObj.passengerName = 'Passenger Name is required'
    }
    if (!values.passengerLastName) {
      errorsObj.passengerLastName = 'Passenger Last Name is required'
    }
    if (!values.day) {
      errorsObj.day = 'Day is required'
    }
    if (!values.month) {
      errorsObj.month = 'Month is required'
    }
    if (!values.year) {
      errorsObj.year = 'Year is required'
    }
    if (!values.leadEmail) {
      errorsObj.leadEmail = 'Lead Email is required'
    }
    if (!values.leadPhoneNumber) {
      errorsObj.leadPhoneNumber = 'Lead Phone Number is required'
    }
    if (!values.leadCity) {
      errorsObj.leadCity = 'Lead City is required'
    }
    if (!values.leadAddress) {
      errorsObj.leadAddress = 'Lead Address is required'
    }
    if (!values.leadPostCode) {
      errorsObj.leadPostCode = 'Lead Post Code is required'
    }
    console.log('errorsObj', errorsObj)
    return errorsObj
  }

  const userLogin = useSelector((state) => state.userLogin)
  const userRedux = userLogin?.Email
  let user = false
  if (userRedux) {
    user = true
  } else {
    user = false
  }
  function isActive(route) {
    if (router === router.pathname) {
      return active
    } else ' '
  }
  const flightData = useSelector((state) => state.flightData)
  const { loading } = flightData

  const flightSearchData =
    flightData?.response?.data?.OTA_AirLowFareSearchRS?.PricedItineraries
      ?.PricedItinerary
  const validOrNot =
    flightData?.res?.validation?.groupedItineraryResponse?.statistics
      ?.itineraryCount
  const adult = flightData?.searchData?.formData?.adultPassengers
  const child = flightData?.searchData?.formData?.childPassengers
  const youth = flightData?.searchData?.formData?.youthPassengers
  const infant = flightData?.searchData?.formData?.infantPassengers
  const totalPassenger = adult + child + youth + infant

  const [passengerName, setPassengerName] = useState('')
  const [passengerLastName, setPassengerLastName] = useState('')
  const [passengerMiddleName, setPassengerMiddleName] = useState('')
  const [gender, setGender] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [leadEmail, setLeadEmail] = useState('')
  const [leadPhoneNumber, setLeadPhoneNumber] = useState('')
  const [leadPostCode, setLeadPostCode] = useState('')
  const [country, setCountry] = useState('')
  const [leadCity, setLeadCity] = useState('')
  const [leadAddress, setLeadAddress] = useState('')

  const {
    query: { id },
  } = router
  const flight = flightSearchData ? flightSearchData[id ? id - 1 : 0] : {}
  const flightFare = flight?.AirItineraryPricingInfo
  const selectedFlight =
    flight?.AirItinerary?.OriginDestinationOptions?.OriginDestinationOption ||
    []

  let select = []
  let flightSegment = []
  for (let items of selectedFlight) {
    for (let s of items?.FlightSegment) {
      const departtime = s?.DepartureDateTime
      const departAirport = s?.DepartureAirport?.LocationCode
      const arrivaltime = s?.ArrivalDateTime
      const arrivalAirport = s?.ArrivalAirport?.LocationCode
      const operatingCode = s?.OperatingAirline?.Code
      const marketingCode = s?.MarketingAirline?.Code
      const operatingFlightNum = s?.OperatingAirline?.FlightNumber
      select.push({
        DepartureDateTime: departtime,
        DestinationLocation: {
          LocationCode: arrivalAirport,
        },
        OriginLocation: {
          LocationCode: departAirport,
        },
        TPA_Extensions: {
          Flight: [
            {
              OriginLocation: {
                LocationCode: departAirport,
              },
              DestinationLocation: {
                LocationCode: arrivalAirport,
              },
              Airline: {
                Operating: operatingCode,
                Marketing: marketingCode,
              },
              ClassOfService: 'Y',
              Number: parseInt(operatingFlightNum),
              DepartureDateTime: departtime,
              ArrivalDateTime: arrivaltime,
              Type: 'A',
            },
          ],
        },
        RPH: select.length + '',
      })
      flightSegment.push({
        ArrivalDateTime: arrivaltime,
        DepartureDateTime: departtime,
        FlightNumber: operatingFlightNum,
        NumberInParty: `${totalPassenger}`,
        ResBookDesigCode: 'Y',
        Status: 'NN',
        DestinationLocation: {
          LocationCode: arrivalAirport,
        },
        MarketingAirline: {
          Code: marketingCode,
          FlightNumber: operatingFlightNum,
        },
        OriginLocation: {
          LocationCode: departAirport,
        },
      })
    }
  }

  useEffect(() => {
    const flightValidation = {
      OTA_AirLowFareSearchRQ: {
        OriginDestinationInformation: select,
        POS: {
          Source: [
            {
              PseudoCityCode: 'I8QK',
              RequestorID: {
                CompanyName: {
                  Code: 'TN',
                },
                ID: '1',
                Type: '1',
              },
            },
          ],
        },
        TPA_Extensions: {
          IntelliSellTransaction: {
            RequestType: {
              Name: '200ITINS',
            },
          },
        },
        TravelPreferences: {
          TPA_Extensions: {
            DataSources: {
              ATPCO: 'Enable',
              LCC: 'Disable',
            },
            NumTrips: {},
          },
        },
        TravelerInfoSummary: {
          AirTravelerAvail: [
            {
              PassengerTypeQuantity: [],
            },
          ],
          SeatsRequested: [
            parseInt(adult) +
              parseInt(child) +
              parseInt(infant) +
              parseInt(youth),
          ],
          PriceRequestInformation: {
            TPA_Extensions: {},
          },
        },
        Version: '3',
      },
    }
    if (adult > 0) {
      flightValidation.OTA_AirLowFareSearchRQ.TravelerInfoSummary.AirTravelerAvail[0].PassengerTypeQuantity.push(
        {
          Code: 'ADT',
          Quantity: parseInt(adult),
        }
      )
    }
    if (child > 0) {
      flightValidation.OTA_AirLowFareSearchRQ.TravelerInfoSummary.AirTravelerAvail[0].PassengerTypeQuantity.push(
        {
          Code: 'CNN',
          Quantity: parseInt(child),
        }
      )
    }
    if (youth > 0) {
      flightValidation.OTA_AirLowFareSearchRQ.TravelerInfoSummary.AirTravelerAvail[0].PassengerTypeQuantity.push(
        {
          Code: 'YTH',
          Quantity: parseInt(youth),
        }
      )
    }
    if (infant > 0) {
      flightValidation.OTA_AirLowFareSearchRQ.TravelerInfoSummary.AirTravelerAvail[0].PassengerTypeQuantity.push(
        {
          Code: 'INF',
          Quantity: parseInt(infant),
        }
      )
    }

    dispatch(requestFLightValidation(flightValidation))
  }, [id])
  if (validOrNot <= 0) {
    swal({
      title: 'Flight is not Valid',
      icon: 'error',
    }).then(function () {
      router.push('/flight')
    })
  }

  const setCountryFun = (value) => {
    setCountry(value)
  }
  const dataMissingError = () => {
    toast.error('Please fill all required fields', {
      position: 'bottom-right',
    })
  }

  const pnrReqFun = (e) => {
    e.preventDefault()
    if (
      !passengerName ||
      !passengerLastName ||
      !day ||
      !month ||
      !year ||
      !leadEmail ||
      !leadPhoneNumber ||
      !leadCity ||
      !leadAddress ||
      !leadPostCode
    ) {
      setErrors(
        validate({
          passengerName,
          passengerLastName,
          day,
          month,
          year,
          leadEmail,
          leadPhoneNumber,
          leadCity,
          leadAddress,
          leadPostCode,
        })
      )
      // dataMissingError()
    } else {
      const pnrRequest = {
        CreatePassengerNameRecordRQ: {
          version: '2.4.0',
          targetCity: 'I8QK',
          haltOnAirPriceError: false,
          Profile: {
            UniqueID: {
              id: 'V1:842059:I8QK:AA',
            },
          },
          TravelItineraryAddInfo: {
            AgencyInfo: {
              Address: {
                AddressLine: 'SABRE TRAVEL',
                CityName: 'KARACHI',
                CountryCode: 'PK',
                PostalCode: '75300',
                StateCountyProv: {
                  StateCode: 'SD',
                },
                StreetNmbr: 'Gulshan 13-B Block 13 B Gulshan-e-Iqbal',
              },
              Ticketing: {
                TicketType: '7TAW',
              },
            },
            CustomerInfo: {
              ContactNumbers: {
                ContactNumber: [
                  {
                    NameNumber: '1.1',
                    Phone: leadPhoneNumber,
                    PhoneUseType: 'H',
                  },
                ],
              },
              Email: [
                {
                  Address: leadEmail,
                },
              ],
              PersonName: [
                {
                  NameNumber: '1.1',
                  NameReference: 'ADT',
                  PassengerType: 'ADT',
                  GivenName: passengerName,
                  Surname: passengerLastName,
                },
              ],
            },
          },
          AirBook: {
            HaltOnStatus: [
              {
                Code: 'HL',
              },
              {
                Code: 'KK',
              },
              {
                Code: 'LL',
              },
              {
                Code: 'NN',
              },
              {
                Code: 'NO',
              },
              {
                Code: 'UC',
              },
              {
                Code: 'US',
              },
            ],
            OriginDestinationInformation: {
              FlightSegment: flightSegment,
            },
            RedisplayReservation: {
              NumAttempts: 10,
              WaitInterval: 300,
            },
          },
          AirPrice: [
            {
              PriceRequestInformation: {
                Retain: true,
                OptionalQualifiers: {
                  FOP_Qualifiers: {
                    BasicFOP: {
                      Type: 'CK',
                    },
                  },
                  PricingQualifiers: {
                    PassengerType: [],
                  },
                },
              },
            },
          ],
          MiscSegment: {
            VendorPrefs: {
              Airline: {
                Code: 'PK',
              },
            },
            DepartureDateTime: '11-02',
            NumberInParty: totalPassenger,
            Text: 'THANK YOU FOR FLYING WITH US',
            Type: 'OTH',
            OriginLocation: {
              LocationCode: 'KHI',
            },
            Status: 'GK',
          },
          PostProcessing: {
            EndTransaction: {
              Source: {
                ReceivedFrom: 'ROBOTICS',
              },
            },
            RedisplayReservation: {
              waitInterval: 100,
            },
          },
        },
      }
      if (adult > 0) {
        pnrRequest?.CreatePassengerNameRecordRQ?.AirPrice[0]?.PriceRequestInformation?.OptionalQualifiers?.PricingQualifiers?.PassengerType.push(
          {
            Code: 'ADT',
            Quantity: `${adult}`,
          }
        )
      }
      if (child > 0) {
        pnrRequest?.CreatePassengerNameRecordRQ?.AirPrice[0]?.PriceRequestInformation?.OptionalQualifiers?.PricingQualifiers?.PassengerType.push(
          {
            Code: 'CNN',
            Quantity: `${child}`,
          }
        )
      }
      if (youth > 0) {
        pnrRequest?.CreatePassengerNameRecordRQ?.AirPrice[0]?.PriceRequestInformation?.OptionalQualifiers?.PricingQualifiers?.PassengerType.push(
          {
            Code: 'YTH',
            Quantity: `${youth}`,
          }
        )
      }
      if (infant > 0) {
        pnrRequest?.CreatePassengerNameRecordRQ?.AirPrice[0]?.PriceRequestInformation?.OptionalQualifiers?.PricingQualifiers?.PassengerType.push(
          {
            Code: 'INF',
            Quantity: `${infant}`,
          }
        )
      }
      // dispatch(createPNR(pnrRequest))
      router.push('/bookingConfirmed')
    }
  }

  return (
    <div>
      <section className='breadcrumb-outer text-center'>
        <div className='container'>
          <div className='breadcrumb-content'>
            <h2>Confirm your Flight</h2>
            <h4 className='white'>Flight For You</h4>
            <nav aria-label='breadcrumb'>
              <ul className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <a href='/'>Home</a>
                </li>
                <li className='breadcrumb-item'>
                  <a href='/flight'>Flight</a>
                </li>
                <li className='breadcrumb-item active' aria-current='page'>
                  Detail page
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='section-overlay'></div>
      </section>
      <section className='flight-destinations'>
        <div className='container'>
          <div className='row'>
            <div id='content' className='col-md-9'>
              <div className='detail-content content-wrapper'>
                <div className='description flight-book'>
                  <div className='selected-flight-panel'>
                    <div className='header'>
                      <span className='title'>Your Selected Flight : </span>
                    </div>
                    {flight?.AirItinerary?.OriginDestinationOptions?.OriginDestinationOption.map(
                      (origin) => (
                        <div className='outbound-panel'>
                          {origin?.FlightSegment.map((leg, index) => {
                            return (
                              <>
                                <div className='outbound-panel-content'>
                                  <div>
                                    <div className='detail-panel'>
                                      <div className='box1'>
                                        <div className='flight-name-logo'>
                                          <div className='flight-content'>
                                            <span className='name'>
                                              <img
                                                src={`/images/AirlineLogos/Rectangular/${leg?.MarketingAirline?.Code}.png`}
                                                style={{
                                                  width: '120px',
                                                  textAlign: 'center',
                                                }}
                                              />
                                            </span>
                                            <span className='code'>
                                              {leg?.OperatingAirline?.Code}{' '}
                                              {
                                                leg?.OperatingAirline
                                                  ?.FlightNumber
                                              }
                                            </span>
                                            <span className='code'>
                                              Economy
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className='box2'>
                                        <span className='f-title'>Depart</span>
                                        <span className='f-time'>
                                          {leg?.DepartureDateTime}
                                        </span>

                                        <span className='f-airport'>
                                          {leg?.DepartureAirport?.LocationCode}
                                        </span>
                                      </div>
                                      <div className='box3'>
                                        <span className='f-departure-return-status'>
                                          <i className='fa fa-long-arrow-right'></i>
                                        </span>
                                        <span className='f-duration'>
                                          {minuteToTime(leg?.ElapsedTime)}
                                        </span>
                                      </div>
                                      <div className='box4'>
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
                                </div>
                                {origin?.FlightSegment.length - 1 !== index ? (
                                  <div className='layover-full'>
                                    <p className='layover-text'>
                                      {/* <span className='layover-icon'></span> */}
                                      <span className='layover-title'>
                                        Layover
                                      </span>{' '}
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
                  </div>
                  <div className='flight-table'>
                    <div className='detail-title'>
                      <h3>YOUR PERSONAL INFORMATION :</h3>
                    </div>
                    <div className='description-content'>
                      <form>
                        <div className='row'>
                          <div className='form-group col-lg-2 col-xs-6'>
                            <label>Gender :</label>
                            <select
                              className='form-select custom-select my-select'
                              aria-label='Default select example'
                              value={gender}
                              placeholder='Gender'
                              onChange={(e) => setGender(e.target.value)}
                            >
                              <option value='Mr.'>Mr.</option>
                              <option value='Mrs.'>Mrs.</option>
                              <option value='Miss'>Miss</option>
                            </select>
                          </div>
                          <div className='form-group col-lg-3 col-xs-8'>
                            <label>First Name :</label>
                            <input
                              type='text'
                              className='form-control'
                              id='FirstName'
                              value={passengerName}
                              onChange={(e) => {
                                setErrors({ ...errors, passengerName: '' })
                                setPassengerName(e.target.value)
                              }}
                              placeholder='Enter first name'
                            />
                            <p className='text-danger'>
                              {errors.passengerName}
                            </p>
                          </div>
                          <div className='form-group col-lg-3 col-xs-8'>
                            <label>Middle Name :</label>
                            <input
                              type='text'
                              className='form-control'
                              id='MiddleName'
                              value={passengerMiddleName}
                              onChange={(e) =>
                                setPassengerMiddleName(e.target.value)
                              }
                              placeholder='Enter middle name'
                            />
                          </div>
                          <div className='form-group col-lg-3 col-xs-8'>
                            <label>Last Name :</label>
                            <input
                              type='text'
                              className='form-control'
                              id='LastName'
                              value={passengerLastName}
                              onChange={(e) => {
                                setErrors({ ...errors, passengerLastName: '' })
                                setPassengerLastName(e.target.value)
                              }}
                              placeholder='Enter Last name'
                            />
                            <p className='text-danger'>
                              {errors.passengerLastName}
                            </p>
                          </div>

                          <div className='form-group col-lg-3 col-xs-8'>
                            <label>Enter Day :</label>
                            <input
                              type='text'
                              min='0'
                              max='31'
                              className='form-control'
                              id='LastName'
                              value={day}
                              onChange={(e) => {
                                setErrors({ ...errors, day: '' })
                                setDay(e.target.value)
                              }}
                              placeholder='Day'
                            />
                            <p className='text-danger'>{errors.day}</p>
                          </div>
                          <div className='form-group col-lg-3 col-xs-8'>
                            <label>Enter Month :</label>
                            <input
                              type='text'
                              className='form-control'
                              id='LastName'
                              value={month}
                              onChange={(e) => {
                                setErrors({ ...errors, month: '' })
                                setMonth(e.target.value)
                              }}
                              placeholder='Month'
                            />
                            <p className='text-danger'>{errors.month}</p>
                          </div>
                          <div className='form-group col-lg-3 col-xs-8'>
                            <label>Enter Year :</label>
                            <input
                              type='number'
                              min='0'
                              className='form-control'
                              id='LastName'
                              value={year}
                              onChange={(e) => {
                                setErrors({ ...errors, year: '' })
                                setYear(e.target.value)
                              }}
                              placeholder='Year'
                            />
                            <p className='text-danger'>{errors.year}</p>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className='flight-table'>
                    <div className='detail-title'>
                      <h3>Lead Passeneger Contact Detail : </h3>
                    </div>
                    <div className='description-content'>
                      <form>
                        <div className='row'>
                          <div className='form-group col-lg-4  col-xs-8 col-left-padding'>
                            <label>Email :</label>
                            <input
                              type='email'
                              className='form-control'
                              value={leadEmail}
                              onChange={(e) => {
                                setErrors({ ...errors, leadEmail: '' })
                                setLeadEmail(e.target.value)
                              }}
                              id='email'
                              placeholder='Enter Your Email Address'
                            />
                            <p className='text-danger'>{errors.leadEmail}</p>
                          </div>
                          <div className='form-group  col-lg-4 col-xs-8 col-left-padding'>
                            <label>Contact Number :</label>
                            <input
                              type='text'
                              className='form-control'
                              value={leadPhoneNumber}
                              onChange={(e) => {
                                setErrors({ ...errors, leadPhoneNumber: '' })
                                setLeadPhoneNumber(e.target.value)
                              }}
                              id='phnumber'
                              placeholder='Enter Your Contact No'
                            />
                            <p className='text-danger'>
                              {errors.leadPhoneNumber}
                            </p>
                          </div>
                          <div className='form-group  col-lg-4 col-xs-8 col-left-padding'>
                            <label>Post Code :</label>
                            <input
                              type='number'
                              className='form-control'
                              value={leadPostCode}
                              onChange={(e) => {
                                setErrors({ ...errors, leadPostCode: '' })
                                setLeadPostCode(e.target.value)
                              }}
                              id='postcode'
                              placeholder='Enter Your Post Code'
                            />
                            <p className='text-danger'>{errors.leadPostCode}</p>
                          </div>
                          <div className='form-group  col-lg-4 col-xs-8 col-left-padding'>
                            <label>Country :</label>
                            <CountryDropdown
                              value={country}
                              onChange={setCountryFun}
                            />
                          </div>
                          <div className='form-group  col-lg-4 col-xs-8 col-left-padding'>
                            <label>City :</label>
                            <input
                              type='text'
                              className='form-control'
                              value={leadCity}
                              onChange={(e) => {
                                setErrors({ ...errors, leadCity: '' })
                                setLeadCity(e.target.value)
                              }}
                              id='city'
                              placeholder='Select City'
                            />
                            <p className='text-danger'>{errors.leadCity}</p>
                          </div>
                          <div className='form-group textarea col-xs-12'>
                            <label>Address :</label>
                            <textarea
                              placeholder='Enter your Address'
                              value={leadAddress}
                              onChange={(e) => {
                                setErrors({ ...errors, leadAddress: '' })
                                setLeadAddress(e.target.value)
                              }}
                            ></textarea>
                            <p className='text-danger'>{errors.leadAddress}</p>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id='sidebar' className='col-md-3'>
              <aside className='detail-sidebar sidebar-wrapper'>
                <div className='sidebar-item sidebar-item-dark'>
                  <div className='detail-title'>
                    <h3>Fare Details</h3>
                    {flightFare?.map((fareInfo) => (
                      <div className='sidebar-helpline-content'>
                        <h5 style={{ color: 'white' }} className='price-panel'>
                          Base Fare and Charges :{' '}
                        </h5>
                        <div className='price-detail-panel-full'>
                          <ol>
                            {fareInfo?.PTC_FareBreakdowns?.PTC_FareBreakdown.map(
                              (passengers) => (
                                <li>
                                  {changePassengerCode(
                                    passengers?.PassengerTypeQuantity?.Code
                                  )}{' '}
                                  X{' '}
                                  {passengers?.PassengerTypeQuantity?.Quantity}{' '}
                                  <span style={{ float: 'right' }}>
                                    {getSymbolFromCurrency(
                                      passengers?.PassengerFare?.TotalFare
                                        ?.CurrencyCode
                                    )}{' '}
                                    {
                                      passengers?.PassengerFare?.TotalFare
                                        ?.Amount
                                    }
                                  </span>
                                </li>
                              )
                            )}
                          </ol>
                        </div>
                        <h5 style={{ color: 'white' }}>
                          Total Fare :{' '}
                          <span style={{ float: 'right' }}>
                            {getSymbolFromCurrency(
                              fareInfo?.ItinTotalFare?.TotalFare?.CurrencyCode
                            )}{' '}
                            {fareInfo?.ItinTotalFare?.TotalFare?.Amount}
                          </span>
                        </h5>
                        <h5 style={{ color: 'white' }}>
                          You Pay :{' '}
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
                <div className='sidebar-item sidebar-item-dark'>
                  {user ? (
                    <>
                      <div>
                        <Link href='#'>
                          <button
                            id='button'
                            className='btn-red'
                            style={{ width: '100%' }}
                            type='click'
                            onClick={pnrReqFun}
                          >
                            {' '}
                            {loading ? (
                              <CircularProgress size={24} />
                            ) : (
                              'Continue'
                            )}
                          </button>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <Link href='/auth'>
                          <button
                            id='button'
                            className='btn-red'
                            style={{ width: '100%' }}
                          >
                            Login
                          </button>
                        </Link>
                        <div>
                          <p
                            style={{
                              color: 'white',
                              fontFamily: 'sans-serif',
                              margin: 'auto',
                              textAlign: 'center',
                            }}
                          >
                            OR
                          </p>
                        </div>
                        <button
                          id='button'
                          className='btn-red'
                          style={{ width: '100%' }}
                          type='click'
                          onClick={pnrReqFun}
                        >
                          {' '}
                          {loading ? (
                            <CircularProgress size={24} />
                          ) : (
                            'Continue as guest'
                          )}
                        </button>
                      </div>{' '}
                    </>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
