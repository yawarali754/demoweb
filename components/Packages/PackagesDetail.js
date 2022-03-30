import React from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export default function PackagesDetail() {
  const packages = useSelector(
    (state) => state.packagesReducer?.packages?.packagge
  )
  const router = useRouter()
  const {
    query: { id },
  } = router
  const detail = packages ? packages[id ? id : 0] : {}

  const viewDetail = (index) => {
    console.log('clicked', index)
    router.push({ pathname: '/packagesDetail', query: { id: index } })
  }
  console.log('detail ', detail)
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <div>
      <section className='breadcrumb-outer text-center'>
        <div className='container'>
          <div className='breadcrumb-content'>
            <h2>{detail?.Name}</h2>
            <nav aria-label='breadcrumb'>
              <ul className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <a href='/'>Home</a>
                </li>
                <li className='breadcrumb-item active' aria-current='page'>
                  Packages Details
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='section-overlay'></div>
      </section>
      <section className='main-content detail'>
        <div className='container'>
          <div className='row'>
            <div id='content' className='col-md-8'>
              <div className='detail-content content-wrapper'>
                <div className='detail-info'>
                  <div className='detail-info-content clearfix'>
                    <h2>{detail?.Name}</h2>
                    <div className='deal-rating'>
                      <span className='fa fa-star checked'></span>
                      <span className='fa fa-star checked'></span>
                      <span className='fa fa-star checked'></span>
                      <span className='fa fa-star-o'></span>
                      <span className='fa fa-star-o'></span>
                    </div>
                  </div>
                </div>
                <div className='gallery detail-box'>
                  <Carousel
                    customTransition='all .5'
                    transitionDuration={100}
                    containerClass='carousel-container'
                    ssr={true} // means to render carousel on server-side.
                    itemClass='carousel-item-padding-40-px'
                    responsive={responsive}
                  >
                    {detail?.Pictures?.map((pics) => (
                      <img style={{ maxHeight: 500 }} src={pics} />
                    ))}
                  </Carousel>
                </div>
                <div className='description detail-box'>
                  <div className='detail-title'>
                    <h3>Description</h3>
                  </div>
                  <div className='description-content'>
                    <p>{detail?.Description}</p>
                    <table>
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td className='title'>Includes</td>
                          <td>
                            <ul>
                              {detail?.Features?.map((f) => (
                                <li>
                                  <i
                                    className='fa fa-check'
                                    aria-hidden='true'
                                  ></i>{' '}
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div id='sidebar-sticky' className='col-md-4'>
              <aside className='detail-sidebar sidebar-wrapper'>
                <div className='sidebar-item sidebar-item-dark'>
                  <div className='detail-title'>
                    <h3>Book this tour</h3>
                  </div>
                  <form>
                    <div className='form-group'>
                      <div className='form-group col-xs-12'>
                        <input
                          type='text'
                          className='form-control'
                          id='Name1'
                          placeholder='Enter your First Name'
                          style={{ borderRadius: 5 }}
                        />
                      </div>
                      <div className='form-group col-xs-12'>
                        <input
                          type='text'
                          className='form-control'
                          id='Name1'
                          placeholder='Enter your Last Name'
                          style={{ borderRadius: 5 }}
                        />
                      </div>
                      <div className='form-group col-xs-6'>
                        <input
                          type='email'
                          className='form-control'
                          id='email1'
                          placeholder=' Enter Email'
                          style={{ borderRadius: 5 }}
                        />
                      </div>
                      <div className='form-group col-xs-6 col-left-padding'>
                        <input
                          type='number'
                          className='form-control'
                          id='phnumber1'
                          placeholder='Enter Phone Number'
                          style={{ borderRadius: 5 }}
                        />
                      </div>
                      <div className='textarea col-xs-12'>
                        <textarea
                          placeholder='Message'
                          style={{ borderRadius: 5 }}
                        ></textarea>
                      </div>
                      <div className='col-xs-12'>
                        <div className='comment-btn'>
                          <a
                            href='#'
                            className='btn-blue btn-red'
                            style={{ borderRadius: 5 }}
                          >
                            Enquire Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </aside>
            </div>
            <section className='popular-packages'>
              <div className='container'>
                <div className='section-title text-center'>
                  <h2>More Popular Packages</h2>
                  <div className='section-icon'>
                    <i className='flaticon-diamond'></i>
                  </div>
                </div>
                <div className='row package-slider slider-button'>
                  {packages?.map((p, index) => (
                <div class="col-md-4 col-sm-6">
                <div class="single-package-item">
                <img
                src={p?.Pictures[0]}
                alt='Image'
                onClick={() => viewDetail(index)}
                />
                <div class="single-package-item-txt">
                <h3>{p?.Name} 
                <span class="pull-right"><i className='flaticon-time'></i> {p?.Features[0]}</span>
                </h3>
                <p>{p?.Info}</p>
        
                    <div class="packages-review">
                      <p>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <span>254 reviews</span>
                      </p>
                    </div>
                    <div class="about-btn">
                      <button  class="about-view packages-btn"
                      type='button'
                      onClick={() => viewDetail(index)}
                      >
                        book now
                      </button>
                    </div>
                  </div>
                </div>
  
              </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
