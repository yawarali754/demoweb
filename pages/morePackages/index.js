import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readPackageAction } from "../../redux/actions/packagesAction";
import { CircularProgress } from '@material-ui/core'
import { useRouter } from 'next/router'

export default function index() {
  const packages = useSelector(
    (state) => state.packagesReducer?.packages?.packagge
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readPackageAction());
  }, []);
  const router = useRouter()
  const viewDetail = (index) => {
    router.push({ pathname: '/packagesDetail', query: { id: index } })
  }

  return (
    <div>
      <section className="breadcrumb-outer text-center">
        <div className="container">
          <div className="breadcrumb-content">
            <h2>More Packages</h2>
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  More Packages Page
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
                {packages ? (
                  packages?.map((p, index) => (
                    <div className="col-lg-4">
                      <div className="package-item">
                        <div className="package-image">
                          <img
                            src={p?.Pictures[0]}
                            alt="Image"
                            onClick={() => viewDetail(index)}
                          />
                          <div className="package-price"></div>
                        </div>
                        <div className="package-content">
                          <h3>{p?.Name}</h3>
                          <p className="package-days">
                            <i className="flaticon-time"></i> {p?.Features[0]}
                          </p>
                          <p>{p?.Info}</p>
                          <div className="package-info">
                            <button
                              className="btn-blue"
                              type="button"
                              onClick={() => viewDetail(index)}
                            >
                              View More Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p
                    style={{
                      textAlign: "center",
                      width: "100%",
                      marginTop: "45px",
                    }}
                  >
                    <CircularProgress size={36} />
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
