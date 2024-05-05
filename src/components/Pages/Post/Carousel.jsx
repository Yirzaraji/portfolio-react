import React, { useState } from "react";

const Carousel = (post) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  console.log(post.value.images);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === post.value.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? post.value.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mb-5 mt-3 carousel-container position-relative">
      <button
        className="btn btn-link carousel-btn carousel-btn-left"
        onClick={prevImage}
      >
        <span className="carousel-arrow-left" aria-hidden="true">
          &lsaquo;
        </span>
      </button>
      <img
        className="img-fluid img-carou"
        src={`../${post.value.images && post.value.images[currentImageIndex]}`}
        alt={currentImageIndex}
      />
      <button
        className="btn btn-link carousel-btn carousel-btn-right"
        onClick={nextImage}
      >
        <span className="carousel-arrow-right" aria-hidden="true">
          &rsaquo;
        </span>
      </button>
    </div>
  );
};
/* const Carousel = (post) => (
  <div className="container-fluid p-5">
    <div className="row justify-content-center">
      <div className="col-sm-10 col-md-11 col-lg-9 carouselPost">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            {post.value.images &&
              post.value.images.map((image, index) => (
                <li
                  key={index}
                  data-target="#carouselExampleIndicators"
                  data-slide-to={index}
                  className={index === 0 ? "active" : ""}
                ></li>
              ))}
          </ol>
          <div className="carousel-inner border">
            {post.value.images &&
              post.value.images.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
); */

export default Carousel;
