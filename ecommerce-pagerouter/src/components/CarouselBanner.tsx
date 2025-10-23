import React from "react";
import Image from "next/image";

export default function CarouselBanner() {
  return (
    <div id="demo" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">

        <div className="carousel-item active">
          <Image
            className="d-block w-100"
            src="/images/Carousel1.jpg"
            width={800}
            height={450}
            alt="First slide"
          />
          <div className="carousel-caption">
            <h3>Upto 70% Off</h3>
          </div>
        </div>

        <div className="carousel-item">
          <Image
            className="d-block w-100"
            src="/images/Carousel2.jpg"
            width={800}
            height={450}
            alt="Second slide"
          />
          <div className="carousel-caption text-dark">
            <h3>Crockery - Great Deals!! Upto 50% Off</h3>
          </div>
        </div>

        <div className="carousel-item">
          <Image
            className="d-block w-100"
            src="/images/Carousel3.jpg"
            width={800}
            height={450}
            alt="Third slide"
          />
          <div className="carousel-caption text-light text-start">
            <h3>Buy More! Save More!! - HUGE SALE</h3>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}
