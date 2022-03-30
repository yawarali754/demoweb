import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import {
  setPass,
  verifyEmail,
  verifyOTP,
} from '../../redux/actions/authentication'
import { CircularProgress } from '@material-ui/core'
import OtpInput from 'react-otp-input'
import { useRouter } from 'next/router'

export default function index() {
  const [otp, setOtp] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showEmail, setShowEmail] = useState(true)
  const [showOTP, setShowOTP] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const [passwordShown, setPasswordShown] = useState(false)

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true)
  }
  const dispatch = useDispatch()
  const router = useRouter()
  const verification = useSelector((state) => state.verification)
  const { loading, error, msg } = verification

  const handleChange = (otp) => {
    console.log('otp', otp)
    setOtp(otp)
  }
  const onSubmitEmail = (e) => {
    e.preventDefault()
    if (!email) {
      console.log('if condition')
      toast.error('Please fill the required field', {
        position: 'bottom-right',
      })
    } else {
      console.log('useremail', email)
      const data = {
        user_email: 'chilldani5@gmail.com',
        Signup: 'false',
      }
      dispatch(verifyEmail(data))
    }
  }
  useEffect(() => {
    console.log('verify email error', verification?.responsee?.email?.msg)
    if (verification?.responsee?.email?.msg === 'User Already exists') {
      toast.error(verification?.responsee?.email?.msg, {
        position: 'bottom-right',
      })
    } else if (verification?.responsee?.email?.msg === 'Check OTP') {
      toast.success(verification?.responsee?.email?.msg, {
        position: 'bottom-right',
      })
      setShowEmail(false)
      setShowOTP(true)
    }
    if (verification?.responsee?.otp?.msg === 'Enter the correct OTP') {
      toast.error(verification?.responsee?.otp?.msg, {
        position: 'bottom-right',
      })
    } else if (verification?.responsee?.otp?.msg === 'OTP verfied') {
      toast.success(verification?.responsee?.otp?.msg, {
        position: 'bottom-right',
      })
      setShowOTP(false)
      setShowPass(true)
    }
  }, [verification?.responsee?.email?.msg, verification?.responsee?.otp?.msg])
  const confirmOTP = (e) => {
    e.preventDefault()
    if (!otp) {
      console.log('if condition')
      toast.error('Please fill the required field', {
        position: 'bottom-right',
      })
    } else {
      console.log('otp', otp)
      const data = {
        user_email: email,
        OTP: otp,
      }
      dispatch(verifyOTP(data))
    }
  }
  const confirmPass = (e) => {
    e.preventDefault()
    if (!password) {
      console.log('if condition')
      toast.error('Please fill the required field', {
        position: 'bottom-right',
      })
    } else {
      const data = {
        user_email: email,
        user_password: password,
        Signup: 'false',
      }
      dispatch(setPass(data))
      router.push('/auth')
    }
  }
  return (
    <div>
      <section className='breadcrumb-outer text-center'>
        <div className='container'>
          <div className='breadcrumb-content'>
            <h2>Forgot Password Page</h2>
            <nav aria-label='breadcrumb'>
              <ul className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <a href='/'>Home</a>
                </li>
                <li className='breadcrumb-item active' aria-current='page'>
                  Forgot Password Page
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='section-overlay'></div>
      </section>
      <section className='login'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='login-form d-flex justify-content-center'>
                <form className='col-md-4'>
                  <div className='col-xs-12'></div>
                  {showEmail ? (
                    <div>
                      <div className='form-group col-xs-12'>
                        <label>Enter Email:</label>
                        <input
                          type='email'
                          className='form-control'
                          id='email'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder='abc@xyz.com'
                          autoComplete='email'
                        />
                      </div>
                      <div className='col-xs-12'>
                        <div className='comment-btn d-flex justify-content-center'>
                          <button
                            onClick={onSubmitEmail}
                            type='click'
                            className='btn-blue btn-red'
                          >
                            {loading ? (
                              <CircularProgress size={24} />
                            ) : (
                              'Get OTP'
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {showOTP ? (
                    <div>
                      {' '}
                      <div className='form-group col-xs-12'>
                        <label>Enter OTP:</label>
                        <OtpInput
                          value={otp}
                          onChange={handleChange}
                          numInputs={4}
                          separator={<span>-</span>}
                          inputStyle={{ width: '100%' }}
                        />
                      </div>
                      <div className='col-xs-12'>
                        <div className='comment-btn d-flex justify-content-center'>
                          <button
                            onClick={confirmOTP}
                            type='click'
                            className='btn-blue btn-red'
                          >
                            {loading ? (
                              <CircularProgress size={24} />
                            ) : (
                              'Confirm OTP'
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {showPass ? (
                    <div>
                      {' '}
                      <div className='form-group col-xs-6'>
                        <label>Enter Password :</label>
                        <input
                          name='password'
                          label='Enter Password'
                          type={passwordShown ? 'text' : 'password'}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          autoComplete='current-Password'
                          className='form-control'
                          id='password'
                          placeholder='Enter Password'
                        />
                        <i
                          className='pass-wrapperr fa fa-eye'
                          onClick={togglePasswordVisiblity}
                        ></i>
                      </div>
                      <div className='col-xs-12'>
                        <div className='comment-btn d-flex justify-content-center'>
                          <button
                            onClick={confirmPass}
                            type='click'
                            className='btn-blue btn-red'
                          >
                            {loading ? (
                              <CircularProgress size={24} />
                            ) : (
                              'Save Changes'
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
