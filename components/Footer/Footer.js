import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className='footer-upper'>
        <div className='container'>
          <div className='footer-links'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='footer-about '>
                  <div className='about-logo'>
                    <img src='images/Yatra-white.png' alt='Image' />
                  </div>
                  <div className='footer-social-links'>
                    <ul>
                      <li>
                        <i
                          className='flaticon-maps-and-flags'
                          aria-hidden='true'
                          style={{ color: 'white' }}
                        ></i>{' '}
                        14 Church St, Wolverton, Milton Keynes MK12 5JN, United
                        Kingdom
                      </li>
                      <li>
                        {' '}
                        <i
                          className='flaticon-phone-call'
                          style={{ color: 'white' }}
                        ></i>
                        <a href='tel:(012)-345-6789'> (012)-345-6789</a>
                      </li>
                      <li>
                        <i
                          className='flaticon-mail'
                          style={{ color: 'white' }}
                        ></i>
                        <a href='mailto:tourntravel@testmail.com'>
                          {' '}
                          tourntravel@testmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='footer-social-links'>
                    <ul>
                      <li className='social-icon'>
                        <a href='#'>
                          <i className='fa fa-facebook' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li className='social-icon'>
                        <a href='#'>
                          <i className='fa fa-instagram' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li className='social-icon'>
                        <a href='#'>
                          <i className='fa fa-twitter' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li className='social-icon'>
                        <a href='#'>
                          <i className='fa fa-youtube' aria-hidden='true'></i>
                        </a>
                      </li>
                      <li className='social-icon'>
                        <a href='#'>
                          <i className='fa fa-google' aria-hidden='true'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='copyright-content'>
                <p>
                  2022 <i className='fa fa-copyright' aria-hidden='true'></i> MK
                  Global. Designed & Developed by{' '}
                  <a href='https://symbiantsystems.co.uk/' target='_blank'>
                Symbiant Systems
              </a>
                </p>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='payment-content'>
                <ul>
                  <li>We Accept</li>
                  <li>
                    <img src='images/payment1.png' alt='Image' />
                  </li>
                  <li>
                    <img src='images/payment2.png' alt='Image' />
                  </li>
                  <li>
                    <img src='images/payment3.png' alt='Image' />
                  </li>
                  <li>
                    <img src='images/payment4.png' alt='Image' />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='back-to-top'>
        <a href='#'></a>
      </div>
    </footer>
  )
}
