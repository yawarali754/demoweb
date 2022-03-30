import { useSelector } from 'react-redux'

const isBrowser = () => typeof window !== 'undefined'
const ProtectedRoutes = ({ router, children }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const isAuthenticated = userLogin?.Email

  let unprotectedRoutes = [
    '/',
    '/flight',
    '/flight/fsearch',
    '/flightBooking',
    '/auth',
    '/signup',
    '/aboutus',
    '/privacypolicy',
    '/forgotpass',
    '/packagesDetail',
    '/dealDetail',
    '/bookingConfirmed',
    '/packages',
    '/deals',
    '/morePackages',
    '/moreDeals'
  ]

  let pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1

  if (isBrowser() && !isAuthenticated && pathIsProtected) {
    router.push('/')
  }

  return children
}
export default ProtectedRoutes
