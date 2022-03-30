import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import StickyNav from '../Dashboard/StickyNav'
import Aside from '../Aside/Aside'
import { createPackageAction } from '../../redux/actions/packagesAction'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.
import { Button } from 'react-bootstrap'
import { CircularProgress } from '@material-ui/core'
import { useRouter } from 'next/router'

export default function CreatePackage() {
  const dispatch = useDispatch()
  const router = useRouter()
  const packages = useSelector((state) => state.packagesReducer)
  const { loading } = packages
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

  const createPackage = (e) => {
    e.preventDefault()
    if (
      !packageName ||
      !packageInfo ||
      !packageDescription ||
      !packageFeatures ||
      !packagePictures
    ) {
      console.log('if condition')
      toast.error('Please fill the required field', {
        position: 'bottom-right',
      })
    } else {
      console.log(
        'Package creation Data',
        packageName,
        packageInfo,
        packageDescription,
        packageFeatures,
        packagePictures
      )
      const createPackage = {
        Name: packageName,
        Info: packageInfo,
        Description: packageDescription,
        Features: packageFeatures,
        Pictures: packagePictures,
      }
      dispatch(createPackageAction(createPackage))
      router.push('/packagesList')
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
                <h4 className='gray'>Create Package</h4>
                <div className='dashboard-list-box-static'>
                  <div>
                    <form>
                      <div className='row with-forms'>
                        <div className='col-md-12'>
                          <label>Package Name </label>
                          <input
                            className='search-field'
                            type='text'
                            value={packageName}
                            onChange={(e) => setPackageName(e.target.value)}
                            placeholder='Enter Package Name'
                          />
                        </div>
                      </div>
                      <div className='row with-forms'>
                        <div className='col-md-6'>
                          <label>Package Info </label>
                          <input
                            type='text'
                            placeholder='Enter Package Info'
                            value={packageInfo}
                            onChange={(e) => setPackageInfo(e.target.value)}
                          />
                        </div>
                        <div className='col-md-6'>
                          <label>Package Features </label>
                          <TagsInput
                            value={packageFeatures}
                            onChange={onTagChange}
                          />
                        </div>
                        {packagePictures.map((multiPics, index) => (
                          <>
                            <div className='col-md-9'>
                              <label>Package Pictures </label>
                              <input
                                type='text'
                                placeholder='Enter Package Pictures'
                                // value={packagePictures}
                                onChange={(e) =>
                                  changePicturesValue(e.target.value, index)
                                }
                              />
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
                                <Button
                                  onClick={removePictures}
                                  variant='danger'
                                >
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
                            onChange={(e) =>
                              setPackageDescription(e.target.value)
                            }
                            placeholder='Enter Package Description'
                          />
                        </div>
                      </div>
                      <div className='col-xs-12'>
                        <div className='comment-btn d-flex justify-content-center'>
                          <button
                            id='button'
                            type='click'
                            onClick={createPackage}
                            className='btn-blue btn-red'
                          >
                            {loading ? (
                              <CircularProgress size={24} />
                            ) : (
                              'Create Package'
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
