import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import StickyNav from '../Dashboard/StickyNav'
import Aside from '../Aside/Aside'
import { updateOfferAction } from '../../redux/actions/offersActions'
import { CircularProgress } from '@material-ui/core'

export default function EditOffers() {
  const dispatch = useDispatch()
  const router = useRouter()
  const offersData = useSelector((state) => state.offersReducer?.offer?.offer)
  const offerData = useSelector((state) => state?.offersReducer?.offer) || {}
  const { loading } = offerData

  const {
    query: { id },
  } = router
  const detail = offersData ? offersData[id ? id : 0] : {}

  const [editOfferName, seteditOfferName] = useState(detail?.Name)
  const [editOfferFromCity, seteditOfferFromCity] = useState(detail?.FromCity)
  const [editOfferToCity, seteditOfferToCity] = useState(detail?.ToCity)
  const [editOfferPrice, seteditOfferPrice] = useState(detail?.Price)

  const updateOffers = (e) => {
    e.preventDefault()
    if (
      !editOfferName ||
      !editOfferFromCity ||
      !editOfferToCity ||
      !editOfferPrice
    ) {
      console.log('if condition')
      toast.error('Please fill the required field', {
        position: 'bottom-right',
      })
    } else {
      console.log('clicked')
      const updateOffer = {
        _id: detail?._id,

        values_to_update: {
          Name: editOfferName,
          FromCity: editOfferFromCity,
          ToCity: editOfferToCity,
          Price: editOfferPrice,
        },
      }

      dispatch(updateOfferAction(updateOffer))
      router.push('/offerList')
    }
  }

  return (
    <div id='container-wrapper'>
      <div id='dashboard'>
        <a href='#' className='dashboard-responsive-nav-trigger'>
          <i className='fa fa-reorder'></i> Dashboard Navigation
        </a>
        <StickyNav />
        <Aside />
        <div className='dashboard-content'>
          <div className='container'>
            <div className='row'></div>
            <div className='col-lg-12 col-md-12 col-xs-12 padding-right-30'>
              <div className='dashboard-list-box'>
                <h4 className='gray'>Update Offer</h4>
                <div className='dashboard-list-box-static'>
                  <div>
                    <form>
                      <div className='row with-forms'>
                        <div className='col-md-12'>
                          <label>
                            Offer Name{' '}
                            <i
                              className='tip'
                              data-tip-content='Name of your business'
                            ></i>
                          </label>
                          <input
                            className='search-field'
                            type='text'
                            value={editOfferName}
                            onChange={(e) => seteditOfferName(e.target.value)}
                            placeholder='Enter Offer Name'
                          />
                        </div>
                      </div>
                      <div className='row with-forms'>
                        <div className='col-md-6'>
                          <label>
                            From City Name{' '}
                            <i
                              className='tip'
                              data-tip-content='Maximum of 15 keywords related with your business'
                            ></i>
                          </label>
                          <input
                            type='text'
                            placeholder='Enter From City'
                            value={editOfferFromCity}
                            onChange={(e) =>
                              seteditOfferFromCity(e.target.value)
                            }
                          />
                        </div>
                        <div className='col-md-6'>
                          <label>
                            To City Name{' '}
                            <i
                              className='tip'
                              data-tip-content='Maximum of 15 keywords related with your business'
                            ></i>
                          </label>
                          <input
                            type='text'
                            placeholder='Enter To City'
                            value={editOfferToCity}
                            onChange={(e) => seteditOfferToCity(e.target.value)}
                          />
                        </div>
                        <div className='col-md-6'>
                          <label>
                            Offer Price{' '}
                            <i
                              className='tip'
                              data-tip-content='Maximum of 15 keywords related with your business'
                            ></i>
                          </label>
                          <input
                            type='text'
                            placeholder='Enter Offer Price'
                            value={editOfferPrice}
                            onChange={(e) => seteditOfferPrice(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className='col-xs-12'>
                        <div className='comment-btn d-flex justify-content-center'>
                          <button
                            id='button'
                            type='click'
                            onClick={updateOffers}
                            className='btn-blue btn-red'
                          >
                            {loading ? (
                              <CircularProgress size={24} />
                            ) : (
                              'Update Offer'
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
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
