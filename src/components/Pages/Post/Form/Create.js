import React from "react";
import "../Post.css";

const Create = () => (
  <div className="container">
    <div className="row d-flex justify-content-center">
      <div className="col-md-8 light text-center mt-3 mb-5">
        <form action="" method="POST">
          <h3 className="titleFormColor mb-4">
            <b>CREATE POST</b>
          </h3>
          <div className="form-group">
            <div className="row mb-1">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="title"
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  className="form-control"
                  placeholder="description"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row mb-1">
              <div className="col">
                <textarea
                  className="form-control"
                  placeholder="paragraphe"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row mb-1">
              <div className="col">
                <input
                  type="file"
                  className="form-control"
                  placeholder="image"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row mb-1">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="category (front, back, design)"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row mb-1">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="demo"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row mb-1">
              <div className="col">
                <input type="text" className="form-control" placeholder="git" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row mb-1">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="tags collection"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row mb-1">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="images collection"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row mb-1">
              <div className="col">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Create;
