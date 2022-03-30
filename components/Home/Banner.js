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
                style={{ backgroundImage: `url('https://triper.dexignlab.com/react/static/media/slide3.a89c8d0c.jpg')` }}
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
                style={{ backgroundImage: `url('https://triper.dexignlab.com/react/static/media/slide1.a89b8f05.jpg')`,backgroundRepeat:"no-repeat" }}
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
                style={{ backgroundImage: `url('https://triper.dexignlab.com/react/static/media/slide2.40595120.jpg')` }}
              >
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
