import { Outlet, Link } from "react-router-dom";
import './Layout.css';
import './Navbar.css';
import './java.js';
import Login from "../../../Pages/Login/Login.jsx";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from 'react-redux'




const Layout = () => {
  const val = useSelector((state) => state.counter.value)
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="logo.png" className="logoIcon nav-link" alt="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/blog">Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/contact">Contact us</Link>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item mx-auto" style={{ width: "100px" }}>
                <BsCart3 size={50} color="#84a488" className="BsCart3 position-relative" />
                <div className="cartItems fs-3 bg-danger text-light">{val}</div>

              </li>
            </ul>
          </div>
        </div>

      </nav>




      <nav className="navbar navbar-expand-sm bg-success">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="text-white nav-link" to="/about">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-white nav-link" to="/category">
                <div className="dropdown dropdown-toggle" data-bs-toggle="dropdown">
                  Category
                  <ul className="dropdown-menu" id="show">
                    <li><Link className="dropdown-item cat" to="#"><b>All Categories</b></Link></li>
                    <li><hr className="dropdown-divider"></hr> </li>
                    <li><Link className="dropdown-item cat" to="#">Mobiles</Link></li>
                    <li><Link className="dropdown-item cat" to="#">Men Wear</Link></li>
                    <li><Link className="dropdown-item cat" to="#">Women Wear</Link></li>
                    <li><Link className="dropdown-item cat" to="#">Home Appliances</Link></li>
                  </ul>
                </div>

              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-white  nav-link" to="/career">
                Career
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id="blink" to="/trending">
                Trending Deals
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-white nav-link" to="/enroll">
                Enroll now
              </Link>
            </li>

          </ul>
          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span className="input-group-text border-0" type="submit" id="search-addon">
              <i className="fa-solid fa-magnifying-glass fa-beat-fade fa-lg"></i>
            </span>
          </form>
          <form className="d-flex">
            <div className="dropdown">
              <img className="dropbtn" src="https://www.iconpacks.net/icons/1/free-user-login-icon-305-thumb.png" alt="account" width="40px" class="dropdown-toggle" data-bs-toggle="dropdown" />

              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="">
                  <div className="log" data-bs-toggle="modal" data-bs-target="#myModal">
                    LOGIN/REGISTER</div></Link>
                </li>
                <li><Link className="dropdown-item" to="#">
                  <div className="other">My Activity</div></Link></li>
                <li><Link className="dropdown-item" to="#">
                  <div className="other">Recent Searched</div></Link></li>
                <li><Link className="dropdown-item" to="#">
                  <div className="other">Recent Viewed</div></Link></li>
                <li><Link className="dropdown-item" to="#">
                  <div className="other">Our Stores</div></Link></li>
              </ul>
            </div>




            <div className="container-fluid">
              <button className="button-89"
                type="button" data-bs-toggle="offcanvas"
                data-bs-target="#demo">Become a Dealer</button>
            </div>
          </form>
        </div>
      </nav>

      <Login />

      <div className="offcanvas offcanvas-end" id="demo">
        <div className="offcanvas-header" >

          <button type="button" className="btn btn-danger">Dealer Central Login</button>

        </div>
        <div className="container">
          <Link to="#" className="nav-link text-info" ><h4>Explore our services➠</h4></Link>
        </div>
        <div className="offcanvas-body">
          <p>For Dealers</p>
          <p>For Sellers</p>
          <p>For customers</p>
          <p>Some text lorem ipsum.</p>
          <button className="btn btn-secondary" type="button">A Button</button>
        </div>
      </div>


      <Outlet />
    </>
  );
};

export default Layout;