import React, { useEffect } from 'react'
import Head from 'next/head'
import Aside from '../../components/Aside/Aside'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import StickyNav from '../../components/Dashboard/StickyNav'
import { getSavedBooking } from '../../redux/actions/flightActions'
import { CircularProgress } from '@material-ui/core'

export default function index() {
  const router = useRouter()
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const userRedux = userLogin?.IsAdmin
  let user = false
  if (userRedux) {
    user = true
  } else {
    user = false
  }
  const flightDataa = useSelector((state) => state.flightData)
  const { loading } = flightDataa
  const flightData = useSelector(
    (state) => state.flightData?.savedBookingRec?.savedBookingRec?.Bookings
  )
  console.log('length', flightData?.length)
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
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div id='container-wrapper'>
        <div id='dashboard'>
          <a href='#' className='dashboard-responsive-nav-trigger'>
            <i className='fa fa-reorder'></i> Dashboard Navigation
          </a>
          <StickyNav />
          <Aside />
          <div className='dashboard-content'>
            {user ? (
              <div className='row'>
                <div className='col-lg-3 col-md-6 col-xs-6'>
                  <div className='dashboard-stat color-2'>
                    <div className='dashboard-stat-content'>
                      <h4>{flightData?.length}</h4> <span>Total Bookings</span>
                    </div>
                    <div className='dashboard-stat-icon'>
                      <i className='im im-icon-Line-Chart'></i>
                    </div>
                    <div className='dashboard-stat-item'>
                      <p>Someone bookmarked your listing!</p>
                    </div>
                  </div>
                </div>

                <div className='col-lg-3 col-md-6 col-xs-6'>
                  <div className='dashboard-stat color-3'>
                    <div className='dashboard-stat-content'>
                      <h4>95</h4> <span>Total Reviews</span>
                    </div>
                    <div className='dashboard-stat-icon'>
                      <i className='im im-icon-Add-UserStar'></i>
                    </div>
                    <div className='dashboard-stat-item'>
                      <p>Someone bookmarked your listing!</p>
                    </div>
                  </div>
                </div>

                <div className='col-lg-3 col-md-6 col-xs-6'>
                  <div className='dashboard-stat color-4'>
                    <div className='dashboard-stat-content'>
                      <h4>126</h4> <span>Bookmarks</span>
                    </div>
                    <div className='dashboard-stat-icon'>
                      <i className='im im-icon-Heart'></i>
                    </div>
                    <div className='dashboard-stat-item'>
                      <p>Someone bookmarked your listing!</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            <div className='row'>
              <div className='col-lg-12 col-md-12 col-xs-12 traffic'>
                <div className='dashboard-list-box'>
                  <h4 className='gray'>Recent Bookings</h4>
                  {loading ? (
                    <p style={{ textAlign: 'center', marginTop: '50px' }}>
                      <CircularProgress size={36} />
                    </p>
                  ) : (
                    <>
                      <div className='table-box'>
                        {flightData ? (
                          <table className='basic-table'>
                            <thead>
                              <tr>
                                <th>Booking ID</th>
                                <th>Date</th>
                                <th>Destination</th>
                                <th>No of Tickets</th>
                                <th>Price</th>
                              </tr>
                            </thead>
                            <tbody>
                              {flightData?.map((s) => (
                                <tr>
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
                                  {s?.Name?.CreatePassengerNameRecordRS?.AirPrice.map(
                                    (p) => (
                                      <td>
                                        $
                                        {
                                          p?.PriceQuote?.PricedItinerary
                                            ?.TotalAmount
                                        }
                                      </td>
                                    )
                                  )}
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
            {user ? (
              <div className='row'>
                <div className='col-lg-12 col-md-12 col-xs-12 traffic'>
                  <div className='dashboard-list-box margin-top-20 user-list'>
                    <h4 className='gray'>User List</h4>
                    <ul>
                      <li>
                        <div className='user-list-item'>
                          <div className='user-list-image'>
                            <img src='images/comment.jpg' alt='' />
                          </div>
                          <div className='user-list-content'>
                            <h4>Loural Teak</h4>
                            <span>Post Manager</span>
                          </div>
                          <div className='user-btns'>
                            <a href='#' className='button'>
                              View
                            </a>
                            <a href='#' className='button'>
                              Edit
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='user-list-item'>
                          <div className='user-list-image'>
                            <img src='images/comment.jpg' alt='' />
                          </div>
                          <div className='user-list-content'>
                            <h4>Jim Gordon</h4>
                            <span>Post Manager</span>
                          </div>
                          <div className='user-btns'>
                            <a href='#' className='button'>
                              View
                            </a>
                            <a href='#' className='button'>
                              Edit
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='user-list-item'>
                          <div className='user-list-image'>
                            <img src='images/comment.jpg' alt='' />
                          </div>
                          <div className='user-list-content'>
                            <h4>Loural Teak</h4>
                            <span>Post Manager</span>
                          </div>
                          <div className='user-btns'>
                            <a href='#' className='button'>
                              View
                            </a>
                            <a href='#' className='button'>
                              Edit
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='user-list-item'>
                          <div className='user-list-image'>
                            <img src='images/comment.jpg' alt='' />
                          </div>
                          <div className='user-list-content'>
                            <h4>Loural Teak</h4>
                            <span>Post Manager</span>
                          </div>
                          <div className='user-btns'>
                            <a href='#' className='button'>
                              View
                            </a>
                            <a href='#' className='button'>
                              Edit
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='user-list-item'>
                          <div className='user-list-image'>
                            <img src='images/comment.jpg' alt='' />
                          </div>
                          <div className='user-list-content'>
                            <h4>Joseph Dean</h4>
                            <span>Post Manager</span>
                          </div>
                          <div className='user-btns'>
                            <a href='#' className='button'>
                              View
                            </a>
                            <a href='#' className='button'>
                              Edit
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : null}
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
        </div>
      </div>

      <div id='back-to-top'>
        <a href='#'></a>
      </div>
    </div>
  )
}
