import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

export default function Aside() {
  const userLogin = useSelector((state) => state.userLogin)
  const userRedux = userLogin?.IsAdmin === true
  let user = false
  if (userRedux) {
    user = true
  } else {
    user = false
  }

  return (
    <div className='dashboard-nav'>
      <div className='dashboard-nav-inner'>
        <ul>
          {/* <li>
            <Link href='/dashboard'>
              <a href='/dashboard'>
                <i className='sl sl-icon-settings'></i> Dashboard
              </a>
            </Link>
          </li> */}
          {/* <li>
            <Link href='/userProfile'>
              <a href='/userProfile'>
                <i className='sl sl-icon-user'></i> Edit Profile
              </a>
            </Link>
          </li> */}
          {/* <li>
            <Link href='/addTour'>
              <a href='/addTour'>
                <i className='sl sl-icon-plus'></i> Add Tour
              </a>
            </Link>
          </li> */}
          <li>
            <Link href='/booking'>
              <a href='/booking'>
                <i className='sl sl-icon-list'></i> Booking List
              </a>
            </Link>
          </li>
          <li>
            <Link href='/flight'>
              <a href='#'>
                <i className='fa fa-plane'></i> Flight
              </a>
            </Link>
          </li>
          {/* <li>
            <Link href='/tourHistory'>
              <a href='/tourHistory'>
                <i className='sl sl-icon-folder'></i> History
              </a>
            </Link>
          </li>
          <li>
            <Link href='/reviews'>
              <a href='/reviews'>
                <i className='sl sl-icon-star'></i> Reviews
              </a>
            </Link>
          </li> */}
          {user ? (
            <>
              {/* <li>
                <Link href='/createPackage'>
                  <a href='/createPackage'>
                    <i className='sl sl-icon-briefcase'></i> Create Package
                  </a>
                </Link>
              </li> */}
              <li>
                <Link href='/packageList'>
                  <a href='/packageList'>
                    <i className='sl sl-icon-layers'></i> Packages
                  </a>
                </Link>
                {/* <ul>
                  <li>
                    <a>
                      Active <span className='nav-tag green'>6</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      Pending <span className='nav-tag yellow'>1</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      Expired <span className='nav-tag red'>2</span>
                    </a>
                  </li>
                </ul>*/}
              </li>
              {/* <li>
                <Link href='/createOffers'>
                  <a href='/createOffers'>
                    <i className='sl sl-icon-present'></i> Create Offer
                  </a>
                </Link>
              </li> */}
              <li>
                <Link href='/offerList'>
                  <a href='/offersList'>
                    <i className='sl sl-icon-present'></i> Offers
                  </a>
                </Link>
              </li>
            </>
          ) : null}
          {/* <li>
            <a href='/' type='click' onClick={logOut}>
              <i className='sl sl-icon-power'></i> Logout
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  )
}
