import React from 'react'
import Aside from '../Aside/Aside'
import StickyNav from './StickyNav'

export default function AddTour() {
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
            <div className='col-lg-12 col-sm-12'>
              <div id='add-listing'>
                <div className='add-listing-section'>
                  <div className='add-listing-headline'>
                    <h3>
                      <i className='sl sl-icon-doc'></i> Basic Informations
                    </h3>
                  </div>

                  <div className='row with-forms'>
                    <div className='col-md-12'>
                      <label>
                        Listing Title{' '}
                        <i
                          className='tip'
                          data-tip-content='Name of your business'
                        ></i>
                      </label>
                      <input className='search-field' type='text' value='' />
                    </div>
                  </div>

                  <div className='row with-forms'>
                    <div className='col-md-6'>
                      <label>Category</label>
                      <select className='chosen-select-no-single'>
                        <option label='blank'>Select Category</option>
                        <option>Eat & Drink</option>
                        <option>Shops</option>
                        <option>Hotels</option>
                        <option>Restaurants</option>
                        <option>Fitness</option>
                        <option>Events</option>
                      </select>
                    </div>

                    <div className='col-md-6'>
                      <label>
                        Keywords{' '}
                        <i
                          className='tip'
                          data-tip-content='Maximum of 15 keywords related with your business'
                        ></i>
                      </label>
                      <input
                        type='text'
                        placeholder='Keywords should be separated by commas'
                      />
                    </div>
                  </div>
                </div>

                <div className='add-listing-section'>
                  <div className='add-listing-headline'>
                    <h3>
                      <i className='sl sl-icon-map'></i> Location
                    </h3>
                  </div>

                  <div className='submit-section'>
                    <div className='row with-forms'>
                      <div className='col-md-6'>
                        <label>City</label>
                        <select className='chosen-select-no-single'>
                          <option label='blank'>Select City</option>
                          <option>New York</option>
                          <option>Los Angeles</option>
                          <option>Chicago</option>
                          <option>Houston</option>
                          <option>Phoenix</option>
                          <option>San Diego</option>
                          <option>Austin</option>
                        </select>
                      </div>

                      <div className='col-md-6'>
                        <label>Address</label>
                        <input
                          type='text'
                          placeholder='e.g. 964 School Street'
                        />
                      </div>

                      <div className='col-md-6'>
                        <label>State</label>
                        <input type='text' />
                      </div>

                      <div className='col-md-6'>
                        <label>Zip-Code</label>
                        <input type='text' />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='add-listing-section'>
                  <div className='add-listing-headline'>
                    <h3>
                      <i className='sl sl-icon-picture'></i> Gallery
                    </h3>
                  </div>

                  <div className='submit-section'>
                    <form action='/file-upload' className='dropzone'></form>
                  </div>
                </div>

                <div className='add-listing-section'>
                  <div className='add-listing-headline'>
                    <h3>
                      <i className='sl sl-icon-docs'></i> Details
                    </h3>
                  </div>

                  <div className='form'>
                    <label>Description</label>
                    <textarea
                      className='WYSIWYG'
                      name='summary'
                      cols='40'
                      rows='3'
                      id='summary'
                      spellcheck='true'
                    ></textarea>
                  </div>

                  <div className='row with-forms'>
                    <div className='col-md-4'>
                      <label>
                        Phone <span>(optional)</span>
                      </label>
                      <input type='text' />
                    </div>

                    <div className='col-md-4'>
                      <label>
                        Website <span>(optional)</span>
                      </label>
                      <input type='text' />
                    </div>

                    <div className='col-md-4'>
                      <label>
                        E-mail <span>(optional)</span>
                      </label>
                      <input type='text' />
                    </div>
                  </div>

                  <div className='row with-forms'>
                    <div className='col-md-4'>
                      <label className='fb-input'>
                        <i className='fa fa-facebook-square'></i> Facebook
                        <span>(optional)</span>
                      </label>
                      <input
                        type='text'
                        placeholder='https://www.facebook.com/'
                      />
                    </div>

                    <div className='col-md-4'>
                      <label className='twitter-input'>
                        <i className='fa fa-twitter'></i> Twitter
                        <span>(optional)</span>
                      </label>
                      <input
                        type='text'
                        placeholder='https://www.twitter.com/'
                      />
                    </div>

                    <div className='col-md-4'>
                      <label className='gplus-input'>
                        <i className='fa fa-google-plus'></i> Google Plus
                        <span>(optional)</span>
                      </label>
                      <input
                        type='text'
                        placeholder='https://plus.google.com'
                      />
                    </div>
                  </div>

                  <label className='margin-top-30 margin-bottom-10'>
                    Amenities <span>(optional)</span>
                  </label>
                  <div className='checkboxes in-row margin-bottom-20'>
                    <input id='check-a' type='checkbox' name='check' />
                    <label for='check-a'>Elevator in building</label>

                    <input id='check-b' type='checkbox' name='check' />
                    <label for='check-b'>Friendly workspace</label>

                    <input id='check-c' type='checkbox' name='check' />
                    <label for='check-c'>Instant Book</label>

                    <input id='check-d' type='checkbox' name='check' />
                    <label for='check-d'>Wireless Internet</label>

                    <input id='check-e' type='checkbox' name='check' />
                    <label for='check-e'>Free parking on premises</label>

                    <input id='check-f' type='checkbox' name='check' />
                    <label for='check-f'>Free parking on street</label>

                    <input id='check-g' type='checkbox' name='check' />
                    <label for='check-g'>Smoking allowed</label>

                    <input id='check-h' type='checkbox' name='check' />
                    <label for='check-h'>Events</label>
                  </div>
                </div>
                <div className='add-listing-section'>
                  <div className='add-listing-headline'>
                    <h3>
                      <i className='sl sl-icon-book-open'></i> Pricing
                    </h3>
                    <label className='switch'>
                      <input type='checkbox' />
                      <span className='slider round'></span>
                    </label>
                  </div>

                  <div className='switcher-content'>
                    <div className='row'>
                      <div className='col-md-12'>
                        <table id='pricing-list-container'>
                          <tr className='pricing-list-item pattern'>
                            <td>
                              <div className='fm-move'>
                                <i className='sl sl-icon-cursor-move'></i>
                              </div>
                              <div className='fm-input pricing-name'>
                                <input type='text' placeholder='Title' />
                              </div>
                              <div className='fm-input pricing-ingredients'>
                                <input type='text' placeholder='Description' />
                              </div>
                              <div className='fm-input pricing-price'>
                                <input
                                  type='text'
                                  placeholder='Price'
                                  data-unit='USD'
                                />
                              </div>
                              <div className='fm-close'>
                                <a className='delete' href='#'>
                                  <i className='fa fa-remove'></i>
                                </a>
                              </div>
                            </td>
                          </tr>
                        </table>
                        <a href='#' className='button add-pricing-list-item'>
                          Add Item
                        </a>
                        <a href='#' className='button add-pricing-submenu'>
                          Add Category
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a href='#' className='button preview'>
                  Preview <i className='fa fa-arrow-circle-right'></i>
                </a>
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
