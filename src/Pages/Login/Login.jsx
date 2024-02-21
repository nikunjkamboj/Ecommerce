import React, { useState } from 'react';
import './Login.css';
import SignUp from './Sign_up';
import LogIn from './UserLogIn';

function Login() {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);
  const [mybutton, setMybutton] = useState(false);
  const [check, setcheck] = useState(false);

  const toggleForms = () => {



    if (isLoginFormVisible) {
      setLoginFormVisible(false);
    } else {
      setLoginFormVisible(true)
    }
    handleClick();
    clickit();

  };
  function handleClick() {
    setMybutton(!mybutton)
  }
  function clickit() {
    setcheck(!check);
  }

  return (
    <>
      <div className="modal" id="myModal">
        <div className="modal-dialog modal-lg">
          <div class="modal-content">

            <div className="modal-body LoginmodalBody">
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              <div className={check ? 'container1' : 'container2'}>

                {/* Data or Content */}
                <div className="box-1">
                  <div className="content-holder">
                    <h2>Hello!</h2>

                    <button className="button-1" onClick={toggleForms}>
                      {
                        mybutton ? 'Login' : 'Signup'}
                    </button>

                  </div>
                </div>
                {/* Forms */}
                <div className="box-2">
                  {
                    isLoginFormVisible ? <LogIn /> : <SignUp />
                  }
                </div>
              </div>

            </div>
          </div></div>
      </div>
    </>
  );
}

export default Login;
