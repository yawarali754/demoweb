import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../Header/NavBar'
import 'bootstrap/dist/css/bootstrap.css'
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}
