import React from "react";
import { Link , useHistory} from "react-router-dom";
import profile from '../image/profile.png'
const Navbar = () => {

  const token = localStorage.getItem("token");

  const role = localStorage.getItem("role");


  const history = useHistory();


  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("isEnrolled");
    history.push("/");
    window.location.reload()
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="/">
        Garage
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/pricing">
              Pricing
            </Link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">        
  {token ? (
   <li class="nav-item dropdown">
   <a
     class="nav-link dropdown-toggle"
     href="#"
     role="button"
     data-toggle="dropdown"
     aria-haspopup="true"
     aria-expanded="false"
   >
     <img
       src={profile}
       alt="Profile Photo"
       class="profile-photo"
     />
     <span class="profile-name">{role}</span> 
   </a>
   <div class="dropdown-menu">
     {/* <Link class="dropdown-item" to="/profile">
       My Profile
     </Link>
     <Link class="dropdown-item" href="/settings">
       Settings
     </Link> */}
     <Link class="dropdown-item" onClick={handleLogout}>
       Logout
     </Link>
   </div>
 </li>
 
  ) : (
    <>
      <li class="nav-item">
        <Link class="nav-link" to="/about">
          About
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/contact">
          Contact
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/register">
          Login/Register
        </Link>
      </li>
    </>
  )}
</ul>

      </div>
    </nav>
  );
};

export default Navbar;
