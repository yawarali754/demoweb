import React from 'react'

export default function index() {
  return (
    <div>
      <section className='breadcrumb-outer text-center'>
        <div className='container'>
          <div className='breadcrumb-content'>
            <h2>About Us</h2>
            <nav aria-label='breadcrumb'>
              <ul className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <a href='/'>Home</a>
                </li>
                <li className='breadcrumb-item active' aria-current='page'>
                  About Us
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='section-overlay'></div>
      </section>
      <section className='aboutus'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section-title text-center'>
                <h2>Why Choose Us?</h2>
                <div className='section-icon section-icon-white'>
                  <i className='flaticon-diamond'></i>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='about-item'>
                <div className='about-icon'>
                  <i className='fa fa-superpowers' aria-hidden='true'></i>
                </div>
                <div className='about-content'>
                  <h3>Perfect Planning</h3>
                  <p>
                    Plan your perfect vacation with our travel agency. Choose
                    among hundreds of all-inclusive offers!
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='about-item'>
                <div className='about-icon'>
                  <i className='fa fa-paw' aria-hidden='true'></i>
                </div>
                <div className='about-content'>
                  <h3>Secure Venues</h3>
                  <p>
                    We work hard to secure the best hotel rates in the most
                    popular destinations. Search and book adventure tours now!
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='about-item'>
                <div className='about-icon'>
                  <i className='fa fa-fire' aria-hidden='true'></i>
                </div>
                <div className='about-content'>
                  <h3>Beautiful Memories</h3>
                  <p>
                    Book international vacation packages with us and create
                    memories that will last a lifetime! Create History !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="section-full bg-white content-inner-2 bgeffect overlay-black-middle" style={{ backgroundImage: "url(https://triper.dexignlab.com/react/static/media/bg3.a89c8d0c.jpg)", backgroundSize: "cover" }}>
          <div style={{background:"rgb(0, 0, 0,0.4)"}}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="add-area">
                    <h3>1000 $ for person - 6 nights</h3>
                    <h2>Discount <span className="text-primary">10-30%</span> Off</h2>
                    <p>If you’re looking for a truly memorable family break here you find the lowest price on the right hotel for you. It's indescribable. Stay up to date and check out the deals for these trending destinations.</p>
                    <a className="site-button white" href="/react/">See Promotion Tours</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-xs-12'>
              <div className='section-title text-center'>
                <h3> More Info About Us </h3>
              </div>
              <p className='about-text'>
                mkglobal.co.uk is an e-commerce company offering online travel
                products and services.
              </p>
              <p className='about-text'>
                Our customers can access our web site for a ‘one-stop shop’
                including access to specially negotiated airfares, hotels.
              </p>
              <p className='about-text'>
                As a travel solution provider we have made our mark in a crowded
                and opaque marketplace by being what our customers have asked of
                us; we are transparent, fair and committed to providing you with
                what you want, not what we think you want nor what our suppliers
                want you to have. We have invested heavily in technology to
                ensure that we can make your online experience a simple and
                jargon-free process. We also recognize that our customers may
                want to speak to someone about their travel requirements and to
                this end we have provided you with the backing of well trained
                travel professionals who have been in the industry for several
                years.
              </p>
              <p className='about-text'>
                A family run business focuses on core values that mirror the
                values of the management team. This translate into a passion for
                doing what they do well, and that means meeting the needs of its
                customers and ensuring that the service is always at the
                forefront of whatever they do and making sure that the customer
                receives value for money. Proactive Approach To Travel
                Management
              </p>
              <h3>Proactive Approach To Travel Management</h3>
              <p className='about-text'>We listen to what you want.</p>
              <br />
              <h3>24 Hour Service</h3>
              <p className='about-text'>
                mkglobal.co.uk provide a 24 hour, 7 days a week, 365 days a year
                personalised emergency service. Regardless of the time of the
                day or what part of the world your travellers are in, they will
                always speak to one of our travel consultants.
              </p>
              <br />
              <h3>Our Global People</h3>
              <p className='about-text'>
                mkglobal.co.uk recognises that our people are our greatest asset
                and represent the lifeblood of the business. By providing an
                excellent environment from which our team of people are able to
                develop and add to their skills.
              </p>
              <p className='about-text'>
                mkglobal.co.uk has a strong emphasis placed on effective
                teamwork. Our teams are based in London, Pakistan, India to
                ensure that we serve our customers efficiently.
              </p>
              <br />
              <h3>A better World</h3>
              <p className='about-text'>
                We, at mkglobal.co.uk believe in our environment and that is why
                have developed an ethical trading policy where we offer our
                customers the option of offsetting their carbon emissions in an
                easy, user-friendly way.
              </p>
              <p className='about-text'>
                We are working with a renowned organization who maintain many
                environmental projects worldwide
              </p>
              <p className='about-text'>
                The projects also have wider benefits to the local communities
                and environment too. They have three types of project:
              </p>
              <ol>
                <li>
                  Renewable energy - replacing non-renewable fuel such as fossil
                  fuels
                </li>
                <li>Energy efficiency - reducing the amount of fuel needed</li>
                <li>Forest restoration - absorbing carbon as the trees grow</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
