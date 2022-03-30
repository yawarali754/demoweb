import React from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { logout } from '../../redux/actions/authentication'

export default function StickyNav() {
  const userLogin = useSelector((state) => state.userLogin)
  const dispatch = useDispatch()

  const logOut = (e) => {
    e.preventDefault()
    dispatch(logout())
  }

  return (
    <div className='dashboard-sticky-nav'>
      <div className='content-left pull-left'>
        <a href='/'>
          <img src='images/Yatra-white.png' alt='logo' />
        </a>
      </div>
      <div className='content-right pull-right'>
        <div className='dropdown dropdown-profile'>
          <a className='dropdown-toggle' data-toggle='dropdown'>
            <div className='profile-sec'>
              <div className='dash-image'>
                <img src='images/comment.jpg' alt='' />
              </div>
              <div className='dash-content'>
                <h4>{userLogin?.Email}</h4>
                <span>Registered User</span>
              </div>
            </div>
          </a>
          <ul className='dropdown-menu'>
            <li>
              <a href='#'>
                <i className='sl sl-icon-settings'></i>Settings
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='sl sl-icon-user'></i>Profile
              </a>
            </li>
            <li>
              <Link href='/updatePassword'>
                <a href='#'>
                  <i className='sl sl-icon-lock'></i>Change Password
                </a>
              </Link>
            </li>
            <li>
              <a href='/' type='click' onClick={logOut}>
                <i className='sl sl-icon-power'></i>Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
