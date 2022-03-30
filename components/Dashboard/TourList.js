import React, { useEffect, useState } from 'react'
import Aside from '../Aside/Aside'
import StickyNav from './StickyNav'
import { Modal } from 'antd'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import TagsInput from 'react-tagsinput'

import 'react-tagsinput/react-tagsinput.css'
import {
  createPackageAction,
  deletePackgeAction,
  readPackageAction,
} from '../../redux/actions/packagesAction'
import swal from 'sweetalert'

export default function TourList() {
  const dispatch = useDispatch()
  const router = useRouter()
  const packages = useSelector(
    (state) => state.packagesReducer?.packages?.packagge
  )
  console.log('packages array ', packages)

  const [visible, setVisible] = React.useState(false)
  const [errors, setErrors] = useState({})

  const [packageName, setPackageName] = useState('')
  const [packageInfo, setPackageInfo] = useState('')
  const [packageDescription, setPackageDescription] = useState('')
  const [packageFeatures, setPackageFeatures] = useState([])
  const [packagePictures, setPackagePictures] = useState([''])

  const onTagChange = (tag) => {
    console.log('tag', tag)
    setPackageFeatures(tag)
  }

  const addPictures = () => {
    return setPackagePictures([...packagePictures, ''])
  }
  const removePictures = (index) => {
    let multiPictures = packagePictures
    const abc = multiPictures.splice(index, 1)
    setPackagePictures([...multiPictures])
  }

  const changePicturesValue = (value, index) => {
    let multiPics = packagePictures
    multiPics[index] = value
    console.log('multipictures', multiPics)
    setPackagePictures([...multiPics])
  }

  const showModal = () => {
    setVisible(true)
  }

  const validate = (values) => {
    const errorsObj = {}
    if (!values.packageName) {
      errorsObj.packageName = 'Package Name is required'
    }
    if (!values.packageInfo) {
      errorsObj.packageInfo = 'Package Info is required'
    }
    if (!values.packageDescription) {
      errorsObj.packageDescription = 'Package Description is required'
    }
    if (!values.packageFeatures) {
      errorsObj.packageFeatures = 'Package Features are required'
    }
    if (!values.packagePictures) {
      errorsObj.packagePictures = 'Package Pictures are required'
    }
    console.log('errorsObj', errorsObj)
    return errorsObj
  }

  const handleOk = (e) => {
    console.log('click')
    e.preventDefault()
    const val = {
      packageName,
      packageInfo,
      packageDescription,
      packageFeatures,
      packagePictures,
    }
    // if (
    //   !packageName ||
    //   !packageInfo ||
    //   !packageDescription ||
    //   !packageFeatures ||
    //   !packagePictures
    // ) {
    //   console.log('if condition')
    //   toast.error('Please fill the required field', {
    //     position: 'bottom-right',
    //   })
    // } else {
    //   console.log(
    //     'Package creation Data',
    //     packageName,
    //     packageInfo,
    //     packageDescription,
    //     packageFeatures,
    //     packagePictures
    //   )
    //   const createPackage = {
    //     Name: packageName,
    //     Info: packageInfo,
    //     Description: packageDescription,
    //     Features: packageFeatures,
    //     Pictures: packagePictures,
    //   }
    //   dispatch(createPackageAction(createPackage))
    //   setVisible(false)
    // }
    const createPackage = {
      Name: packageName,
      Info: packageInfo,
      Description: packageDescription,
      Features: packageFeatures,
      Pictures: packagePictures,
    }
    setErrors(validate(val))

    dispatch(createPackageAction(createPackage))
    // setVisible(false)
    setPackageName('')
    setPackageInfo('')
    setPackageDescription('')
    setPackageFeatures([])
    setPackagePictures([''])
  }

  const handleCancel = () => {
    console.log('Clicked cancel button')
    setVisible(false)
  }
  useEffect(() => {
    dispatch(readPackageAction())
  }, [])

  const { query } = router
  const editPackage = (_id) => {
    console.log('clicked', _id)
    router.push({ pathname: '/editPackage', query: { id: _id } })
  }

  const delPackage = (id) => {
    console.log('id', id)
    const delPackageId = {
      _id: id,
    }

    swal({
      title: 'Are you sure?',
      text: 'You want to delete the current Package',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deletePackgeAction(delPackageId))
        swal('Package has been deleted!', {
          icon: 'success',
        })
      } else {
        swal('Your Package is safe!')
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
        <Modal
          centered
          visible={visible}
          onOk={handleOk}
          okText='Create Package'
          onCancel={handleCancel}
          // bodyStyle={{ overflowX: 'scroll', overflowY: 'scroll' }}
          style={{ height: '80vh', overflowY: 'scroll' }}
          bodyStyle={{ overflowY: 'scroll' }}
        >
          <form>
            <div className='row with-forms'>
              <div className='col-md-12'>
                <label>Package Name </label>
                <input
                  className='search-field'
                  type='text'
                  value={packageName}
                  onChange={(e) => {
                    setErrors({ ...errors, packageName: '' })

                    setPackageName(e.target.value)
                  }}
                  placeholder='Enter Package Name'
                  style={{
                    border: '1px solid',
                    borderRadius: '5px',
                    borderColor: 'gray',
                  }}
                />
                <p className='text-danger'>{errors.packageName}</p>
              </div>
            </div>
            <div className='row with-forms'>
              <div className='col-md-12'>
                <label>Package Info </label>
                <input
                  type='text'
                  placeholder='Enter Package Info'
                  value={packageInfo}
                  onChange={(e) => {
                    setErrors({ ...errors, packageInfo: '' })

                    setPackageInfo(e.target.value)
                  }}
                  style={{
                    border: '1px solid',
                    borderRadius: '5px',
                    borderColor: 'gray',
                  }}
                />
                <p className='text-danger'>{errors.packageInfo}</p>
              </div>
              <div className='col-md-12'>
                <label>Package Features </label>
                <TagsInput
                  value={packageFeatures}
                  onChange={onTagChange}
                  style={{
                    border: '1px solid gray !important',
                    borderRadius: '5px !important',
                  }}
                />
                <p className='text-danger'>{errors.packageFeatures}</p>
              </div>
              {packagePictures.map((multiPics, index) => (
                <>
                  <div className='col-md-9'>
                    <label>Package Pictures </label>
                    <input
                      type='text'
                      placeholder='Enter Package Pictures'
                      // value={packagePictures}
                      onChange={(e) => {
                        setErrors({ ...errors, packagePictures: '' })
                        changePicturesValue(e.target.value, index)
                      }}
                      style={{
                        border: '1px solid',
                        borderRadius: '5px',
                        borderColor: 'gray',
                      }}
                    />
                    <p className='text-danger'>{errors.packagePictures}</p>
                  </div>
                  <div className='col-md-3 col-sm-6 form-end-buttonn'>
                    {index === 0 ? (
                      <Button onClick={addPictures} variant='success'>
                        <img
                          src='/images/close.png'
                          alt=''
                          className='add-button'
                        />
                      </Button>
                    ) : index > 0 ? (
                      <Button onClick={removePictures} variant='danger'>
                        <img
                          src='/images/close.png'
                          alt=''
                          className='cross-button'
                        />
                      </Button>
                    ) : null}
                  </div>
                </>
              ))}
            </div>
            <div className='row with-forms'>
              <div className='col-md-12'>
                <label>Package Description </label>
                <textarea
                  className='search-field'
                  type='text'
                  value={packageDescription}
                  onChange={(e) => {
                    setErrors({ ...errors, packageDescription: '' })

                    setPackageDescription(e.target.value)
                  }}
                  placeholder='Enter Package Description'
                  style={{
                    border: '1px solid',
                    borderRadius: '5px',
                    borderColor: 'gray',
                  }}
                />
                <p className='text-danger'>{errors.packageDescription}</p>
              </div>
            </div>
          </form>
        </Modal>

        <div className='dashboard-content'>
          <div className='row'>
            <div className='col-lg-12 col-sm-12'>
              <div className='dashboard-list-box mb-4 mr-2 d-flex justify-content-end'>
                <a
                  className='button gray'
                  type='click'
                  onClick={() => setVisible(true)}
                >
                  <i className='sl sl-icon-briefcase'></i> Create
                </a>
              </div>
              <div className='dashboard-list-box dash-list margin-top-0'>
                <div className='row'>
                  {packages?.map((p, index) => (
                    <div className='col-sm-4'>
                      <div className='list-box-listing'>
                        <div className='list-box-listing-img'>
                          <a href='#'>
                            <img src={p?.Pictures[0]} alt='' />
                          </a>
                        </div>
                        <div className='list-box-listing-content'>
                          <div className='inner'>
                            <a href='dashboard-listdetail.html'>
                              <h3>{p?.Name}</h3>
                            </a>
                            <span>{p?.Info}</span>
                          </div>
                          <a
                            type='click'
                            onClick={() => editPackage(index)}
                            className='button gray'
                          >
                            <i className='sl sl-icon-pencil'></i> Edit
                          </a>
                          <a
                            type='click'
                            onClick={() => delPackage(p?._id)}
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
