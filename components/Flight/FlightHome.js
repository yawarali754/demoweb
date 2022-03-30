import React from 'react'

export default function FlightHome() {
  return (
    <div className='my-new-swiper-parent' style={{backgroundColor:"#fff"}}>
      <section className='swiper-banner'>
        <div className='slider'>
          <div className='swiper-container'>
            <div className='swiper-wrapper'>
              <div
                className='swiper-slide'
                style={{ backgroundImage: `url('images/slider/slider10.jpg')` }}
              >
                <div
                  className='swiper-content'
                  data-animation='animated fadeInDown'
                >
                  <h2 className='white'>Book a ticket & Just Leave</h2>
                  <h1>
                    <a href='#' className='white'>
                      Search your next destination
                    </a>
                  </h1>
                  <a href='flight-detail.html' className='btn-blue btn-red'>
                    View Our Tour
                  </a>
                </div>
              </div>
              <div
                className='swiper-slide'
                style={{ backgroundImage: `url('images/slider/slider11.jpg')` }}
              >
                <div
                  className='swiper-content'
                  data-animation='animated fadeInRight'
                >
                  <h2 className='white'>Book a ticket & Just Leave</h2>
                  <h1>
                    <a href='#' className='white'>
                      Discover Your Right Places With Us
                    </a>
                  </h1>
                  <a href='flight-detail.html' className='btn-blue btn-red'>
                    View Our Tour
                  </a>
                </div>
              </div>
              <div
                className='swiper-slide'
                // style='background-image:url(images/slider/slider11.jpg)'
              >
                <div
                  className='swiper-content'
                  data-animation='animated fadeInUp'
                >
                  <h2 className='white'>Book a ticket & Just Leave</h2>
                  <h1>
                    <a href='#' className='white'>
                      Search your next destination
                    </a>
                  </h1>
                  <a href='flight-detail.html' className='btn-blue btn-red'>
                    View Our Tour
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='swiper-button-next'></div>
          <div className='swiper-button-prev'></div>
          <div className='overlay'></div>
        </div>
      </section>
      <section className='mt_search'>
        <div className='container'>
          <div className='search-content-slider'>
            <div className='section-title text-center'>
              <h2>Search Your Best Flight</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <form>
              <div className='form-row'>
                <div className='col-md-3 col-sm-6'>
                  <div className='table_item'>
                    <div className='form-group'>
                      {/* <select
                          name='custom-select-1'
                          className='selectpicker form-control'
                          tabIndex='1'
                        >
                          <option value='0'>Where to go?</option>
                          <option value='1'>0</option>
                          <option value='2'>1</option>
                          <option value='3'>2</option>
                          <option value='4'>3</option>
                          <option value='5'>4</option>
                        </select> */}
                      <select
                        className='form-select custom-select my-select'
                        aria-label='Default select example'
                        placeholder='Where From ? '
                      >
                        <option selected>Where From ?</option>
                        <option value='1'>karachi</option>
                        <option value='2'>Lahore</option>
                        <option value='3'>Islamabad</option>
                      </select>
                      <i className='flaticon-maps-and-flags'></i>
                    </div>
                  </div>
                </div>
                <div className=' col-md-3 col-sm-6'>
                  <div className='table_item'>
                    <div className='form-group'>
                      {/* <select
                          name='custom-select-1'
                          className='selectpicker form-control'
                          tabIndex='1'
                        >
                          <option value='0'>Where to go?</option>
                          <option value='1'>0</option>
                          <option value='2'>1</option>
                          <option value='3'>2</option>
                          <option value='4'>3</option>
                          <option value='5'>4</option>
                        </select> */}
                      <select
                        className='form-select custom-select my-select'
                        aria-label='Default select example'
                      >
                        <option selected>Where to go?</option>
                        <option value='1'>karachi</option>
                        <option value='2'>Lahore</option>
                        <option value='3'>Islamabad</option>
                      </select>
                      <i className='flaticon-maps-and-flags'></i>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-6'>
                  <div className='table_item'>
                    <div className='form-group'>
                      <div className='input-group date' id='datetimepicker1'>
                        <input
                          type='text'
                          className='form-control'
                          value='Depart Date'
                        />
                        <i className='flaticon-calendar'></i>
                        <span className='input-group-addon'>
                          <i className='fa fa-calendar' aria-hidden='true'></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-3 col-sm-6'>
                  <div className='table_item'>
                    <div className='form-group '>
                      <div className='input-group date' id='datetimepicker2'>
                        <input
                          type='text'
                          className='form-control'
                          value='Return Date'
                        />
                        <i className='flaticon-calendar'></i>
                        <span className='input-group-addon'>
                          <i className='fa fa-calendar' aria-hidden='true'></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-6'>
                  <div className='table_item'>
                    <div className='form-group'>
                      {/* <select
                          name='custom-select-2'
                          className='selectpicker form-control'
                          tabindex='1'
                        >
                          <option value='0'>Adult</option>
                          <option value='1'>0</option>
                          <option value='2'>1</option>
                          <option value='3'>2</option>
                          <option value='4'>3</option>
                          <option value='5'>4</option>
                        </select> */}
                      <select
                        className='form-select custom-select my-select'
                        aria-label='Default select example'
                      >
                        <option selected>Adult?</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                      </select>
                      <i className='flaticon-box'></i>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-6'>
                  <div className='table_item'>
                    <div className='form-group'>
                      {/* <select
                          name='custom-select-2'
                          className='selectpicker form-control'
                          tabindex='1'
                        >
                          <option value='0'>Child</option>
                          <option value='1'>0</option>
                          <option value='2'>1</option>
                          <option value='3'>2</option>
                          <option value='4'>3</option>
                          <option value='5'>4</option>
                        </select> */}
                      <select
                        className='form-select custom-select my-select'
                        aria-label='Default select example'
                      >
                        <option selected>Child?</option>
                        <option value='1'>0</option>
                        <option value='2'>1</option>
                        <option value='3'>2</option>
                      </select>
                      <i className='flaticon-box'></i>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 col-sm-6'>
                  <div className='table_item'>
                    <div className='search'>
                      <a
                        href='../flight/fsearch'
                        className='btn-blue btn-red btn-style-1'
                      >
                        SEARCH
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className='top-country'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2>Top Country To Visit</h2>
            <a href=''>
              View all top Country <i className='fa fa-long-arrow-right'></i>
            </a>
          </div>
          <div className='row flight-slider'>
            <div className='col-md-4 col-sm-12 col-xs-12'>
              <div className='destination-item box-item'>
                <div className='destination-image'>
                  <img src='images/deal3.jpg' alt='Image' />
                  <div className='thumbnail-ribbon'>
                    <span>Off 20%</span>
                  </div>
                </div>
                <div className='destination-content'>
                  <h3>
                    <a href='flight-detail.html'>PARIS</a>
                  </h3>
                  <p className='package-review pull-left'>
                    <a href='#'>
                      <i className='fa fa-comment-o'></i> 52 Reviews
                    </a>
                  </p>
                  <div className='deal-rating pull-right'>
                    <span className='fa fa-star checked'></span>
                    <span className='fa fa-star checked'></span>
                    <span className='fa fa-star checked'></span>
                    <span className='fa fa-star-o'></span>
                    <span className='fa fa-star-o'></span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 col-xs-12'>
              <div className='destination-item box-item'>
                <div className='destination-image'>
                  <img src='images/deal4.jpg' alt='Image' />
                </div>
                <div className='destination-content'>
                  <h3>
                    <a href='flight-detail.html'>MILAN</a>
                  </h3>
                  <p className='package-review pull-left'>
                    <a href='#'>
                      <i className='fa fa-comment-o'></i> 54 Reviews
                    </a>
                  </p>
                  <div className='deal-rating pull-right'>
                    <span className='fa fa-star checked'></span>
                    <span className='fa fa-star checked'></span>
                    <span className='fa fa-star checked'></span>
                    <span className='fa fa-star-o'></span>
                    <span className='fa fa-star-o'></span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 col-xs-12'>
              <div className='destination-item box-item'>
                <div className='destination-image'>
                  <img src='images/destination-fw4.jpg' alt='Image' />
                  <div className='thumbnail-ribbon'>
                    <span>Off 15%</span>
                  </div>
                </div>
                <div className='destination-content'>
                  <h3>
                    <a href='flight-detail.html'>BARCELONA</a>
                  </h3>
                  <p className='package-review pull-left'>
                    <a href='#'>
                      <i className='fa fa-comment-o'></i> 68 Reviews
                    </a>
                  </p>
                  <div className='deal-rating pull-right'>
                    <span className='fa fa-star checked'></span>
                    <span className='fa fa-star checked'></span>
                    <span className='fa fa-star checked'></span>
                    <span className='fa fa-star-o'></span>
                    <span className='fa fa-star-o'></span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-12 col-xs-12'>
              <div className='destination-item box-item'>
                <div className='destination-image'>
                  <img src='images/destination-fw3.jpg' alt='Image' />
                </div>
                <div className='destination-content'>
                  <h3>
                    <a href='flight-detail.html'>NEW YORK</a>
                  </h3>
                  <p className='package-review pull-left'>
                    <a href='#'>
                      <i className='fa fa-comment-o'></i> 71 Reviews
                    </a>
                  </p>
                  <div className='deal-rating pull-right'>
                    <span className='fa fa-star checked'></span>
                    <span className='fa fa-star checked'></span>
                    <span className='fa fa-star checked'></span>
                    <span className='fa fa-star-o'></span>
                    <span className='fa fa-star-o'></span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 col-xs-12'>
              <div className='destination-item box-item'>
                <div className='destination-image'>
                  <img src='images/destination-fw2.jpg' alt='Image' />
                  <div className='thumbnail-ribbon'>
                    <span>Off 25%</span>
                  </div>
                </div>
                <div className='destination-content'>
                  <h3>
                    <a href='flight-detail.html'>MONACO</a>
                  </h3>
                  <p className='package-review pull-left'>
                    <a href='#'>
                      <i className='fa fa-comment-o'></i> 35 Reviews
                    </a>
                  </p>
                  <div className='deal-rating pull-right'>
                    <span className='fa fa-star checked'></span>
                    <span className='fa fa-star checked'></span>
                    <span className='fa fa-star checked'></span>
                    <span className='fa fa-star-o'></span>
                    <span className='fa fa-star-o'></span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 col-xs-12'>
              <div className='destination-item box-item'>
                <div className='destination-image'>
                  <img src='images/destination-fw1.jpg' alt='Image' />
                </div>
                <div className='destination-content'>
                  <h3>
                    <a href='flight-detail.html'>LONDON</a>
                  </h3>
                  <p className='package-review pull-left'>
                    <a href='#'>
                      <i className='fa fa-comment-o'></i> 80 Reviews
                    </a>
                  </p>
                  <div className='deal-rating pull-right'>
                    <span className='fa fa-star checked'></span>
                    <span className='fa fa-star checked'></span>
                    <span className='fa fa-star checked'></span>
                    <span className='fa fa-star-o'></span>
                    <span className='fa fa-star-o'></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
