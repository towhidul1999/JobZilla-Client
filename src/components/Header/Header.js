import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
  <div class="container">
    <h2 >JobZilla</h2>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a id='menu' class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a id='menu' class="nav-link" href="#">Jobs</a>
        </li>
        <li class="nav-item">
          <a id='menu' class="nav-link" href="#">Candidates</a>
        </li>
        <li class="nav-item">
          <a id='menu' class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a id='menu' class="nav-link" href="#">Register</a>
        </li>
        <li class="nav-item">
          <a id='menu' class="nav-link" href="#">Post a Job</a>
        </li>
        <li class="nav-item">
          <a id='logMenu' class="nav-link" href="#">Log In</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    );
};

export default Header;