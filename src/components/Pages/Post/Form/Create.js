import { React, useState } from "react";
import "../Post.css";

const Create = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    paragraphe: "",
    image: "",
    category: "",
    demo: "",
    tags: "",
    git: "",
    images: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8 light text-center mt-3 mb-5">
          <form onSubmit={handleSubmit} action="" method="POST">
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
                    name="title"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-goup">
              <div className="row mb-3">
                <div className="col">
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="description"
                    name="description"
                    onChange={handleChange}
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
                    name="paragraphe"
                    onChange={handleChange}
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
                    name="image"
                    onChange={handleChange}
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
                    name="category"
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="demo"
                    name="demo"
                    onChange={handleChange}
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
                    placeholder="tags collection"
                    name="tags"
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="git"
                    name="git"
                    onChange={handleChange}
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
                    name="images"
                    onChange={handleChange}
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
};

export default Create;
