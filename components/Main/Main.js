import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Banner from '../Home/Banner'
import Packages from '../Home/Packages'
import Deals from '../Home/Deals'
import FlightSearch from '../FlightSearch/FlightSearch'
import Image from 'next/image'
import Link from 'next/link'

export default function Main() {
  const [flyingFromCity, setflyingFromCity] = useState('')
  const [flyingToCity, setflyingToCity] = useState('')

  const router = useRouter()
  const {
    query: { to, from },
  } = router

  useEffect(() => {
    console.log("to,from", to, from)
    setflyingFromCity(from)
    setflyingToCity(to)
  }, [to, from])
  useEffect(() => {
    console.log('cities', flyingFromCity, flyingToCity)
  }, [flyingFromCity, flyingToCity])



  return (
    <div>
      {/* <div className='search-box'> */}
      <Banner />
      {/* </div> */}
      <div className="search-box">
        <FlightSearch
          selectedOfferFromCity={flyingFromCity}
          selectedOfferToCity={flyingToCity}
        />
      </div>

	  <div className="intro-area pd-top-50">
          <div className="container">
            <div className="row">
              <div class="col-lg-4">
                <div
                  class="single-intro wow fadeInUp animated"
                  data-wow-duration="0.6s"
                  data-wow-delay="0.1s"
                  style={{
                    visibility: "visible",
                    animationDuration: "0.6s",
                    animationDelay: "0.1s",
                  }}
                >
                  <h4 class="intro-title">
                    <span class="intro-count">01</span>
                    <a class="intro-cat" href="#">
                      Travel
                    </a>
                  </h4>
                  <p>
                    Sponsorships are like unicorns or leprechauns, talked about
                    often but they don’t actually exist. There is only dollars
                    and cents, the ...
                  </p>
                </div>
              </div>

              <div class="col-lg-4">
                <div
                  class="single-intro wow fadeInUp animated"
                  data-wow-duration="0.6s"
                  data-wow-delay="0.1s"
                >
                  <h4 class="intro-title">
                    <span class="intro-count">02</span>
                    <a class="intro-cat" href="#">
                      Experience
                    </a>
                  </h4>
                  <p>
                    My response is usually harsh. Offended at the suggestion
                    that a career that’s taken more than a decade to create
                    could be...
                  </p>
                </div>
              </div>

              <div class="col-lg-4">
                <div
                  class="single-intro wow fadeInUp animated"
                  data-wow-duration="0.6s"
                  data-wow-delay="0.1s"
                >
                  <h4 class="intro-title">
                    <span class="intro-count">03</span>
                    <a class="intro-cat" href="#">
                      Relax
                    </a>
                  </h4>
                  <p>
                    I have always made a living to make movies, never the other
                    way around. When I first started I washed in a seafood
                    restaurant....
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      <Packages />

      <div
        className="video-area tp-video-area pd-top-60"
        style={{ backgroundImage: "url(images/gallary/img1.png)" }}
      >
        <div className="container viaje-go-top">
          <div className="row">
            <div
              className="col-xl-5 col-lg-6 align-self-center wow  fadeInRight animated"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.3s",
                animationName: "fadeInRight",
              }}
            >
              <div className="section-title-y mb-lg-0 mb-4 text-center text-lg-left">
                <h2 className="title-y">
                  What Do You Know <br /> About US
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when unknown printer
                  took a galley of type and scrambled it to make a type specimen
                  book. It has not only five centuries
                </p>
                <a className="btn btn-yellow-y" href="#/about">
                  <span>
                    Read More<i className="la la-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-6 offset-xl-1 wow  fadeInLeft animated"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.3s",
                animationName: "fadeInLeft",
              }}
            >
              <div className="video-popup-wrap">
                <div className="thumb">
                  <img src="/images/gallary/video.png" alt="video" />
                </div>
                <div className="video-popup-btn">
                  <a
                    href="https://www.youtube.com/watch?v=c7XEhXZ_rsk"
                    className="video-play-btn mfp-iframe"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!----> */}
      {/* <div className="get-started">
	 <div className="container">
		 <h4 className="wow bounceInLeft" data-wow-delay="0.5s">We Ready  to Help You</h4>
		 <h3 className="wow bounceInRight" data-wow-delay="0.5s">Get the Best Solution for Your Tour</h3>
		 <Link href='/flight'><a href="#">GET STARTED</a></Link>
	 </div>
</div> */}
      {/* <!----> */}

      <div
        className="holiday-plan-area tp-holiday-plan-area mg-top-96"
        style={{ backgroundImage: "url(images/gallary/img2.png)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-9">
              <div className="section-title-y text-center">
                <h2
                  className="title-y wow  fadeInUp animated"
                  data-wow-duration="0.6s"
                  data-wow-delay="0.1s"
                  style={{
                    visibility: "visible",
                    animationDuration: "0.6s",
                    animationDelay: "0.1s",
                    animationName: "fadeInUp",
                  }}
                >
                  Perfect Holiday Plan
                </h2>
                <p
                  className="wow  fadeInUp animated"
                  data-wow-duration="0.6s"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDuration: "0.6s",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp",
                  }}
                >
                  No vis fastidii accumsan, ignota postulant ea mea. Vis et
                  prima integre, ei vis ridens moderatius reformidans cu vim
                  doctus accumsan ignota.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-destinations-list style-two wow  fadeInUp animated"
                data-wow-duration="0.4s"
                data-wow-delay="0.1s"
                style={{
                  visibility: "visible",
                  animationDuration: "0.4s",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="thumb">
                  <img src="/images/gallary/c1.png" alt="list" />
                </div>
                <div className="details">
                  <p className="location">
                    {/* <img src="/images/gallary/c5.png" alt="map"/> */}
                    Maldives
                  </p>
                  <h4 className="title">Hurawalhi Island</h4>
                  <p className="content">7 Days Tour on 2 person</p>
                  <div className="tp-price-meta">
                    <h2>
                      620 <small>$</small>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-destinations-list style-two wow  fadeInUp animated"
                data-wow-duration="0.7s"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  animationDuration: "0.7s",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="thumb">
                  <img src="/images/gallary/c2.png" alt="list" />
                </div>
                <div className="details">
                  <p className="location">
                    {/* <img src="/react/viaje/assets/img/icons/1.png" alt="map"/> */}
                    Indonesia
                  </p>
                  <h4 className="title">Bali Province</h4>
                  <p className="content">4 days 2 person</p>
                  <div className="tp-price-meta">
                    <h2>
                      780 <small>$</small>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-destinations-list style-two wow  fadeInUp animated"
                data-wow-duration="0.9s"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDuration: "0.9s",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="thumb">
                  <img src="/images/gallary/c3.png" alt="list" />
                </div>
                <div className="details">
                  <p className="location">
                    {/* <img src="/react/viaje/assets/img/icons/1.png" alt="map"/> */}
                    Bangladesh
                  </p>
                  <h4 className="title">Cox's bazar Sea Beach</h4>
                  <p className="content">4 days 4 person</p>
                  <div className="tp-price-meta">
                    <h2>
                      850 <small>$</small>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-destinations-list style-two wow  fadeInUp animated"
                data-wow-duration="1.1s"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",
                  animationDuration: "1.1s",
                  animationDelay: "0.4s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="thumb">
                  <img src="/images/gallary/c4.png" alt="list" />
                </div>
                <div className="details">
                  <p className="location">
                    {/* <img src="/react/viaje/assets/img/icons/1.png" alt="map"/> */}
                    Spain
                  </p>
                  <h4 className="title">Barcelona city beach</h4>
                  <p className="content">3 days 2 person</p>
                  <div className="tp-price-meta">
                    <h2>
                      620 <small>$</small>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <section>
        <div className="section-full bg-white content-inner-2 bgeffect overlay-my-black-middle" style={{ backgroundImage: `url("https://triper.dexignlab.com/react/static/media/bg3.a89c8d0c.jpg") !important`, backgroundSize: "cover !important", height: "60vh" }}>
          <div style={{ background: "rgb(0, 0, 0,0.4)", height: "100%", width: "100%", paddingBottom: "80px", paddingTop: "80px" }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="add-area">
                    <h3>1000 $ for person - 6 nights</h3>
                    <h2>Discount <span className="text-primary">10-30%</span> Off</h2>
                    <p>If you’re looking for a truly memorable family break here you find the lowest price on the right hotel for you. It's indescribable. Stay up to date and check out the deals for these trending destinations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className='my-body'>
        <div className="my-card-container">
          <div className="my-card">
            <div className="my-box">
              <div className="my-content">
                <h3>Eiffel Tower</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>

          <div className="my-card">
            <div className="my-box">
              <div className="my-content">
                <h3>Australia</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>

          <div className="my-card">
            <div className="my-box">
              <div className="my-content">
                <h3>Philippines</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <!--galley start--> */}
      {/* <section id="gallery" class="gallery">
			<div class="container">
				<div class="gallery-details">
					<div class="gallary-header text-center">
						<h2>
							top destination
						</h2>
						<p>
							Where do you wanna go? How much you wanna explore?  
						</p>
					</div>
					<div class="gallery-box">
						<div class="gallery-content">
						  	<div class="filtr-container">
						  		<div class="row">

						  			<div class="col-md-6">
						  				<div class="filtr-item">
											<img src="/images/gallary/g1.jpg" alt="portfolio image"/>
											<div class="item-title">
												<a href="#">
													china
												</a>
												<p><span>20 tours</span><span>15 places</span></p>
											</div>
										</div>
						  			</div>

						  			<div class="col-md-6">
						  				<div class="filtr-item">
											<img src="/images/gallary/g2.jpg" alt="portfolio image"/>
											<div class="item-title">
												<a href="#">
													venuzuala
												</a>
												<p><span>12 tours</span><span>9 places</span></p>
											</div> 
										</div>
						  			</div>

						  			<div class="col-md-4">
						  				<div class="filtr-item">
											<img src="/images/gallary/g3.jpg" alt="portfolio image"/>
											<div class="item-title">
												<a href="#">
													brazil
												</a>
												<p><span>25 tours</span><span>10 places</span></p>
											</div>
										</div>
						  			</div>

						  			<div class="col-md-4">
						  				<div class="filtr-item">
											<img src="/images/gallary/g4.jpg" alt="portfolio image"/>
											<div class="item-title">
												<a href="#">
													australia 
												</a>
												<p><span>18 tours</span><span>9 places</span></p>
											</div> 
										</div>
						  			</div>

						  			<div class="col-md-4">
						  				<div class="filtr-item">
											<img src="/images/gallary/g5.jpg" alt="portfolio image"/>
											<div class="item-title">
												<a href="#">
													netharlands
												</a>
												<p><span>14 tours</span><span>12 places</span></p>
											</div> 
										</div>
						  			</div>

						  			<div class="col-md-8">
						  				<div class="filtr-item">
											<img src="/images/gallary/g6.jpg" alt="portfolio image"/>
											<div class="item-title">
												<a href="#">
													turkey
												</a>
												<p><span>14 tours</span><span>6 places</span></p>
											</div> 
										</div>
						  			</div>

						  		</div>

						  	</div>
						</div>
					</div>
				</div>
			</div>

		</section> */}
      {/* <!--gallery end--> */}

      <div className="client-review-area client-review-area-home pd-top-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div
                className="thumb wow  fadeInRight   animated"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.3s",
                  animationName: "fadeInRight",
                }}
              >
                <div className="client-review-thumb">
                  <img src="images/gallary/russia.png" alt="russia" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="single-client-review wow  fadeInLeft   animated"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.3s",
                }}
              >
                <p className="sub-title">Travel Reviews</p>
                <h3 className="location-name">Russia</h3>
                <div className="tp-review-meta">
                  <i className="ic-yellow fa fa-star"></i>
                  <i className="ic-yellow fa fa-star"></i>
                  <i className="ic-yellow fa fa-star"></i>
                  <i className="ic-yellow fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <span>4.0</span>
                </div>
                <p>
                  The largest country in the world, Russia offers a broad array
                  of travel experiences, from treks up the slopes of
                  glacier-capped mountains to strolls along the shoreline of
                  Earth’s oldest lake. Historical sites and cultural activities
                  in the country’s great cities abound as well. Whether you’re
                  exploring the grounds of Moscow’s Kremlin or wandering through
                  the steppes of Mongolia, a visit to Russia is an adventure not
                  soon forgotten. These top tourists attractions in Russia can
                  inspire a great Russian itinerary for a memorable trip.
                </p>
                <div className="media">
                  <div className="media-left">
                    <img src="images/gallary/russia1.png" alt="client" />
                  </div>
                  <div className="media-body">
                    <h6>Jasmine Woodkin</h6>
                    <p>Tourist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="blog-area pd-top-70 viaje-go-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="single-blog single-blog-wrap style-two">
                <div class="thumb single-blog-left-wrap">
                  <img src="/images/gallary/b1.png" alt="blog" />
                </div>
                <div class="single-blog-details single-blog-right-wrap">
                  <a class="tag" href="#/blog-details">
                    Europe
                  </a>
                  <p class="date">19 September 2019</p>
                  <h4 class="title">
                    Why You Shouldn’t Ride Elephants In France.
                  </h4>
                  <p class="content">
                    Kava contains 30 demos as for now, and we’re planning to
                    release more! Except demos, Kava theme has more and more
                    features for.. users, business, companies, developers,
                    bloggers and other categories of users. Even if you are an
                    absolute beginner
                  </p>
                  <a class="btn btn-yellow-y" href="#/blog-details">
                    <span>
                      Read More<i class="la la-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="row">
                <div class="col-sm-6">
                  <div class="single-blog style-three">
                    <div class="thumb">
                      <img src="/images/gallary/b2.png" alt="blog" />
                    </div>
                    <div class="single-blog-details-wrap">
                      <div class="single-blog-details text-center">
                        <a class="tag" href="#/blog-details">
                          Europe
                        </a>
                        <p class="date">19 September 2019</p>
                        <h4 class="title">
                          Why You Shouldn’t Ride Elephants In Thailand
                        </h4>
                        <a class="btn btn-yellow-y" href="#/blog-details">
                          <span>
                            Read More<i class="la la-arrow-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="single-blog style-three">
                    <div class="thumb">
                      <img src="/images/gallary/b3.png" alt="blog" />
                    </div>
                    <div class="single-blog-details-wrap">
                      <div class="single-blog-details text-center">
                        <a class="tag" href="#/blog-details">
                          Europe
                        </a>
                        <p class="date">18 September 2019</p>
                        <h4 class="title">
                          10 Best Highways for Romantic Long Drive
                        </h4>
                        <a class="btn btn-yellow-y" href="#/blog-details">
                          <span>
                            Read More<i class="la la-arrow-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="single-blog style-three">
                    <div class="thumb">
                      <img src="/images/gallary/b4.png" alt="blog" />
                    </div>
                    <div class="single-blog-details-wrap">
                      <div class="single-blog-details text-center">
                        <a class="tag" href="#/blog-details">
                          Europe
                        </a>
                        <p class="date">18 September 2019</p>
                        <h4 class="title">
                          Rock Climbing Limestone Cliffs At Railay Beach
                        </h4>
                        <a class="btn btn-yellow-y" href="#/blog-details">
                          <span>
                            Read More<i class="la la-arrow-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="single-blog style-three">
                    <div class="thumb">
                      <img src="/images/gallary/b5.png" alt="blog" />
                    </div>
                    <div class="single-blog-details-wrap">
                      <div class="single-blog-details text-center">
                        <a class="tag" href="#/blog-details">
                          Europe
                        </a>
                        <p class="date">19 September 2019</p>
                        <h4 class="title">
                          Magic In The Sky: Chasing Iceland’s Lights
                        </h4>
                        <a class="btn btn-yellow-y" href="#/blog-details">
                          <span>
                            Read More<i class="la la-arrow-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="ads-area pd-top-70 viaje-go-top">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-8 col-lg-9">
              <a class="ads-thumb" href="#/contact">
                <img src="/images/gallary/img01.png" alt="ads" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Deals
        setflyingFromCity={setflyingFromCity}
        setflyingToCity={setflyingToCity}
      />
    </div>
  );
}
