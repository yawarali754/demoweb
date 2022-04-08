import React from 'react'
import Head from 'next/head'

const Banner = () => {
  return (
    <>
      <Head>
        <script src='js/custom-swiper2.js'></script>
      </Head>
      <section className='swiper-banner'>
        <div className='slider'>
          <div className='swiper-container'>
            <div className='swiper-wrapper'>
              <div
                className='swiper-slide'
                style={{ backgroundImage: `url('images/gallary/slider1.jpg')`, backgroundRepeat:"no-repeat",backgroundPosition: "center", backgroundSize: "cover cover"}}
              >
                <div
                  className='swiper-content'
                  data-animation='animated fadeInDown'
                >
                  <h1>Search your next destination</h1>
                </div>
              </div>
              <div
                className='swiper-slide'
                style={{ backgroundImage: `url('images/gallary/slider2.jpg')`,backgroundRepeat:"no-repeat",backgroundPosition: "center", backgroundSize: "cover cover" }}
              >
                <div
                  className='swiper-content'
                  data-animation='animated fadeInRight'
                >
                  <h1>We offer you better deals</h1>
                </div>
              </div>
              <div
                className='swiper-slide'
                style={{ backgroundImage: `url('images/gallary/slider3.jpg')`, backgroundRepeat:"no-repeat",backgroundPosition: "center", backgroundSize: "cover cover" }}>
                <div
                  className='swiper-content'
                  data-animation='animated fadeInUp'
                >
                  <h1>Amazing Santorini 7 days tour</h1>
                </div>
              </div>
            </div>
          </div>
          <div className='swiper-button-next'></div>
          <div className='swiper-button-prev'></div>
          <div className='overlay'></div>
        </div>
      </section>
    </>
  )
}

export default Banner
