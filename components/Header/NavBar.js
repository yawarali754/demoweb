import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

export default function NavBar() {
  const router = useRouter()

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

  return (
    <div>
      <header>
        <div className='upper-head clearfix' style={{backgroundColor:"#3587A4"}}>
          <div className='container'>
            <div className='contact-info'>
              <p>
                <a href='tel:(012)-345-6789' style={{color:"#fff"}}>
                  <i className='flaticon-phone-call'></i> Phone: (012)-345-6789
                </a>
              </p>
              <p>
                <a href='mailto:tourntravel@testmail.com' style={{color:"#fff"}}>
                  <i className='flaticon-mail'></i> Mail:
                  tourntravel@testmail.com
                </a>
              </p>
            </div>
            <div className='login-btn pull-right'>
              <Link href='/aboutus'>
                <a href='/aboutus'>
                  <i className='fa fa-info-circle'></i>About Us
                </a>
              </Link>
              <Link href='/privacypolicy'>
                <a href='/privacypolicy'>
                  <i className='fa fa-user-secret'></i>Privacy Policy
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className='navigation'>
        <div className='container'>
          <div className='navigation-content'>
            <div className='header_menu'>
              <nav className='navbar navbar-default navbar-sticky-function navbar-arrow'>
                <div className='logo pull-left'>
                  <a href='/'>
                    <img alt='Image' src='images/Yatra-01.png' />
                  </a>
                </div>
                <div id='slicknav-mobile'></div>
                <div id='navbar' className='navbar-nav-wrapper'>
                  <ul className='nav navbar-nav' id='responsive-menu'>
                    {user ? (
                      <>
                        <li>
                          <Link href='/flight'>
                            <a href='#'>
                              <i className='fa fa-plane'></i> Flight
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/#packages'>
                            <a href='/#packages'>
                              <i className='sl sl-icon-briefcase'></i> Packages
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/#deals'>
                            <a href='/#deals'>
                              <i className='sl sl-icon-present'></i> Deals
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/booking'>
                            <a href='/booking'>
                              <i className='fa fa-user'></i> {userRedux}
                            </a>
                          </Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link href='/flight'>
                            <a href='#'>
                              <i className='fa fa-plane'></i> Flight
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/#packages'>
                            <a href='/#packages'>
                              <i className='sl sl-icon-briefcase'></i> Packages
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/#deals'>
                            <a href='/#deals'>
                              <i className='sl sl-icon-present'></i> Deals
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/signup'>
                            <a href='/signup'>
                              <i className='fa fa-user-plus'></i> Register
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/auth'>
                            <a href='/auth'>
                              <i className='fa fa-unlock-alt'></i> Login
                            </a>
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
