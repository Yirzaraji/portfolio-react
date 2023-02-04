import React from "react";
const Carousel = (post) => (
  <div className="container-fluidp-5">
    <div className="row justify-content-center">
      <div className="col-sm-10 col-md-11 col-lg-9 carouselPost">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            {/* {% for image in post.images %} */}
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="{ loop.index0 }"
              className="active"
            ></li>
          </ol>
          <div className="carousel-inner border">
            {/* {% for image in post.images %} */}
            <div className="carousel-item {% if loop.first %} active {% endif %}">
              <img
                className="d-block w-100"
                src="{image.url }"
                alt="First slide"
              />
              {/* {% endfor %} */}
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
  </div>
);

export default Carousel;
