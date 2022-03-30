import React, { useEffect, useState } from 'react'
import Aside from '../Aside/Aside'
import StickyNav from './StickyNav'
import { Modal, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import swal from 'sweetalert'
import {
  createOfferAction,
  deleteOfferAction,
  readOfferAction,
} from '../../redux/actions/offersActions'

export default function OffersList() {
  const dispatch = useDispatch()
  const router = useRouter()
  const offers = useSelector((state) => state.offersReducer?.offer?.offer)

  const [errors, setErrors] = useState({})

  const [visible, setVisible] = React.useState(false)
  const [offerName, setOfferName] = useState('')
  const [offerFromCity, setOfferFromCity] = useState('')
  const [offerToCity, setOfferToCity] = useState('')
  const [offerPrice, setOfferPrice] = useState('')

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = (e) => {
    console.log('click on handle ok')
    e.preventDefault()

    const val = {
      offerName,
      offerFromCity,
      offerToCity,
      offerPrice,
    }
    // if (!offerName || !offerFromCity || !offerToCity || !offerPrice) {
    //   console.log('if condition')
    //   toast.error('Please fill the required field', {
    //     position: 'bottom-right',
    //   })
    // } else {
    //   console.log('clicked')
    //   const offer = {
    //     Name: offerName,
    //     FromCity: offerFromCity,
    //     ToCity: offerToCity,
    //     Price: offerPrice,
    //   }
    //   setErrors(validate(offer))
    //   dispatch(createOfferAction(offer))
    //   setVisible(false)
    // }
    const offer = {
      Name: offerName,
      FromCity: offerFromCity,
      ToCity: offerToCity,
      Price: offerPrice,
    }
    setErrors(validate(val))
    dispatch(createOfferAction(offer))
    // setVisible(false)
    setOfferName('')
    setOfferPrice('')
    setOfferFromCity('')
    setOfferToCity('')
  }

  const handleCancel = () => {
    console.log('Clicked cancel button')
    setVisible(false)
  }

  const validate = (values) => {
    const errorsObj = {}
    if (!values.offerName) {
      errorsObj.offerName = 'Offer Name is required'
    }
    if (!values.offerFromCity) {
      errorsObj.offerFromCity = 'From City Name is required'
    }
    if (!values.offerToCity) {
      errorsObj.offerToCity = 'To City Name is required'
    }
    if (!values.offerPrice) {
      errorsObj.offerPrice = 'Price is required'
    }
    console.log('errorsObj', errorsObj)
    return errorsObj
  }

  console.log('offer array', offers)
  useEffect(() => {
    dispatch(readOfferAction())
  }, [])
  const { query } = router
  const editOffer = (_id) => {
    console.log('clicked', _id)
    router.push({ pathname: '/editOffer', query: { id: _id } })
  }

  const delOffer = (id) => {
    console.log('id to be deleted', id)
    const delOfferId = {
      _id: id,
    }

    swal({
      title: 'Are you sure?',
      text: 'You want to delete the current Offer',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteOfferAction(delOfferId))
        swal('Offer has been deleted!', {
          icon: 'success',
        })
      } else {
        swal('Your Offer is safe!')
      }
    })
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
          <div className='row'>
            <div className='col-lg-12 col-sm-12'>
              <div className='dashboard-list-box mb-4 mr-2 d-flex justify-content-end'>
                <a
                  className='button gray'
                  type='click'
                  onClick={() => setVisible(true)}
                >
                  <i className='sl sl-icon-present'></i> Create
                </a>
              </div>
              <Modal
                centered
                visible={visible}
                onOk={handleOk}
                okText='Create Offer'
                onCancel={handleCancel}
                style={{ borderRadius: '25px' }}
              >
                <form>
                  <div className='row with-forms'>
                    <div className='col-md-12'>
                      <label>Offer Name </label>
                      <input
                        className='search-field'
                        type='text'
                        value={offerName}
                        required
                        aria-required='true'
                        onChange={(e) => {
                          setErrors({ ...errors, offerName: '' })
                          setOfferName(e.target.value)
                        }}
                        placeholder='Enter Offer Name'
                        style={{
                          border: '1px solid',
                          borderRadius: '5px',
                          borderColor: 'gray',
                        }}
                      />
                      <p className='text-danger'>{errors.offerName}</p>
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
                        onChange={(e) => {
                          setErrors({ ...errors, offerFromCity: '' })
                          setOfferFromCity(e.target.value)
                        }}
                        style={{
                          border: '1px solid',
                          borderRadius: '5px',
                          borderColor: 'gray',
                        }}
                      />
                      <p className='text-danger'>{errors.offerFromCity}</p>
                    </div>
                    <div className='col-md-6'>
                      <label>To City Name </label>
                      <input
                        type='text'
                        placeholder='Enter To City'
                        required
                        value={offerToCity}
                        onChange={(e) => {
                          setErrors({ ...errors, offerToCity: '' })
                          setOfferToCity(e.target.value)
                        }}
                        style={{
                          border: '1px solid',
                          borderRadius: '5px',
                          borderColor: 'gray',
                        }}
                      />
                      <p className='text-danger'>{errors.offerToCity}</p>
                    </div>
                    <div className='col-md-6'>
                      <label>Offer Price </label>
                      <input
                        type='text'
                        placeholder='Enter Offer Price'
                        required
                        value={offerPrice}
                        onChange={(e) => {
                          setErrors({ ...errors, offerPrice: '' })
                          setOfferPrice(e.target.value)
                        }}
                        style={{
                          border: '1px solid',
                          borderRadius: '5px',
                          borderColor: 'gray',
                        }}
                      />
                      <p className='text-danger'>{errors.offerPrice}</p>
                    </div>
                  </div>
                </form>
              </Modal>
              <div className='dashboard-list-box dash-list margin-top-0'>
                <div className='row'>
                  {offers?.map((o, index) => (
                    <div className='col-sm-4'>
                      <div className='list-box-listing'>
                        <div className='list-box-listing-img'>
                          <a href='#'>
                            {/* <img src={p?.Pictures[0]} alt='' /> */}
                          </a>
                        </div>
                        <div className='list-box-listing-content'>
                          <div className='inner'>
                            <a href='#'>
                              <h3>{o?.Name}</h3>
                            </a>
                            <span>{o?.FromCity}</span>
                            <span>{o?.ToCity}</span>
                          </div>
                          <a
                            className='button gray'
                            type='click'
                            onClick={() => editOffer(index)}
                          >
                            <i className='sl sl-icon-pencil'></i> Edit
                          </a>
                          <a
                            type='click'
                            onClick={() => delOffer(o?._id)}
                            className='button gray'
                          >
                            <i className='sl sl-icon-close'></i> Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className='clearfix'></div>
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
