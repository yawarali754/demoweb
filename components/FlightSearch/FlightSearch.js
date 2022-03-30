import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Typeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css'
import { useDispatch, useSelector } from 'react-redux'
import { requestFlightData } from '../../redux/actions/flightActions'
import { CircularProgress } from '@material-ui/core'
import { Modal, Button, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { formatDate } from '../../public/js/utils'
import {Input} from '@material-ui/core';


const airports = require('iata-airports/active_airports.json')
const airlines = require('iata-airlines/active_airlines.json')

const FlightSearch = ({ selectedOfferFromCity, selectedOfferToCity }) => {
  const [errors, setErrors] = useState({})
  const flightData = useSelector((state) => state.flightData)
  const { loading } = flightData
  const myData = flightData?.searchData?.formData

  const [flyingFrom, setFlyingFrom] = useState(
    selectedOfferFromCity || myData?.flyingFrom || ''
  )
  const [flyingTo, setFlyingTo] = useState(
    selectedOfferToCity || myData?.flyingTo || ''
  )

  var date = new Date()
  date.setDate(date.getDate() + 7)
  const [returnDate, setReturnDate] = useState(myData?.returnDate || '' || date)
  const [departureDate, setDepartureDate] = useState(
    myData?.departureDate || new Date()
  )
  const [adultPassengers, setAdultPassengers] = useState(
    myData?.adultPassengers || 1
  )
  const [childPassengers, setChildrens] = useState(myData?.childPassengers || 0)
  const [youthPassengers, setYouth] = useState(myData?.youthPassengers || 0)
  const [infantPassengers, setInfant] = useState(myData?.infantPassengers || 0)
  const [totalPassenger, setTotalPassenger] = useState([
    adultPassengers + childPassengers + youthPassengers + infantPassengers,
  ])
  const [directFlight, setDirectFlight] = useState(
    myData?.directFlight || false
  )
  const [filterBy, setFilterBy] = useState('callback')
  const filterByCallback = (option, props) =>
    option.fs.toLowerCase().indexOf(props.text.toLowerCase()) !== -1
  const [airline, setAirline] = useState('')
  const [prefferedClass, setPrefferedClass] = useState(
    myData?.prefferedClass || ''
  )
  const [tripType, setTripType] = useState(myData?.tripType || 'roundTrip')
  const [show, setShow] = useState(false)

  const [multiFlightSegmentForm, setMultiFlightSegmentForm] = useState(
    myData?.multiFlightSegmentForm || [
      {
        flyingFrom: '',
        flyingTo: '',
        departureDate: '',
      },
      {
        flyingFrom: '',
        flyingTo: '',
        departureDate: '',
      },
    ]
  )
  useEffect(async () => {
    console.log('Values updated', selectedOfferFromCity, selectedOfferToCity)
    await setFlyingFrom(selectedOfferFromCity)
    await setFlyingTo(selectedOfferToCity)

    if (selectedOfferFromCity) {
      document.querySelector('#button1').click()
      console.log('clicked')
    }
  }, [selectedOfferFromCity, selectedOfferToCity])

  useEffect(() => {
    console.log("errors", errors)
  }, [errors])

  const validate = (values) => {
    const errorsObj = {}
    if (!values.flyingFrom) {
      errorsObj.flyingFrom = "Flying From is required"
    }
    if (!values.flyingTo) {
      errorsObj.flyingTo = "Flying To is required"
    }
    if (!values.returnDate) {
      errorsObj.returnDate = "Return Date is required"
    }
    if (!values.departureDate) {
      errorsObj.departureDate = "Departure Date is required"
    }
    console.log("errorsObj", errorsObj)
    return errorsObj;
  }

  const codeToCity = (code) => {
    let items = airports.filter((item) => item.fs === code)
    return `${items[0].fs} - ${items[0].city} - ${items[0].name} - ${items[0].countryName}`
  }
  const oneWeek = (date) => {
    const nextWeek = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + 7
    )
    return nextWeek
  }

  const addFlightSegment = () => {
    if (multiFlightSegmentForm.length > 4) return

    setMultiFlightSegmentForm([
      ...multiFlightSegmentForm,
      {
        flyingFrom: '',
        flyingTo: '',
        departureDate: '',
      },
    ])
  }

  const removeFlightSegment = (index) => {
    let multiCityState = multiFlightSegmentForm
    const abc = multiCityState.splice(index, 1)
    setMultiFlightSegmentForm([...multiCityState])
  }

  const changeFlightSegmentValue = (name, value, index) => {
    let multiCityData = multiFlightSegmentForm
    multiCityData[index][name] = value
    setMultiFlightSegmentForm([...multiCityData])
  }

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  const router = useRouter()

  const dispatch = useDispatch()

  const [MyFocusState, setMyFocusState] = useState(false)

  const handleFlightSearch = (e) => {
    const originCity = flyingFrom || myData?.flyingFrom
    const destinationCity = flyingTo || myData?.flyingTo

    e.preventDefault()
    const formData = {
      flyingFrom: originCity,
      flyingTo: destinationCity,
      returnDate,
      departureDate,
      adultPassengers,
      childPassengers,
      youthPassengers,
      infantPassengers,
      totalPassenger,
      prefferedClass,
      multiFlightSegmentForm,
      tripType,
      directFlight,
    }
    setErrors(validate(formData))
    console.log("formData", formData)
    if (
      !(
        adultPassengers > 0 ||
        youthPassengers > 0 ||
        childPassengers > 0 ||
        infantPassengers > 0
      )
    ) {
      // dataMissingError()
      return
    }

    const dataa = {
      OTA_AirLowFareSearchRQ: {
        DirectFlightsOnly: directFlight,
        AvailableFlightsOnly: true,
        Version: '4.1.0',
        POS: {
          Source: [
            {
              PseudoCityCode: 'I8QK',
              RequestorID: {
                Type: '1',
                ID: '1',
                CompanyName: {
                  Code: 'TN',
                  content: 'TN',
                },
              },
            },
          ],
        },
        OriginDestinationInformation: [],
        TravelPreferences: {
          ValidInterlineTicket: true,
        },
        TravelerInfoSummary: {
          SeatsRequested: [
            parseInt(adultPassengers) +
            parseInt(childPassengers) +
            parseInt(infantPassengers) +
            parseInt(youthPassengers),
          ],
          AirTravelerAvail: [
            {
              PassengerTypeQuantity: [],
            },
          ],
        },
        TPA_Extensions: {
          IntelliSellTransaction: {
            RequestType: {
              Name: '50ITINS',
            },
          },
        },
      },
    }

    if (adultPassengers > 0) {
      dataa.OTA_AirLowFareSearchRQ.TravelerInfoSummary.AirTravelerAvail[0].PassengerTypeQuantity.push(
        {
          Code: 'ADT',
          Quantity: parseInt(adultPassengers),
          TPA_Extensions: {
            VoluntaryChanges: {
              Match: 'Info',
            },
          },
        }
      )
    }
    if (childPassengers > 0) {
      dataa.OTA_AirLowFareSearchRQ.TravelerInfoSummary.AirTravelerAvail[0].PassengerTypeQuantity.push(
        {
          Code: 'CNN',
          Quantity: parseInt(childPassengers),
          TPA_Extensions: {
            VoluntaryChanges: {
              Match: 'Info',
            },
          },
        }
      )
    }
    if (youthPassengers > 0) {
      dataa.OTA_AirLowFareSearchRQ.TravelerInfoSummary.AirTravelerAvail[0].PassengerTypeQuantity.push(
        {
          Code: 'YTH',
          Quantity: parseInt(youthPassengers),
          TPA_Extensions: {
            VoluntaryChanges: {
              Match: 'Info',
            },
          },
        }
      )
    }
    if (infantPassengers > 0) {
      dataa.OTA_AirLowFareSearchRQ.TravelerInfoSummary.AirTravelerAvail[0].PassengerTypeQuantity.push(
        {
          Code: 'INF',
          Quantity: parseInt(infantPassengers),
          TPA_Extensions: {
            VoluntaryChanges: {
              Match: 'Info',
            },
          },
        }
      )
    }
    if (airline !== '') {
      dataa.OTA_AirLowFareSearchRQ.TravelPreferences.VendorPref = [
        {
          Code: airline,
          PreferLevel: 'Preferred',
        },
      ]
    }

    if (tripType === 'multiCity') {
      for (let [index, data] of multiFlightSegmentForm.entries()) {
        if (!data.flyingFrom || !data.flyingTo || !data.departureDate) {
          // dataMissingError()
          return
        } else {
          dataa.OTA_AirLowFareSearchRQ.OriginDestinationInformation.push({
            RPH: index + 1 + '',
            DepartureDateTime: `${formatDate(data.departureDate)}`,
            OriginLocation: {
              LocationCode: data.flyingFrom,
            },
            DestinationLocation: {
              LocationCode: data.flyingTo,
            },
          })
        }
      }
      dispatch(requestFlightData({ dataa, formData }))
      router.push('/flight')
    } else {
      if (originCity && destinationCity && departureDate) {
        dataa.OTA_AirLowFareSearchRQ.OriginDestinationInformation.push({
          RPH: '1',
          DepartureDateTime: `${formatDate(departureDate)}`,
          OriginLocation: {
            LocationCode: originCity,
          },
          DestinationLocation: {
            LocationCode: destinationCity,
          },
        })

        if (tripType === 'roundTrip') {
          if (!returnDate) {
            // dataMissingError()
            return
          }

          dataa.OTA_AirLowFareSearchRQ.OriginDestinationInformation.push({
            RPH: '2',
            DepartureDateTime: `${formatDate(returnDate)}`,
            OriginLocation: {
              LocationCode: destinationCity,
            },
            DestinationLocation: {
              LocationCode: originCity,
            },
          })
        }
        dispatch(requestFlightData({ dataa, formData }))
        router.push('/flight')
      } else {
        // dataMissingError()
      }
    }
  }

  const dataMissingError = () => {
    toast.error('Please fill all required fields', {
      position: 'bottom-right',
    })
  }

  const handleModalSubmit = (e) => {
    e.preventDefault()
    handleClose()
  }
  const filterByFields = ['fs', 'city']
  return (
  <>
     <div className='container'>
      <div className='search-outer'>
        <div className='search-content'>
          <form onSubmit={handleFlightSearch}>
          <div className='btn-group btn-group-sm '>
            <button type='button' className='btn btn-info'
             name='tripType'
             id='RoundTrip'
             value='roundTrip'
             checked={tripType === 'roundTrip'}
             onClick={(e) => {
               setTripType(e.target.value)
             }}>Round Trip</button>
            <button type='button' className='btn btn-info '
            name='tripType'
            id='OneWay'
            value='oneWay'
            onClick={(e) => setTripType(e.target.value)}>One Way</button>
            <button type='button' className='btn btn-info '
            name='tripType'
            id='multiCity'
            value='multiCity'
            onClick={(e) => setTripType(e.target.value)}>Multi City</button>
           </div>
           <div className='form-check form-check-inline pl-2'>
              <input
                className='form-check-input'
                type='checkbox'
                id='checkbox1'
                onClick={(e) => setDirectFlight(e.target.checked)}
              />
              <label className='form-check-label' for='checkbox1'>
                Direct Flights Only
              </label>
            </div>
            <div className='form-check form-check-inline pl-2'>
              <input
                className='form-check-input'
                type='checkbox'
                id='checkbox1'
                // onClick={(e) => setDirectFlight(e.target.checked)}
              />
              <label className='form-check-label' for='checkbox1'>
               Flexi (+/- 3 days)
              </label>
            </div>
            <div className='row my-row'>
              {tripType !== 'multiCity' ? (
                <>
                  <div className='col-md-2 col-sm-12'>
                    <div className='table_item'>
                      <div className='form-group typeahead-dropdown'>
                        <label htmlFor='departure'>Flying From</label>
                        <Typeahead
                          id='departure'
                          onPaginate={(e) => console.log('Results paginated')}
                          options={airports}
                          // filterBy={
                          //   filterBy === 'callback'
                          //     ? filterByCallback
                          //     : filterByFields
                          // }
                          filterBy={['fs', 'city']}
                          paginate
                          placeholder='Flying from'
                          labelKey={(option) =>
                            `${option.fs} - ${option.city} - ${option.name} - ${option.countryName}`
                          }
                          // labelKey={'city'}
                          onChange={(e) => {
                            console.log("e", e)
                            setErrors({ ...errors, flyingFrom: '' })
                            setFlyingFrom(e[0]?.fs ? e[0]?.fs : '')
                          }
                          }
                          defaultInputValue={flyingFrom}
                          onFocus ={() => setMyFocusState(true)}
                        />
                        <p className="text-danger">{errors.flyingFrom}</p>
                        <i class='flaticon-maps-and-flags'></i>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-2 col-sm-12 srch-mrgn-btm'>
                    <div className='table_item'>
                      <div className='form-group typeahead-dropdown'>
                        <label htmlFor='arrival'>Flying To</label>
                        <Typeahead
                          id='arrival'
                          onPaginate={(e) => console.log('Results paginated')}
                          options={airports}
                          // filterBy={
                          //   filterBy === 'callback'
                          //     ? filterByCallback
                          //     : filterByFields
                          // }
                          filterBy={['fs', 'city']}
                          paginate
                          placeholder='Flying to'
                          labelKey={(option) =>
                            `${option.fs} - ${option.city} - ${option.name} - ${option.countryName}`
                          }
                          onChange={(e) => {
                            setErrors({ ...errors, flyingTo: '' })
                            setFlyingTo(e[0]?.fs ? e[0]?.fs : '')
                          }
                          
                          }
                          onFocus ={() => setMyFocusState(true)}
                          defaultInputValue={flyingTo}
                        />
                        <p className="text-danger">{errors.flyingTo}</p>
                        <i class='flaticon-maps-and-flags'></i>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-2 col-sm-6 srch-mrgn-btm'>
                    <div className='table_item'>
                      <div className='form-group'>
                        <div className='input-group date'>
                          <label htmlFor='deparure-date'>Departure</label>
                          <DatePicker
                            style={{ width: '100%' }}
                            autoComplete='off'
                            className='form-control '
                            placeholderText='Departure Date'
                            id='deparure-date'
                            selected={departureDate}
                            minDate={new Date()}
                            onChange={(e) => {
                              e.setSeconds(0)
                              e.setMilliseconds(0)
                              setDepartureDate(e)
                              setReturnDate(oneWeek(e))
                            }}
                          />
                          <p className="text-danger">{errors.departureDate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-2 col-sm-6 srch-mrgn-btm'>
                    <div className='table_item'>
                      <div className='form-group '>
                        <div className='input-group date'>
                          <label htmlFor='arrival-date'>Return</label>
                          <div style={{ width: '100%' }}>
                            <DatePicker
                              style={{ width: '100%' }}
                              autoComplete='off'
                              className='form-control'
                              placeholderText='Return Date'
                              id='arrival-date'
                              selected={returnDate}
                              minDate={departureDate}
                              disabled={tripType === 'oneWay'}
                              onChange={(e) => {
                                e.setSeconds(0)
                                e.setMilliseconds(0)
                                setReturnDate(e)
                              }}
                            />
                            <p className="text-danger">{errors.returnDate}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                multiFlightSegmentForm.map((multiCity, index) => (
                  <React.Fragment key={index}>
                    <div className='col-md-2 col-sm-6' >
                      <div className='table_item'>
                        <div className='form-group typeahead-dropdown '>
                          <label htmlFor='departure'>Flying From</label>
                          <Typeahead
                            id='departure'
                            onPaginate={(e) => console.log('Results paginated')}
                            options={airports}
                            // filterBy={
                            //   filterBy === 'callback'
                            //     ? filterByCallback
                            //     : filterByFields
                            // }
                            filterBy={['fs', 'city']}
                            paginate
                            placeholder='Flying from'
                            labelKey={(option) =>
                              `${option.fs} - ${option.city} - ${option.name} - ${option.countryName}`
                            }
                            onChange={(e) =>
                              changeFlightSegmentValue(
                                'flyingFrom',
                                e[0]?.fs ? e[0]?.fs : '',
                                index
                              )
                            }
                            onFocus ={() => setMyFocusState(true)}
                            defaultInputValue={flyingFrom}
                          />
                          <p className="text-danger">{errors.flyingFrom}</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-2 col-sm-12' >
                      <div className='table_item'>
                        <div className='form-group typeahead-dropdown'>
                          <label htmlFor='arrival'>Flying To</label>
                          <Typeahead
                            id='arrival'
                            onPaginate={(e) => console.log('Results paginated')}
                            options={airports}
                            // filterBy={
                            //   filterBy === 'callback'
                            //     ? filterByCallback
                            //     : filterByFields
                            // }
                            filterBy={['fs', 'city']}
                            paginate
                            placeholder='Flying to'
                            labelKey={(option) =>
                              `${option.fs} - ${option.city} - ${option.name} - ${option.countryName}`
                            }
                            onChange={(e) =>
                              changeFlightSegmentValue(
                                'flyingTo',
                                e[0]?.fs ? e[0]?.fs : '',
                                index
                              )
                            }
                            onFocus ={() => setMyFocusState(true)}
                            defaultInputValue={flyingTo}
                          />
                          <p className="text-danger">{errors.flyingTo}</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-2 col-sm-6 srch-mrgn-btm'>
                      <div className='table_item'>
                        <div className='form-group'>
                          <div className='input-group date'>
                            <label htmlFor='deparure-date'>
                              Departure Date
                            </label>
                            <div style={{ width: '100%' }}>
                              <DatePicker
                                style={{ width: '100%' }}
                                autoComplete='off'
                                className='form-control'
                                placeholderText='Departure Date'
                                id='deparure-date'
                                selected={
                                  multiFlightSegmentForm[index].departureDate
                                }
                                minDate={
                                  index <= 0
                                    ? new Date()
                                    : multiFlightSegmentForm[index - 1]
                                      .departureDate
                                }
                                onChange={(e) => {
                                  e.setSeconds(0)
                                  e.setMilliseconds(0)
                                  changeFlightSegmentValue(
                                    'departureDate',
                                    e,
                                    index
                                  )
                                }}
                              />
                              <p className="text-danger">{errors.departureDate}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className='col-md-2 col-sm-6 srch-mrgn-btm form-end-button'> */}
                      {index === 1 && multiFlightSegmentForm.length < 5 ? (
                        <div className='col-md-2 col-sm-6 srch-mrgn-btm form-end-button'>
                        <Button onClick={addFlightSegment} variant='success'>
                          <img
                            src='/images/close.png'
                            alt=''
                            className='add-button'
                          />
                        </Button>
                        </div>
                      ) : index > 1 ? (
                        <div className='col-md-2 col-sm-6 srch-mrgn-btm form-end-button'>
                        <Button
                          onClick={() => removeFlightSegment(index)}
                          variant='danger'
                        >
                          <img
                            src='/images/close.png'
                            alt=''
                            className='cross-button'
                          />
                        </Button>
                        </div>
                      ) : null}
                    {/* </div> */}
                  </React.Fragment>
                ))
              )}

              {/* <div className='col-md-2 col-sm-6 srch-mrgn-btm' style={MyFocusState ? {'display':'block'} : {'display':'none'}}>
                <div className='table_item'>
                  <div className='form-group'>
                    <label htmlFor='passengers'>Passengers</label>
                    <div style={{ width: '100%' }}>
                      <input
                        type='text'
                        id='passengers'
                        style={{ width: '100%' }}
                        className='form-control'
                        placeholder='Enter Passengers'
                        onClick={handleShow}
                        value={
                          parseInt(adultPassengers) +
                          parseInt(youthPassengers) +
                          parseInt(childPassengers) +
                          parseInt(infantPassengers)
                        }
                      />
                      <i className='fa fa-user' style={{ top: '40px' }}></i>
                    </div>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      style={{ marginTop: '20vh' }}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Select Passenger</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <>
                          <Form onSubmit={handleModalSubmit}>
                            <Form.Group controlId='formBasicEmail'>
                              <Form.Label>Adult(s)</Form.Label>

                              <Form.Control
                                type='number'
                                min='0'
                                max='100'
                                placeholder='Adult'
                                value={adultPassengers}
                                onChange={(e) =>
                                  setAdultPassengers(parseInt(e.target.value))
                                }
                              />
                            </Form.Group>

                            <Form.Group type='number' placeholder='Children'>
                              <Form.Label>Child(ren)</Form.Label>

                              <Form.Control
                                type='number'
                                min='0'
                                max='100'
                                placeholder='Children'
                                value={childPassengers}
                                onChange={(e) =>
                                  setChildrens(parseInt(e.target.value))
                                }
                              />
                            </Form.Group>
                            <Form.Group type='number' placeholder='Youth'>
                              <Form.Label>Youth(s)</Form.Label>

                              <Form.Control
                                type='number'
                                min='0'
                                max='100'
                                placeholder='Youth'
                                value={youthPassengers}
                                onChange={(e) =>
                                  setYouth(parseInt(e.target.value))
                                }
                              />
                            </Form.Group>
                            <Form.Group type='number' placeholder='Infant'>
                              <Form.Label>Infant(s)</Form.Label>

                              <Form.Control
                                type='number'
                                min='0'
                                max='100'
                                placeholder='Infant'
                                value={infantPassengers}
                                onChange={(e) =>
                                  setInfant(parseInt(e.target.value))
                                }
                              />
                            </Form.Group>
                          </Form>
                        </>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button onClick={handleClose}>Close Modal</Button>
                        <Button type='submit' onClick={handleModalSubmit}>
                          Submit
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div> */}

<div className='col-md-2 col-sm-6 srch-mrgn-btm' style={MyFocusState ? {'display':'block'} : {'display':'none'}}>
                <div className='table_item'>
                  <div className='form-group dropdown'>
                    <label htmlFor='passengers'>Passengers</label>
                    <div style={{ width: '100%' }} type="button" class="dropdown-toggle" data-toggle="dropdown">
                    <input
                        // type='text'
                        autoComplete='off'
                        id='passengers'
                        style={{ width: '100%',color:'black' }}
                        className='form-control'
                        placeholder='passengers'
                        value={`${parseInt(adultPassengers) +
                          parseInt(youthPassengers) +
                          parseInt(childPassengers) +
                          parseInt(infantPassengers)} Traveller, ${prefferedClass}`}/>
                      <i className='fa fa-user' style={{ top: '40px' }}></i>
                    </div>
                    <div class="dropdown-menu">
                        
                    <div class="dropdown-item">
                        {/* Preferred Class */}
                  {/* <div className='table_item'> */}
                  <div className='form-group'>
                    <label htmlFor='class'>Preferred Class</label>
                    <div style={{ width: '100%' }}>
                      <select
                        id='class'
                        style={{ width: '100%' }}
                        className='form-select custom-select my-select'
                        aria-label='Default select example'
                        onChange={(e) => setPrefferedClass(e.target.value)}
                      >
                        {/* <option selected>Class</option> */}
                        <option selected value='ECONOMY'>Economy</option>
                        <option value='Premium Economy'>Premium Economy</option>
                        <option value='FIRST'>First</option>
                        <option value='BUSINESS'>Business</option>
                      </select>
                      <i class='flaticon-box' style={{ top: '30px' }}></i>
                    </div>
                  </div>
                  {/* </div> */}
    {/* Preferred Class */}

                    </div>

                    <>
                    <Form onSubmit={handleModalSubmit}>
                      <div class="dropdown-item">
                      <Form.Group controlId='formBasicEmail'>
                            <div className="ccontainer">
                            <span>Adult(s)</span>
                            <div className="qquantity">
                            <a className="qquantity__minus" title="Decrement" ><span>-</span></a>
                            <input type='number' className="qquantity__input" 
                            min='0'
                            max='100'
                            placeholder='Adult' 
                            value={adultPassengers} 
                            onChange={(e) =>
                            setAdultPassengers(parseInt(e.target.value))
                            }/>
                            <a className="qquantity__plus" title="Increment"><span>+</span></a>
                            </div>
                            </div>
                            </Form.Group>
                      </div>

                      <div class="dropdown-item">
                      <Form.Group type='number' placeholder='Children'>
                            <div className="ccontainer">
                            <span>Child(ren)</span>
                            <div className="qquantity">
                            <a className="qquantity__minus" title="Decrement" ><span>-</span></a>
                            <input type='number' className="qquantity__input" 
                            min='0'
                            max='100'
                            placeholder='Children' 
                            value={childPassengers} 
                            onChange={(e) =>
                              setChildrens(parseInt(e.target.value))
                            }/>
                            <a className="qquantity__plus" title="Increment"><span>+</span></a>
                            </div>
                            </div>
                            </Form.Group>
                      </div>

                      <div class="dropdown-item">
                      <Form.Group type='number' placeholder='Youth'>
                            <div className="ccontainer">
                            <span>Youth(s)</span>
                            <div className="qquantity">
                            <a className="qquantity__minus" title="Decrement" ><span>-</span></a>
                            <input type='number' className="qquantity__input" 
                            min='0'
                            max='100'
                            placeholder='Youth' 
                            value={youthPassengers} 
                            onChange={(e) =>
                              setYouth(parseInt(e.target.value))
                            }/>
                            <a className="qquantity__plus" title="Increment"><span>+</span></a>
                            </div>
                            </div>
                            </Form.Group>
                      </div>

                      <div class="dropdown-item">
                      <Form.Group type='number' placeholder='Infant'>
                            <div className="ccontainer">
                            <span>Infant(s)</span>
                            <div className="qquantity">
                            <a className="qquantity__minus" title="Decrement" ><span>-</span></a>
                            <input type='number' className="qquantity__input" 
                            min='0'
                            max='100'
                            placeholder='Infant' 
                            value={infantPassengers} 
                            onChange={(e) =>
                              setInfant(parseInt(e.target.value))
                            }/>
                            <a className="qquantity__plus" title="Increment"><span>+</span></a>   
                            </div>
                            </div>
                            </Form.Group>
                      </div>

                      {/* <div class="dropdown-item">
                      <Button className='btn btn-danger btn-sm' style={{marginRight:"10px"}} onClick={handleClose}>Close Modal</Button>
                      <Button className='btn btn-primery btn-sm'  onClick={handleModalSubmit}>Submit</Button>
                      </div> */}
                       
                  </Form>
                  </>
                  </div>
                  </div>
                </div>
              </div>



              <div className='col-md-2 col-sm-6 srch-mrgn-btm' style={MyFocusState ? {'display':'block'} : {'display':'none'}}>
                <div className='table_item'>
                  <div className='form-group typeahead-dropdown'>
                    <label htmlFor='airline'>Airline</label>
                    <Typeahead
                      id='airline'
                      onPaginate={(e) => console.log('Results paginated')}
                      options={airlines}
                      filterBy={
                        filterBy === 'callback'
                          ? filterByCallback
                          : filterByFields
                      }
                      paginate
                      placeholder='Airline'
                      labelKey={(option) => `${option.name}`}
                      onChange={(e) => setAirline(e[0]?.fs ? e[0]?.fs : '')}
                    />
                    <i class='fa fa-plane' style={{ top: '40px' }}></i>
                  </div>
                </div>
              </div>
              <div className='col-md-2 col-sm-6 srch-mrgn-btm' style={MyFocusState ? {'display':'block'} : {'display':'none'}}>
                <div className='table_item'>
                  <div className='form-group'>
                    <label htmlFor='class'>Cabin</label>
                    <div style={{ width: '100%' }}>
                      <select
                        id='class'
                        style={{ width: '100%' }}
                        className='form-select custom-select my-select'
                        aria-label='Default select example'
                        onChange={(e) => setPrefferedClass(e.target.value)}
                      >
                        <option selected>Class</option>
                        <option value='ECONOMY'>Economy</option>
                        <option value='FIRST'>First</option>
                        <option value='BUSINESS'>Business</option>
                      </select>
                      <i class='flaticon-box'></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-2 col-sm-6 srch-mrgn-btm'>
                <div className='table_item'>
                <div className='form-group'>
                  <div className='search'>
                    <label htmlFor='button' style={{ visibility: 'hidden' }}>
                      a
                    </label>
                    <button
                      id='button1'
                      className='btn-blue'
                      type='submit'
                      style={{ width: '100%' }}
                      disabled={loading}
                    >

                      {loading ? <CircularProgress size={24} /> : 'SEARCH'}

                    </button>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
  )
}

export default FlightSearch
