import React from 'react'
import Aside from '../Aside/Aside'
import StickyNav from './StickyNav'

export default function Reviews() {
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
              <div className='col-lg-6 col-md-12 padding-right-30'>
                <div className='dashboard-list-box margin-top-0'>
                  <div className='sort-by'>
                    <div className='sort-by-select'>
                      <select
                        data-placeholder='Default order'
                        className='chosen-select-no-single'
                      >
                        <option>All Listings</option>
                        <option>Tom's Restaurant</option>
                        <option>Sticky Band</option>
                        <option>Hotel Govendor</option>
                        <option>Burger House</option>
                        <option>Airport</option>
                        <option>Think Coffee</option>
                      </select>
                    </div>
                  </div>

                  <h4 className='gray'>Visitor Reviews</h4>

                  <ul>
                    <li>
                      <div className='comments listing-reviews'>
                        <ul>
                          <li>
                            <div className='avatar'>
                              <img
                                src='http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70'
                                alt=''
                              />
                            </div>
                            <div className='comment-content'>
                              <div className='arrow-comment'></div>
                              <div className='comment-by'>
                                Kathy Brown{' '}
                                <div className='comment-by-listing'>
                                  on <a href='#'>Burger House</a>
                                </div>{' '}
                                <span className='date'>June 2017</span>
                                <div
                                  className='star-rating'
                                  data-rating='5'
                                ></div>
                              </div>
                              <p>
                                Morbi velit eros, sagittis in facilisis non,
                                rhoncus et erat. Nam posuere tristique sem, eu
                                ultricies tortor imperdiet vitae. Curabitur
                                lacinia neque non metus
                              </p>
                              <a
                                href='#small-dialog'
                                className='rate-review popup-with-zoom-anim'
                              >
                                <i className='sl sl-icon-action-undo'></i> Reply
                                to this review
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <div className='comments listing-reviews'>
                        <ul>
                          <li>
                            <div className='avatar'>
                              <img
                                src='http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70'
                                alt=''
                              />{' '}
                            </div>
                            <div className='comment-content'>
                              <div className='arrow-comment'></div>
                              <div className='comment-by'>
                                John Doe{' '}
                                <div className='comment-by-listing'>
                                  on <a href='#'>Burger House</a>
                                </div>{' '}
                                <span className='date'>May 2017</span>
                                <div
                                  className='star-rating'
                                  data-rating='4'
                                ></div>
                              </div>
                              <p>
                                Commodo est luctus eget. Proin in nunc laoreet
                                justo volutpat blandit enim. Sem felis,
                                ullamcorper vel aliquam non, varius eget justo.
                                Duis quis nunc tellus sollicitudin mauris.
                              </p>
                              <a
                                href='#small-dialog'
                                className='rate-review popup-with-zoom-anim'
                              >
                                <i className='sl sl-icon-action-undo'></i> Reply
                                to this review
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <div className='comments listing-reviews'>
                        <ul>
                          <li>
                            <div className='avatar'>
                              <img
                                src='http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70'
                                alt=''
                              />
                            </div>
                            <div className='comment-content'>
                              <div className='arrow-comment'></div>
                              <div className='comment-by'>
                                Kathy Brown{' '}
                                <div className='comment-by-listing'>
                                  on <a href='#'>Burger House</a>
                                </div>{' '}
                                <span className='date'>June 2017</span>
                                <div
                                  className='star-rating'
                                  data-rating='5'
                                ></div>
                              </div>
                              <p>
                                Morbi velit eros, sagittis in facilisis non,
                                rhoncus et erat. Nam posuere tristique sem, eu
                                ultricies tortor imperdiet vitae. Curabitur
                                lacinia neque non metus
                              </p>
                              <a
                                href='#small-dialog'
                                className='rate-review popup-with-zoom-anim'
                              >
                                <i className='sl sl-icon-action-undo'></i> Reply
                                to this review
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <div className='comments listing-reviews'>
                        <ul>
                          <li>
                            <div className='avatar'>
                              <img
                                src='http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70'
                                alt=''
                              />{' '}
                            </div>
                            <div className='comment-content'>
                              <div className='arrow-comment'></div>
                              <div className='comment-by'>
                                John Doe{' '}
                                <div className='comment-by-listing'>
                                  on <a href='#'>Burger House</a>
                                </div>{' '}
                                <span className='date'>May 2017</span>
                                <div
                                  className='star-rating'
                                  data-rating='5'
                                ></div>
                              </div>
                              <p>
                                Commodo est luctus eget. Proin in nunc laoreet
                                justo volutpat blandit enim. Sem felis,
                                ullamcorper vel aliquam non, varius eget justo.
                                Duis quis nunc tellus sollicitudin mauris.
                              </p>
                              <a
                                href='#small-dialog'
                                className='rate-review popup-with-zoom-anim'
                              >
                                <i className='sl sl-icon-action-undo'></i> Reply
                                to this review
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-lg-6 col-md-12 padding-left-30'>
                <div className='dashboard-list-box margin-top-0'>
                  <h4 className='gray'>Your Reviews</h4>
                  <ul>
                    <li>
                      <div className='comments listing-reviews'>
                        <ul>
                          <li>
                            <div className='avatar'>
                              <img
                                src='http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70'
                                alt=''
                              />
                            </div>
                            <div className='comment-content'>
                              <div className='arrow-comment'></div>
                              <div className='comment-by'>
                                Your review{' '}
                                <div className='comment-by-listing own-comment'>
                                  on <a href='#'>Tom's Restaurant</a>
                                </div>{' '}
                                <span className='date'>May 2017</span>
                                <div
                                  className='star-rating'
                                  data-rating='4.5'
                                ></div>
                              </div>
                              <p>
                                Commodo est luctus eget. Proin in nunc laoreet
                                justo volutpat blandit enim. Sem felis,
                                ullamcorper vel aliquam non, varius eget justo.
                              </p>
                              <a href='#' className='rate-review'>
                                <i className='sl sl-icon-note'></i> Edit
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <div className='comments listing-reviews'>
                        <ul>
                          <li>
                            <div className='avatar'>
                              <img
                                src='http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70'
                                alt=''
                              />
                            </div>
                            <div className='comment-content'>
                              <div className='arrow-comment'></div>
                              <div className='comment-by'>
                                Your review{' '}
                                <div className='comment-by-listing own-comment'>
                                  on <a href='#'>Think Coffee</a>
                                </div>{' '}
                                <span className='date'>May 2017</span>
                                <div
                                  className='star-rating'
                                  data-rating='5'
                                ></div>
                              </div>
                              <p>
                                Commodo est luctus eget. Proin in nunc laoreet
                                justo volutpat blandit enim. Sem felis,
                                ullamcorper vel aliquam non, varius eget justo.
                                Duis quis nunc tellus sollicitudin mauris.
                              </p>
                              <a href='#' className='rate-review'>
                                <i className='sl sl-icon-note'></i> Edit
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className='comments listing-reviews'>
                        <ul>
                          <li>
                            <div className='avatar'>
                              <img
                                src='http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70'
                                alt=''
                              />
                            </div>
                            <div className='comment-content'>
                              <div className='arrow-comment'></div>
                              <div className='comment-by'>
                                Kathy Brown{' '}
                                <div className='comment-by-listing'>
                                  on <a href='#'>Burger House</a>
                                </div>{' '}
                                <span className='date'>June 2017</span>
                                <div
                                  className='star-rating'
                                  data-rating='5'
                                ></div>
                              </div>
                              <p>
                                Morbi velit eros, sagittis in facilisis non,
                                rhoncus et erat. Nam posuere tristique sem, eu
                                ultricies tortor imperdiet vitae. Curabitur
                                lacinia neque non metus
                              </p>

                              <a
                                href='#small-dialog'
                                className='rate-review popup-with-zoom-anim'
                              >
                                <i className='sl sl-icon-action-undo'></i> Reply
                                to this review
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <div className='comments listing-reviews'>
                        <ul>
                          <li>
                            <div className='avatar'>
                              <img
                                src='http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70'
                                alt=''
                              />
                            </div>
                            <div className='comment-content'>
                              <div className='arrow-comment'></div>
                              <div className='comment-by'>
                                Kathy Brown{' '}
                                <div className='comment-by-listing'>
                                  on <a href='#'>Burger House</a>
                                </div>{' '}
                                <span className='date'>June 2017</span>
                                <div
                                  className='star-rating'
                                  data-rating='5'
                                ></div>
                              </div>
                              <p>
                                Morbi velit eros, sagittis in facilisis non,
                                rhoncus et erat. Nam posuere tristique sem, eu
                                ultricies tortor imperdiet vitae. Curabitur
                                lacinia neque non metus
                              </p>
                              <a
                                href='#small-dialog'
                                className='rate-review popup-with-zoom-anim'
                              >
                                <i className='sl sl-icon-action-undo'></i> Reply
                                to this review
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='clearfix'></div>
              <div className='pagination-container'>
                <nav className='pagination'>
                  <ul>
                    <li>
                      <a href='#' className='current-page'>
                        1
                      </a>
                    </li>
                    <li>
                      <a href='#'>2</a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='sl sl-icon-arrow-right'></i>
                      </a>
                    </li>
                  </ul>
                </nav>
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
