import { Provider } from 'react-redux'
import store from '../redux/store'
import { useRouter } from 'next/router'
import NavBar from '../components/Header/NavBar'
import Footer from '../components/Footer/Footer'
import './../styles/globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import ProtectedRoutes from '../public/js/ProtectedRoutes'
// import '../public/css/style.css';
import '../components/Home/Ppackages.css';
import '../styles/DropDown.css';


function MyApp({ Component, pageProps, router }) {
  const router1 = useRouter()
  const { pathname } = router1
  const noNav = [
    '/dashboard',
    '/userProfile',
    '/reviews',
    '/addTour',
    '/packageList',
    '/booking',
    '/tourHistory',
    '/updatePassword',
    '/createPackage',
    '/createOffers',
    '/offerList',
    '/editOffer',
    '/editPackage',
  ]
  return (
    <Provider store={store}>
      <ToastContainer />

      {noNav.includes(pathname) ? null : <NavBar />}
      <ProtectedRoutes router={router}>
        <Component {...pageProps} />
      </ProtectedRoutes>
      {noNav.includes(pathname) ? null : <Footer />}
    </Provider>
  )
}

export default MyApp
