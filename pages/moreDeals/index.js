import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readOfferAction } from "../../redux/actions/offersActions";
import { CircularProgress } from '@material-ui/core'
import { useRouter } from 'next/router'

export default function index() {
  let to,from;
  const router = useRouter()
  const offers = useSelector((state) => state?.offersReducer?.offer?.offer);
  const loading = useSelector((state) => state?.offersReducer?.offer?.loading)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readOfferAction());
  }, []);

  return (
    <div>
      <section className="breadcrumb-outer text-center">
        <div className="container">
          <div className="breadcrumb-content">
            <h2>More Deals</h2>
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  More Deals Page
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="section-overlay"></div>
      </section>

      <section className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row package-slider slider-button">
                {loading ? (
                  <p
                    style={{
                      textAlign: "center",
                      width: "100%",
                      marginTop: "45px",
                    }}
                  >
                    <CircularProgress size={36} />
                  </p>
                ) : (
                  offers?.length > 0 &&
                  offers?.map((o, index) => (
                    <div className="mb-5 col-sm-4 col-xs-12 no-padding isotopeSelector">
                      <div className="hovereffect-bucket bucket-item">
                        <div className="bucket-image">
                          <img
                            src="images/hk.jpeg"
                            alt="image"
                            className="img-responsive"
                            onClick={() => {
                              // setflyingFromCity(o?.FromCity.slice(0, 3));
                              from = o?.FromCity.slice(0, 3)
                              // setflyingToCity(o?.ToCity.slice(0, 3));
                              to = o?.ToCity.slice(0, 3)
                              router.push({ pathname: '/',query: { to: to, from:from }})
                            }}
                          />
                        </div>
                        <div className="bucket-item-content">
                          <h3>
                            <a
                              href="#"
                              onClick={() => {
                                // setflyingFromCity(o?.FromCity.slice(0, 3));
                                from = o?.FromCity.slice(0, 3)
                                // setflyingToCity(o?.ToCity.slice(0, 3));
                                to = o?.ToCity.slice(0, 3)
                                router.push({ pathname: '/',query: { to: to, from:from }})
                              }}
                            >
                              {o?.Name}
                            </a>
                          </h3>
                          <span> {o?.Price}</span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
