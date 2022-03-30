import React from 'react'
import Aside from '../Aside/Aside'
import StickyNav from './StickyNav'

export default function Profile() {
  return (
    <div id='container-wrapper'>
      <div id='dashboard'>
        <a href='#' className='dashboard-responsive-nav-trigger'>
          <i className='fa fa-reorder'></i> Dashboard Navigation
        </a>

        <StickyNav />
        <Aside />
        <div className='dashboard-content'>
          <div className='dashboard-form'>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-xs-12 padding-right-30'>
                <div className='dashboard-list-box'>
                  <h4 className='gray'>Profile Details</h4>
                  <div className='dashboard-list-box-static'>
                    <div className='edit-profile-photo'>
                      <img src='images/user-avatar.jpg' alt='' />
                      <div className='change-photo-btn'>
                        <div className='photoUpload'>
                          <span>
                            <i className='fa fa-upload'></i> Upload Photo
                          </span>
                          <input type='file' className='upload' />
                        </div>
                      </div>
                    </div>

                    <div className='my-profile'>
                      <label>Your Name *</label>
                      <input placeholder='Tom Perrin' type='text' />

                      <label>Phone Number *</label>
                      <input placeholder='(123) 123-456' type='number' />

                      <label>Email Address *</label>
                      <input placeholder='tom@example.com' type='email' />

                      <label>Your Bio *</label>
                      <textarea
                        name='notes'
                        id='notes'
                        cols='30'
                        rows='10'
                        placeholder=' Maecenas quis consequat libero, a feugiat eros. Nunc ut
                        lacinia tortor morbi ultricies laoreet ullamcorper
                        phasellus semper'
                      ></textarea>

                      <label className='twitter-input'>
                        <i className='fa fa-twitter'></i> Twitter
                      </label>
                      <input
                        placeholder='https://www.twitter.com/'
                        type='text'
                      />

                      <label className='fb-input'>
                        <i className='fa fa-facebook-square'></i> Facebook
                      </label>
                      <input
                        placeholder='https://www.facebook.com/'
                        type='text'
                      />
                    </div>

                    <button className='button'>Save Changes</button>
                  </div>
                </div>
              </div>

              <div className='col-lg-6 col-md-6 col-xs-12 padding-left-30'>
                <div className='dashboard-list-box margin-top-0'>
                  <h4 className='gray'>Your Address</h4>
                  <div className='dashboard-list-box-static'>
                    <div className='my-profile'>
                      <label className='margin-top-0'>Company Name</label>
                      <input type='text' />

                      <label>Address *</label>
                      <input type='text' />

                      <label>Zip Code *</label>
                      <input type='text' />

                      <label>Country *</label>
                      <input type='text' />

                      <label>City *</label>
                      <input type='text' />

                      <label>Region/State *</label>
                      <input type='text' />
                    </div>
                  </div>
                </div>
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
