import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import StickyNav from '../Dashboard/StickyNav'
import Aside from '../Aside/Aside'
import { updatePackageAction } from '../../redux/actions/packagesAction'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.
import { Button } from 'react-bootstrap'

export default function EditPackage() {
  const dispatch = useDispatch()
  const packagesD = useSelector(
    (state) => state.packagesReducer?.packages?.packagge
  )
  const router = useRouter()
  const {
    query: { id },
  } = router
  const detail = packagesD ? packagesD[id ? id : 0] : {}
  console.log('detail ', detail)
  const packages = useSelector((state) => state.packagesReducer) || {}
  const { loading } = packages || false
  const [editPackageName, seteditPackageName] = useState(detail?.Name)
  const [editPackageInfo, seteditPackageInfo] = useState(detail?.Info)
  const [editPackageDescription, seteditPackageDescription] = useState(
    detail?.Description
  )
  const [editPackageFeatures, seteditPackageFeatures] = useState(
    detail?.Features
  )
  const [editPackagePictures, seteditPackagePictures] = useState(
    detail?.Pictures || []
  )

  const onTagChange = (tag) => {
    console.log('tag', tag)
    seteditPackageFeatures(tag)
  }

  const addPictures = () => {
    return seteditPackagePictures([...editPackagePictures, ''])
  }
  const removePictures = (index) => {
    let multiPictures = editPackagePictures
    const abc = multiPictures.splice(index, 1)
    seteditPackagePictures([...multiPictures])
  }

  const changePicturesValue = (value, index) => {
    let multiPics = editPackagePictures
    multiPics[index] = value
    console.log('multipictures', multiPics)
    seteditPackagePictures([...multiPics])
  }

  const updatePackage = (e) => {
    e.preventDefault()
    if (
      !editPackageName ||
      !editPackageInfo ||
      !editPackageDescription ||
      !editPackageFeatures ||
      !editPackagePictures
    ) {
      console.log('if condition')
      toast.error('Please fill the required field', {
        position: 'bottom-right',
      })
    } else {
      const editPackage = {
        _id: detail?._id,

        values_to_update: {
          Name: editPackageName,
          Info: editPackageInfo,
          Description: editPackageDescription,
          Features: editPackageFeatures,
          Pictures: editPackagePictures,
        },
      }
      dispatch(updatePackageAction(editPackage))
      router.push('/packageList')
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
        {packagesD ? (
          <div className='dashboard-content'>
            <div className='container'>
              <div className='row'></div>
              <div className='col-lg-12 col-md-12 col-xs-12 padding-right-30'>
                <div className='dashboard-list-box'>
                  <h4 className='gray'>Update Package</h4>
                  <div className='dashboard-list-box-static'>
                    <div>
                      <form>
                        <div className='row with-forms'>
                          <div className='col-md-12'>
                            <label>
                              Package Name{' '}
                              <i
                                className='tip'
                                data-tip-content='Name of your business'
                              ></i>
                            </label>
                            <input
                              className='search-field'
                              type='text'
                              value={editPackageName}
                              onChange={(e) =>
                                seteditPackageName(e.target.value)
                              }
                              placeholder='Enter Package Name'
                            />
                          </div>
                        </div>
                        <div className='row with-forms'>
                          <div className='col-md-6'>
                            <label>
                              Package Info{' '}
                              <i
                                className='tip'
                                data-tip-content='Maximum of 15 keywords related with your business'
                              ></i>
                            </label>
                            <input
                              type='text'
                              placeholder='Enter Package Info'
                              value={editPackageInfo}
                              onChange={(e) =>
                                seteditPackageInfo(e.target.value)
                              }
                            />
                          </div>
                          <div className='col-md-6'>
                            <label>
                              Package Features{' '}
                              <i
                                className='tip'
                                data-tip-content='Maximum of 15 keywords related with your business'
                              ></i>
                            </label>
                            <TagsInput
                              value={editPackageFeatures}
                              onChange={onTagChange}
                            />
                          </div>
                          {editPackagePictures?.map((multiPics, index) => (
                            <>
                              <div className='col-md-9'>
                                <label>
                                  Package Pictures{' '}
                                  <i
                                    className='tip'
                                    data-tip-content='Maximum of 15 keywords related with your business'
                                  ></i>
                                </label>
                                <input
                                  type='text'
                                  placeholder='Enter Package Pictures'
                                  value={editPackagePictures}
                                  onChange={(e) =>
                                    changePicturesValue(e.target.value, index)
                                  }
                                />
                              </div>
                              <div className='col-md-3 col-sm-6 form-end-buttonn'>
                                {index === 0 ? (
                                  <Button
                                    onClick={addPictures}
                                    variant='success'
                                  >
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
                            <label>
                              Package Description{' '}
                              <i
                                className='tip'
                                data-tip-content='Name of your business'
                              ></i>
                            </label>
                            <textarea
                              className='search-field'
                              type='text'
                              value={editPackageDescription}
                              onChange={(e) =>
                                seteditPackageDescription(e.target.value)
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
                              onClick={updatePackage}
                              className='btn-blue btn-red'
                            >
                              {loading ? (
                                <CircularProgress size={24} />
                              ) : (
                                'Update Package'
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
        ) : (
          <p
            style={{
              textAlign: 'center',
              fontSize: 24,
              fontWeight: 'bold',
              marginTop: 50,
            }}
          >
            Loading
          </p>
        )}
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
