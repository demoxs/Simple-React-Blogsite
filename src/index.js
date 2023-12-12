import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/css/fontawesome.css";
import "./assets/css/templatemo-stand-blog.css";
import "./assets/css/owl.css";

import "./vendor/bootstrap/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Blog,
  // Posts,
  // Post,
} from "./Components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Blog" element={<Blog />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();