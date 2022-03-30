import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { readOfferAction } from '../../redux/actions/offersActions'
import { CircularProgress } from '@material-ui/core'
import { useRouter } from 'next/router'


const Deals = ({ setflyingFromCity, setflyingToCity }) => {
  const offers = useSelector((state) => state?.offersReducer?.offer?.offer)
  const loading = useSelector((state) => state?.offersReducer?.offer?.loading)
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    dispatch(readOfferAction())
  }, [])

  const viewMoreDeals = () => {
    console.log('clicked')
    router.push({ pathname: '/moreDeals' })
  }


  return (
    <>
      {/* <div className="one withsmallpadding ppb_header" style={{ textAlign: "center", padding: "0px 0 0px 0", marginBottom: "40px", background: "#fff" }}>
        <div className="standard_wrapper">
          <div className="page_content_wrapper">
            <div className="inner">
              <div style={{ margin: "auto", width: "100%" }}>
                <h2 className="ppb_title" style={{
                  fontSize: "42px",
                  fontWeight: "500",
                  textTransform: "none",
                  letterSpacing: "0px"
                }}
                >Why Choose Us</h2>
                <div className="page_tagline"
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    textTransform: "none",
                    letterSpacing: "0px"
                  }}
                >Here are reasons you should plan trip with us</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='my-class-for-some-attractions'>
        <div className="standard_wrapper">
          <div className="one_third withsmallpadding ppb_text" style={{ textAlign: "center", padding: "0px 10px 0px 10px", marginBottom: "70px" }}>
            <div className="standard_wrapper">
              <div className="page_content_wrapper">
                <div className="inner">
                  <div style={{ margin: "auto", width: "100%" }}>
                    <p><img className="alignnone wp-image-3106 size-medium" src="bootstrap4/images/Map-Marker-300x300.png" style={{ width: "150px", height: "150px" }} alt="" /></p>
                    <h4 className="p1"
                      style={{
                        fontSize: "24px",
                        fontWeight: "500"
                      }}
                    ><span className="s1"><b>Handpicked Hotels</b></span></h4>
                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: "400"
                      }}
                    >Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="standard_wrapper">
          <div className="one_third withsmallpadding ppb_text" style={{ textAlign: "center", padding: "0px 10px 0px 10px", marginBottom: "70px" }}>
            <div className="standard_wrapper">
              <div className="page_content_wrapper">
                <div className="inner">
                  <div style={{ margin: "auto", width: "100%" }}>
                    <p><img className="alignnone wp-image-3107 size-medium" src="bootstrap4/images/Worldwide-Location-300x300.png" style={{ width: "150px", height: "150px" }} alt="" /></p>
                    <h4 className="p1"
                      style={{
                        fontSize: "24px",
                        fontWeight: "500"
                      }}
                    ><span className="s1"><b>World ClassName Service</b></span></h4>
                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: "400"
                      }}
                    >Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="standard_wrapper">
          <div className="one_third last withsmallpadding ppb_text" style={{ textAlign: "center", padding: "0px 10px 0px 10px", marginBottom: "70px" }}>
            <div className="standard_wrapper">
              <div className="page_content_wrapper">
                <div className="inner">
                  <div style={{ margin: "auto", width: "100%" }}>
                    <p><img className="alignnone wp-image-3108 size-medium" src="bootstrap4/images/Hot-Air-Balloon-300x300.png" style={{ width: "150px", height: "150px" }} alt="" /></p>
                    <h4 className="p1"
                      style={{
                        fontSize: "24px",
                        fontWeight: "500"
                      }}
                    ><span className="s1"><b>Best Price Guarantee</b></span></h4>
                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: "400"
                      }}
                    >Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      
      {/* 
      <div id="jarallax-container-1" style={{
        position: "fixed", inset: "0px", width: "100%", height: "1059.25px", maxWidth: "none", maxHeight: "none",
        margin: "-162.125px 0px 0px", zIndex: "-1",
        transform: "translate3d(0px, 36.2687px, 0px)"
      }}>
        <div style={{
          backgroundPosition: "50% 50%", backgroundSize: "cover", backgroundRepeat: "no-repeat",
          backgroundImage: "url(%https://img.youtube.com/vi/JPe2mwq96cw/maxresdefault.jpg%)", position: "fixed", top: "0px", left: "0px", width: "1423px", height: "393.231px", overflow: "hidden",
          pointerEvents: "none", marginTop: "142.384px", transform: " translate3d(0px, 1590.89px, 0px)",
          display: "none"
        }}>
        </div>
        <iframe id="VideoWorker-0" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="640" height="360" src="https://www.youtube.com/embed/JPe2mwq96cw?autohide=1&amp;rel=0&amp;autoplay=0&amp;playsinline=1&amp;iv_load_policy=3&amp;modestbranding=1&amp;controls=0&amp;showinfo=0&amp;disablekb=1&amp;widget_referrer=http%3A%2F%2Fpreview.themeforest.net%2F&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fmax-themes.net&amp;widgetid=1" style={{ position: "fixed", inset: "0px", width: "888px", height: "899.5px", maxWidth: "none", maxHeight: "none", margin: "-82.25px 0px 0px", zIndex: "-1", transform: "translate3d(0px, -42.0766px, 0px)" }}></iframe></div> */}
      <section name='deals' id='deals' className='bucket-list'>
        <div className='bucket-icons'>
          <div className='container'>
            <div className='section-title text-center'>
              <h2>Top Deals</h2>
              <div className='section-icon'>
                <i className='flaticon-diamond'></i>
              </div>
            </div>
          </div>
        </div>

        <div className='my-sec-card-body'>

          <div className="my-sec-card-body-box">
            {
              loading ? (
                <p
                  style={{
                    textAlign: 'center',
                    width: '100%',
                    marginTop: '45px',
                  }}
                >
                  <CircularProgress size={36} />
                </p>
              ) : (
                offers?.length > 0 &&
                offers?.slice(0, 3).map((o, index) => (
                  <div className="my-sec-card">
                    <div className="imgBx">
                      <img
                        onClick={() => {
                          setflyingFromCity(o?.FromCity.slice(0, 3))
                          setflyingToCity(o?.ToCity.slice(0, 3))
                        }}
                        src={index==0?"/images/gallary/g1.jpg":"/images/gallary/g4.jpg"}
                        alt="images" />
                    </div>
                    <div className="details">
                      <h2>{o?.Name}<br /><span>{o?.Price}</span></h2>
                    </div>
                  </div>
                ))
              )}


          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div className='col-md-3 col-sm-6'>
            <div className='table_item'>
              <div className='search'>
                <label htmlFor='button' style={{ visibility: 'hidden' }}>
                  a
                </label>
                <button
                  id='button1'
                  className='btn-blue'
                  type='submit'
                  style={{ width: '100%' }}
                  // disabled={loading}
                  onClick={viewMoreDeals}
                >
                  VIEW MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Deals
