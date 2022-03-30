import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { loginUserAction } from '../../redux/actions/authentication'
import { CircularProgress } from '@material-ui/core'
import Link from 'next/link'

export default function index() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordShown, setPasswordShown] = useState(false)

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true)
  }

  const dispatch = useDispatch()
  const router = useRouter()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, msg } = userLogin

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted', email)

    if (!email || !password) {
      console.log('if condition')
      toast.error('Please fill all required fields', {
        position: 'bottom-right',
      })
    } else {
      console.log('else cond')
      const data = {
        user_email: email,
        user_password: password,
      }

      dispatch(loginUserAction(data))
    }
  }
  useEffect(() => {
    if (msg === 'Password Incorrect') {
      toast.error('Password Incorrect', {
        position: 'bottom-right',
      })
    } else if (userLogin?.status === 302) {
      toast.success('Login SuccessFull', {
        position: 'bottom-right',
      })
      router.push('/booking')
    }
  }, [userLogin?.status, msg])

  return (
    <div>
      <section className='breadcrumb-outer text-center'>
        <div className='container'>
          <div className='breadcrumb-content'>
            <h2>Login Page</h2>
            <nav aria-label='breadcrumb'>
              <ul className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <a href='/'>Home</a>
                </li>
                <li className='breadcrumb-item active' aria-current='page'>
                  Login Page
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
                <form onSubmit={handleSubmit}>
                  <div className='col-xs-12'>
                    <div className='form-title'>
                      <h2>Login</h2>
                      <p>Register if you don't have an account.</p>
                    </div>
                  </div>
                  <div className='form-group col-xs-12'>
                    <label>Enter Email</label>
                    <input
                      type='email'
                      name='email'
                      label='email'
                      // required='required'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className='form-control'
                      id='email'
                      placeholder='Enter email id'
                    />
                  </div>
                  <div className='form-group col-xs-12'>
                    <label>Password</label>
                    <input
                      type={passwordShown ? 'text' : 'password'}
                      className='form-control'
                      id='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='Enter password'
                    />
                    <i
                      className='pass-wrapper fa fa-eye'
                      onClick={togglePasswordVisiblity}
                    ></i>
                  </div>
                  <div className='col-xs-12'>
                    <div className='comment-btn d-flex justify-content-center'>
                      <button
                        id='button'
                        type='submit'
                        className='btn-blue btn-red'
                      >
                        {loading ? <CircularProgress size={24} /> : 'Login'}
                      </button>
                    </div>
                  </div>

                  <div className='col-xs-12'>
                    <div className='login-accounts'>
                      <Link href='forgotpass'>
                        <a href='' className='forgotpw'>
                          Forgot Password?
                        </a>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
