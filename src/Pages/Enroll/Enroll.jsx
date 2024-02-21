import React from 'react';
import './Enroll.css';

function Enroll() {
  return (
    <>
      <div className="container-fluid bg-warning-subtle">
        <br />
        <div className='text-center fs-3'>
          Subscribe to Prime Membership
        </div>
        <br /><br />
        <p className='text-center fs-5'>Your Prime membership includes a variety of shipping benefits,
          including several shipping options if you need to expedite your delivery.</p><br /><br />


        <form>
          <div className="search m-4 text-center">
            <input className="plan12" type="text" name="search" placeholder="Search The Plan..." />
            <button className="button-23">Search</button>
          </div>
        </form><br />
      </div>
      <div className='bg-dark p-2'>
        <div className="row row-cols-1 row-cols-md-3 g-4 bg-dark">
          <div className="col">
            <div className="card h-100 text-center">
              <span className='fs-4'>Monthly</span>
              <div className="card-body">
                <h5 className="card-title">₹ 150</h5>
                <p className="card-text">

                  <i className="fa fa-check-square d-flex " aria-hidden="true"></i>
                  <div className="AlignTxt">Free Delivery to eligible addresses</div>

                  <i className="fa fa-check-square d-flex" aria-hidden="true"></i>
                  <div className="AlignTxt">Discounted delivery charges to eligible addresses</div>

                  <i className="fa fa-check-square d-flex" aria-hidden="true"></i>
                  <div className="AlignTxt">Prime Reading</div>

                  <i className="fa fa-check-square d-flex" aria-hidden="true"></i>
                  <div className="AlignTxt">Instant Pay via any Bank Credit Card</div>
                </p>

              </div>
              <div className="card-footer">
                <button className="button-85">Get it now</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 text-center">
              <span className='fs-4'>Yearly</span>
              <div className="card-body">
                <h5 className="card-title">₹ 1500</h5>
                <p className="card-text">

                  <i className="fa fa-check-square d-flex" aria-hidden="true"></i>
                  <div className="AlignTxt"> Free Delivery to eligible addresses</div>
                  <i className="fa fa-check-square d-flex" aria-hidden="true"></i>
                  <div className="AlignTxt"> Discounted delivery charges to eligible addresses</div>
                  <i className="fa fa-check-square d-flex" aria-hidden="true"></i>
                  <div className="AlignTxt">Prime Reading</div>
                  <i className="fa fa-check-square d-flex" aria-hidden="true"></i>
                  <div className="AlignTxt"> Instant Pay via any Bank Credit Card</div>
                  <i className="fa fa-check-square d-flex" aria-hidden="true"></i>
                  <div className="AlignTxt">Latest Music</div>
                  <i className="fa fa-check-square d-flex" aria-hidden="true"></i>
                  <div className="AlignTxt">Latest Prime Video</div>
                  <i className="fa fa-check-square d-flex" aria-hidden="true"></i>
                  <div className="AlignTxt">Prime Advantage</div>
                  <i className="fa fa-check-square d-flex" aria-hidden="true"></i>
                  <div className="AlignTxt">Prime Early Access & Exclusive Deals</div>
                </p>
              </div>
              <div className="card-footer">
                <button className="button-85">Get it now</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 text-center">
              <span className='fs-4'>Life-time</span>

              <div className="card-body">
                <h5 className="card-title">₹ 50,000</h5>
                <p className="card-text">
                  <i className="fa fa-check-square d-flex" aria-hidden="true"></i>
                  <div className="AlignTxt">Free Delivery to eligible addresses</div>
                  <i className="fa fa-check-square d-flex" aria-hidden="true"></i>
                  <div className="AlignTxt">Discounted delivery charges to eligible addresses</div>
                  <i className="fa fa-check-square d-flex" aria-hidden="true"></i>
                  <div className="AlignTxt"> Prime Reading</div>
                  <i className="fa fa-check-square d-flex" aria-hidden="true"></i>
                  <div className="AlignTxt"> Latest Music</div>
                  <i className="fa fa-check-square d-flex" aria-hidden="true"></i>
                  <div className="AlignTxt">Latest Prime Video</div>
                  <i className="fa fa-check-square d-flex" aria-hidden="true"></i>
                  <div className="AlignTxt"> Prime Advantage</div>
                  <i className="fa fa-check-square d-flex" aria-hidden="true"></i>
                  <div className="AlignTxt"> Prime Early Access & Exclusive Deals</div>
                  <i className="fa fa-check-square d-flex" aria-hidden="true"></i>
                  <div className="AlignTxt"> Latest Family offers</div>
                  <i className="fa fa-check-square d-flex" aria-hidden="true"></i>
                  <div className="AlignTxt"> instant Pay via any Bank Credit Card</div>

                </p>
              </div>
              <div className="card-footer">
                <button className="button-85">Get it now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Enroll;
