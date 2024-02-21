import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
      <footer className="text-lg-start bg-dark text-white">
        <section className="d-flex">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Purchase it
              </h6>
              <p className='paragraph'>
                We work every day to earn and keep customer's trust.
                We do this through convenient services and
                by creating India-specific programs for the thousands of small and medium businesses.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 className="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
                <a href="#!" className="text-reset">Angular</a>
              </p>
              <p>
                <a href="#!" className="text-reset">React</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Vue</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Laravel</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset">Pricing</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Settings</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Orders</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Help</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto  mb-4">

              <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
              <p><i className="fa fa-home" aria-hidden="true"></i> Address - Sector 62,Noida</p>
              <p><i className="fa fa-envelope" aria-hidden="true"></i> Email - info@moptra.com</p>
              <p><i className="fa fa-phone" aria-hidden="true"></i> 0186-2258259</p>
              <p><i className="fa fa-mobile" aria-hidden="true"></i> +91-9876543210</p>
            </div>
          </div>
        </section>
        <div className="text-center p-1 ">
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="https://wildbuddy.com/">wildbuddy.com</a>
        </div>
      </footer>



    </>
  )
}

export default Footer