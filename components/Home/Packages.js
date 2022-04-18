import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { readPackageAction } from '../../redux/actions/packagesAction'
import { useRouter } from 'next/router'

const Packages = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const packages = useSelector(
    (state) => state.packagesReducer?.packages?.packagge
  )
  useEffect(() => {
    dispatch(readPackageAction())
  }, [])

  const { query } = router
  const viewDetail = (index) => {
    router.push({ pathname: '/packagesDetail', query: { id: index } })
  }
  return (
    <>
      <section name="packages" id="packages" className="popular-packages">
  
		<div className="section-title text-center">
            <h1 className='special-offers'>Special offers & Discounts</h1>
            <p>
              <b>
                Lorem Ipsum is simply dummy text the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </b>
            </p>
            {/* <div className='section-icon'>
            <i className='flaticon-diamond'></i>
          </div> */}
          </div>

        <div className="container pd-top-70">
          <div className="row package-slider slider-button">
            {packages?.map((p, index) => (
              <div class="col-md-4 col-sm-6">
                <div class="single-package-item">
                  <img
                    src={p?.Pictures[0]}
                    alt="Image"
                    onClick={() => viewDetail(index)}
                  />
                  <div class="single-package-item-txt">
                    <h3>
                      {p?.Name}
                      <span class="pull-right">
                        <i className="flaticon-time"></i> {p?.Features[0]}
                      </span>
                    </h3>
                    <p>{p?.Info}</p>

                    <div class="packages-review">
                      <p>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <span>254 reviews</span>
                      </p>
                    </div>
                    <div class="about-btn">
                      <button
                        class="about-view packages-btn"
                        type="button"
                        onClick={() => viewDetail(index)}
                      >
                        book now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!--packages start--> */}
      {/* <section id="pack" class="packages">
			<div class="container">
				<div class="gallary-header text-center">
					<h2>
						special packages
					</h2>
					<p>
						Duis aute irure dolor in  velit esse cillum dolore eu fugiat nulla.  
					</p>
				</div>
				<div class="packages-content">
					<div class="row">

						<div class="col-md-4 col-sm-6">
							<div class="single-package-item">
								<img src="/images/packages/p1.jpg" alt="package-place"/>
								<div class="single-package-item-txt">
									<h3>italy <span class="pull-right">$499</span></h3>
									<div class="packages-para">
										<p>
											<span>
												<i class="fa fa-angle-right"></i> 3 Days 2 nights
											</span>
											<i class="fa fa-angle-right"></i>  5 star accomodation
										</p>
										<p>
											<span>
												<i class="fa fa-angle-right"></i>  transportation
											</span>
											<i class="fa fa-angle-right"></i> food facilities
										 </p>
									</div>
									<div class="packages-review">
										<p>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<span>254 reviews</span>
										</p>
									</div>
									<div class="about-btn">
										<button  class="about-view packages-btn">
											book now
										</button>
									</div>
								</div>
							</div>

						</div>

						<div class="col-md-4 col-sm-6">
							<div class="single-package-item">
								<img src="/images/packages/p2.jpg" alt="package-place"/>
								<div class="single-package-item-txt">
									<h3>england <span class="pull-right">$1499</span></h3>
									<div class="packages-para">
										<p>
											<span>
												<i class="fa fa-angle-right"></i> 6 Days 7 nights
											</span>
											<i class="fa fa-angle-right"></i>  5 star accomodation
										</p>
										<p>
											<span>
												<i class="fa fa-angle-right"></i>  transportation
											</span>
											<i class="fa fa-angle-right"></i>  Free food 
										 </p>
									</div>
									<div class="packages-review">
										<p>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<span>344 reviews</span>
										</p>
									</div>
									<div class="about-btn">
										<button  class="about-view packages-btn">
											book now
										</button>
									</div>
								</div>
							</div>

						</div>
						
						<div class="col-md-4 col-sm-6">
							<div class="single-package-item">
								<img src="/images/packages/p3.jpg" alt="package-place"/>
								<div class="single-package-item-txt">
									<h3>france <span class="pull-right">$1199</span></h3>
									<div class="packages-para">
										<p>
											<span>
												<i class="fa fa-angle-right"></i> 5 Days 6 nights
											</span>
											<i class="fa fa-angle-right"></i>  5 star accomodation
										</p>
										<p>
											<span>
												<i class="fa fa-angle-right"></i>  transportation
											</span>
											<i class="fa fa-angle-right"></i>  food facilities
										 </p>
									</div>
									<div class="packages-review">
										<p>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<span>544 reviews</span>
										</p>
									</div>
									<div class="about-btn">
										<button  class="about-view packages-btn">
											book now
										</button>
									</div>
								</div>
							</div>

						</div>
						
						<div class="col-md-4 col-sm-6">
							<div class="single-package-item">
								<img src="/images/packages/p4.jpg" alt="package-place"/>
								<div class="single-package-item-txt">
									<h3>india <span class="pull-right">$799</span></h3>
									<div class="packages-para">
										<p>
											<span>
												<i class="fa fa-angle-right"></i> 4 Days 5 nights
											</span>
											<i class="fa fa-angle-right"></i>  5 star accomodation
										</p>
										<p>
											<span>
												<i class="fa fa-angle-right"></i>  transportation
											</span>
											<i class="fa fa-angle-right"></i>  food facilities
										 </p>
									</div>
									<div class="packages-review">
										<p>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<span>625 reviews</span>
										</p>
									</div>
									<div class="about-btn">
										<button  class="about-view packages-btn">
											book now
										</button>
									</div>
								</div>
							</div>

						</div>
						
						<div class="col-md-4 col-sm-6">
							<div class="single-package-item">
								<img src="/images/packages/p5.jpg" alt="package-place"/>
								<div class="single-package-item-txt">
									<h3>spain <span class="pull-right">$999</span></h3>
									<div class="packages-para">
										<p>
											<span>
												<i class="fa fa-angle-right"></i> 4 Days 4 nights
											</span>
											<i class="fa fa-angle-right"></i>  5 star accomodation
										</p>
										<p>
											<span>
												<i class="fa fa-angle-right"></i>  transportation
											</span>
											<i class="fa fa-angle-right"></i>  food facilities
										 </p>
									</div>
									<div class="packages-review">
										<p>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<span>379 reviews</span>
										</p>
									</div>
									<div class="about-btn">
										<button  class="about-view packages-btn">
											book now
										</button>
									</div>
								</div>
							</div>

						</div>
						
						<div class="col-md-4 col-sm-6">
							<div class="single-package-item">
								<img src="/images/packages/p6.jpg" alt="package-place"/>
								<div class="single-package-item-txt">
									<h3>thailand <span class="pull-right">$799</span></h3>
									<div class="packages-para">
										<p>
											<span>
												<i class="fa fa-angle-right"></i> 5 Days 6 nights
											</span>
											<i class="fa fa-angle-right"></i>  5 star accomodation
										</p>
										<p>
											<span>
												<i class="fa fa-angle-right"></i>  transportation
											</span>
											<i class="fa fa-angle-right"></i>  food facilities
										 </p>
									</div>
									<div class="packages-review">
										<p>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<span>447 reviews</span>
										</p>
									</div>
									<div class="about-btn">
										<button  class="about-view packages-btn">
											book now
										</button>
									</div>
								</div>
							</div>

						</div>

					</div>
				</div>
			</div>

		</section> */}
      {/* <!--packages end--> */}
    </>
  );
}

export default Packages
