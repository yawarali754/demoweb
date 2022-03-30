import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import StickyNav from '../Dashboard/StickyNav'
import Aside from '../Aside/Aside'
import { createOfferAction } from '../../redux/actions/offersActions'
import { CircularProgress } from '@material-ui/core'
import { useRouter } from 'next/router'

export default function CreateOffers() {
  const dispatch = useDispatch()
  const router = useRouter()
  const offersData = useSelector((state) => state.offersReducer)
  const { loading } = offersData
  const [offerName, setOfferName] = useState('')
  const [offerFromCity, setOfferFromCity] = useState('')
  const [offerToCity, setOfferToCity] = useState('')
  const [offerPrice, setOfferPrice] = useState('')

  const createOffers = (e) => {
    e.preventDefault()
    if (!offerName || !offerFromCity || !offerToCity || !offerPrice) {
      console.log('if condition')
      toast.error('Please fill the required field', {
        position: 'bottom-right',
      })
    } else {
      console.log('clicked')
      const offer = {
        Name: offerName,
        FromCity: offerFromCity,
        ToCity: offerToCity,
        Price: offerPrice,
      }
      dispatch(createOfferAction(offer))
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
                <h4 className='gray'>Create Offer</h4>
                <div className='dashboard-list-box-static'>
                  <div>
                    <form>
                      <div className='row with-forms'>
                        <div className='col-md-12'>
                          <label>Offer Name </label>
                          <input
                            className='search-field'
                            type='text'
                            value={offerName}
                            required
                            onChange={(e) => setOfferName(e.target.value)}
                            placeholder='Enter Offer Name'
                          />
                        </div>
                      </div>
                      <div className='row with-forms'>
                        <div className='col-md-6'>
                          <label>From City Name </label>
                          <input
                            type='text'
                            placeholder='Enter From City'
                            required
                            value={offerFromCity}
                            onChange={(e) => setOfferFromCity(e.target.value)}
                          />
                        </div>
                        <div className='col-md-6'>
                          <label>To City Name </label>
                          <input
                            type='text'
                            placeholder='Enter To City'
                            required
                            value={offerToCity}
                            onChange={(e) => setOfferToCity(e.target.value)}
                          />
                        </div>
                        <div className='col-md-6'>
                          <label>Offer Price </label>
                          <input
                            type='text'
                            placeholder='Enter Offer Price'
                            required
                            value={offerPrice}
                            onChange={(e) => setOfferPrice(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className='col-xs-12'>
                        <div className='comment-btn d-flex justify-content-center'>
                          <button
                            id='button'
                            type='click'
                            onClick={createOffers}
                            className='btn-blue btn-red'
                          >
                            {loading ? (
                              <CircularProgress size={24} />
                            ) : (
                              'Create Offer'
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
            <a href='https://tezeract.ai/' target='_blank'>
              Tezeract.ai
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
