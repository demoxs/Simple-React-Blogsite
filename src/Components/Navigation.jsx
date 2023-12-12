import React from "react";
import { NavLink } from "react-router-dom";
function Navigation()
{
    return(
        <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="index.html"><h2>Stand Blog<em>.</em></h2></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item ">
              <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li> 
              <li class="nav-item">
              <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li class="nav-item">
              <NavLink className="nav-link" to="/Blog">
                  Blog
                </NavLink>
              </li>
              
              <li class="nav-item">
              <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}
export default Navigation;