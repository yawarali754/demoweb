import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSavedBooking } from '../../redux/actions/flightActions'
import Aside from '../Aside/Aside'
import StickyNav from './StickyNav'
import { CircularProgress } from '@material-ui/core'
import Moment from 'moment'

export default function BookingList() {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const flightDataa = useSelector((state) => state.flightData)
  const { loading } = flightDataa
  const flightData = useSelector(
    (state) => state.flightData?.savedBookingRec?.savedBookingRec?.Bookings
  )
  console.log(flightData)

  useEffect(() => {
    const bookingMail = {
      user_email: userLogin?.Email,
    }
    dispatch(getSavedBooking(bookingMail))
  }, [userLogin?.Email])

  const airports = require('iata-airports/active_airports.json')
  const codeToCity = (code) => {
    let items = airports.filter((item) => item.fs === code)
    console.log('items', items[0])
    return `  ${items[0].city} - ${items[0].countryName} `
  }

  return (
    <div id='container-wrapper'>
      <div id='dashboard'>
        <a href='#' className='dashboard-responsive-nav-trigger'>
          <i className='fa fa-reorder'></i> Dashboard Navigation
        </a>
        <StickyNav />
        <Aside />
        <div className='dashboard-content'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-xs-12'>
              <div className='dashboard-list-box'>
                <h4 className='gray'>All Bookings</h4>
                {loading ? (
                  <p style={{ textAlign: 'center', marginTop: '50px' }}>
                    <CircularProgress size={36} />
                  </p>
                ) : (
                  <>
                    <div className='table-box'>
                      {flightData ? (
                        <table className='basic-table booking-table'>
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Booking ID</th>
                              <th>Departure Date</th>
                              <th>Destination</th>
                              <th>No of Tickets</th>
                              <th>Payment</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {flightData?.map((s) => (
                              <tr>
                                {s?.Name?.CreatePassengerNameRecordRS?.TravelItineraryRead?.TravelItinerary?.CustomerInfo?.PersonName?.map(
                                  (pName) => (
                                    <td>
                                      {pName?.GivenName} {pName?.Surname}
                                    </td>
                                  )
                                )}
                                <td className='t-id'>
                                  {
                                    s?.Name?.CreatePassengerNameRecordRS
                                      ?.ItineraryRef?.ID
                                  }
                                </td>
                                {s?.Name?.CreatePassengerNameRecordRS?.AirBook?.OriginDestinationOption?.FlightSegment.map(
                                  (f) => (
                                    <>
                                      <td>{f?.DepartureDateTime}</td>

                                      <td>
                                        {codeToCity(
                                          f?.DestinationLocation?.LocationCode
                                        )}
                                      </td>
                                      <td>{f?.NumberInParty}</td>
                                    </>
                                  )
                                )}

                                <td>
                                  <a href='#'>
                                    <span className='paid t-box'>Paid</span>
                                  </a>
                                </td>
                                <td>
                                  <a href='#'>
                                    <span className='cancel t-box'>
                                      Cancelled
                                    </span>
                                  </a>
                                </td>
                                <td>
                                  <a href='#' className='button gray'>
                                    <i className='sl sl-icon-pencil'></i>
                                  </a>
                                  <a href='#' className='button gray'>
                                    <i className='sl sl-icon-close'></i>
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <p
                          style={{
                            textAlign: 'center',
                            fontSize: 24,
                            fontWeight: 'bold',
                            marginTop: 50,
                          }}
                        >
                          No Bookings Found
                        </p>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='copyrights'>
          <p>
            2021 <i className='fa fa-copyright' aria-hidden='true'></i> MK
            Global. Designed & Developed by{' '}
            <a href='https://symbiantsystems.co.uk/' target='_blank'>
                Symbiant Systems
              </a>
          </p>
        </div>
        <div id='back-to-top'>
          <a href='#'></a>
        </div>
      </div>
    </div>
  )
}
