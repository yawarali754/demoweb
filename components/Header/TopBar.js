import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default function TopBar() {
  return (
    <div className='upper-head clearfix'>
      <div className='container'>
        <div className='contact-info'>
          <p>
            <a href='tel:(012)-345-6789'>
              <i className='flaticon-phone-call'></i> Phone: (012)-345-6789
            </a>
          </p>
          <p>
            <a href='mailto:tourntravel@testmail.com'>
              <i className='flaticon-mail'></i> Mail: tourntravel@testmail.com
            </a>
          </p>
        </div>
        <div className='login-btn pull-right'>
          <a href='login.html'>
            <i className='fa fa-user-plus'></i> Register
          </a>
          <a href='login.html'>
            <i className='fa fa-unlock-alt'></i> Login
          </a>
        </div>
      </div>
    </div>
  )
}
