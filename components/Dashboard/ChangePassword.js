import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatePassword } from '../../redux/actions/authentication'
import { useRouter } from 'next/router'

import { toast } from 'react-toastify'

import Aside from '../Aside/Aside'
import StickyNav from './StickyNav'

export default function ChangePassword() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const dispatch = useDispatch()
  const router = useRouter()
  const verification = useSelector((state) => state.verification)
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, msg } = verification

  const saveChanges = (e) => {
    e.preventDefault()
    if (!password || !confirmPassword) {
      console.log('if condition')
      toast.error('Please fill the required field', {
        position: 'bottom-right',
      })
    } else {
      console.log('useremail', email)
      const data = {
        user_email: userLogin?.Email,
        user_password: password,
        new_password: confirmPassword,
      }
      dispatch(updatePassword(data))
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
            <div className='row'>
              <div className='col-lg-12 col-md-12 col-xs-12 padding-right-30'>
                <div className='dashboard-list-box'>
                  <h4 className='gray'>Profile Details</h4>
                  <div className='dashboard-list-box-static'>
                    <div className='login-form d-flex justify-content-center'>
                      <form>
                        <div className='col-xs-12'>
                          <div className='form-title'>
                            <h2>Update Password</h2>
                          </div>
                        </div>
                        <div className='form-group '>
                          <label>Old Password *</label>
                          <input
                            type='password'
                            className='form-control'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter old password'
                          />
                        </div>
                        <div className='form-group '>
                          <label>New Password *</label>
                          <input
                            type='password'
                            className='form-control'
                            id='password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder='Enter new password'
                          />
                        </div>
                        <div className='col-xs-12'>
                          <div className='comment-btn d-flex justify-content-center'>
                            <button
                              id='button'
                              type='click'
                              onClick={saveChanges}
                              className='btn-blue btn-red'
                            >
                              Save Changes
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
        </div>
      </div>
    </div>
  )
}
