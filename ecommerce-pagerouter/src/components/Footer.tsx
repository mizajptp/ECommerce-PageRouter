import React from "react";

export default function Footer() {
  return (
    <div className="bg-dark text-light p-4 mt-auto">
      <div className="container">
        <div className="row mb-4">
          <div className="col-6 col-md-3">
            <h6>SHOP</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-light">Men</a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-light">Women</a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-light">Kids</a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-light">Sale</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 ">
            <h6>CUSTOMER SERVICE</h6>
            <ul className="list-unstyled medium">
              <li>
                <a href="#" className="text-decoration-none text-light">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-light">Order Tracking</a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-light">Returns</a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-light">FAQs</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 ">
            <h6>ABOUT</h6>
            <ul className="list-unstyled medium">
              <li>
                <a href="#" className="text-decoration-none text-light">Our Story</a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-light">Careers</a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-light">Gallery</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3">
            <h6>CONNECT</h6>
            <p className="mt-3 small">Email: enquiries@mcart.com</p>
            <p className="small">Call: +1 (800) 123-4567</p>
          </div>
        </div>
        <hr className="border-secondary"></hr>
        <div className="text-center small">
          <p className="mb-0">
            &copy; 2020-2025 MCart.com. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
