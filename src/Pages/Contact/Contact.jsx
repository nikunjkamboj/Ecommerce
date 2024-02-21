import React from 'react';
import './Contact.css';

function Contact() {

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <br /><br />

            <div className="mx-auto p-2" style={{ width: "500px" }}>
              <div className="card text-center mb-3" style={{ width: "400px", border: "none" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fa-sharp fa-solid fa-phone fa-shake fa-sm me-2 " style={{ color: "#4672d8" }} />
                    <span>Call us</span> </h5>
                  <p className="card-text">0186-2258259,+91-9876543210</p>

                </div>
              </div>

              <div className="card text-center mb-3" style={{ width: "400px", border: "none" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fa-solid fa-location-dot fa-beat-fade fa-sm me-2" style={{ color: "#4672d8" }} />
                    <span>Location</span></h5>
                  <p className="card-text">G-246, G Block, Sector 63, Noida</p>

                </div>
              </div>

              <div className="card text-center mb-3" style={{ width: "400px", border: "none" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fa-sharp fa-regular fa-clock fa-spin fa-sm me-2" style={{ color: "#4672d8" }} />Business Hours</h5>
                  <p className="card-text">Mon - Fri …… 10 am - 8 pm <br />Sat, Sun ....… Closed</p>

                </div>
              </div>




            </div>
          </div>

          <div className="col-md-6  bg-light">
            <div className="card">
              <h5 className="card-header info-color  text-center py-3 bg-info text-white">
                Contact us
              </h5>
              <br />

              <div className="card-body px-lg-5 pt-0">
                <form className="md-form">
                  <label htmlFor="materialContactFormName" className="text-body">Name</label>
                  <input type="text" placeholder="Enter Your Name" className="form-control" /><br />

                  <label htmlFor="materialContactFormEmail" className="text-body">E-mail</label>
                  <input type="email" placeholder="Enter Your Email" className="form-control" /><br />

                  <label htmlFor="input" className="text-body">Address</label>
                  <input type="text" placeholder="Enter Your Address" className="form-control" /><br />

                  <label htmlFor="materialContactFormMessage" className="text-body">Message</label>
                  <textarea type="text" placeholder="Write Something..." className="form-control md-textarea" rows="3" /><br />

                  <div className="file-field">
                    <div className="btn  btn-sm ">
                      <input type="file" id="fileInput" />
                    </div>
                  </div>

                  <div className="form-check">
                    <input type="checkbox" className="form-check-input me-2" />
                    <label className="form-check-label text-body" htmlFor="materialContactFormCopy">Send me a copy of this message</label>
                  </div>

                  <button className="btn  btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
