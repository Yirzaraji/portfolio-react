import React, { useState, useEffect } from "react";
import axios from "axios";

function Update() {
  const id = window.location.pathname.split("/").pop();
  const [formData, setFormData] = useState({
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

  //prefill form field after component is mounted
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8080/api/post/${id}`);
      const data = await response.json();
      setFormData({
        title: data.title,
        description: data.description,
        paragraph: data.paragraph,
        image: data.image,
        category: data.category,
        demo: data.demo,
        tags: data.tags,
        git: data.git,
        images: data.images,
      });
    };
    fetchData();
  }, []);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:8080/api/post/update/${id}`,
        formData
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8 light text-center mt-3 mb-5">
          <form onSubmit={handleSubmit}>
            <h3 className="titleFormColor mb-4">
              <b>Update</b>
            </h3>
            <div className="form-group">
              <div className="row mb-1">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="title"
                    name="title"
                    value={formData.title}
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
                    value={formData.description}
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
                    name="paragraph"
                    onChange={handleChange}
                    value={formData.paragraph}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row mb-1">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="image"
                    name="image"
                    onChange={handleChange}
                    value={formData.image}
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
                    value={formData.category}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="demo"
                    name="demo"
                    onChange={handleChange}
                    value={formData.demo}
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
                    value={formData.tags}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="git"
                    name="git"
                    onChange={handleChange}
                    value={formData.git}
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
                    value={formData.images}
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
}

export default Update;
