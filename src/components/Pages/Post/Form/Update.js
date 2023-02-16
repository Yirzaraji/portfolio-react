import React, { useState, useEffect, createElement } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Update() {
  //redirection hook
  const navigate = useNavigate();
  //Catch :id param from url
  const id = window.location.pathname.split("/").pop();
  //state
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    paragraph: "",
    image: "",
    category: "",
    demo: "",
    tags: "",
    git: "",
    images: [],
  });

  // when component is mounted, feth data and prefill form
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/post/${id}`
        );
        setFormData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (event) => {
    if (event.target.name === "images") {
      const newImages = [...formData.images];
      //retrieve the field related to the datased id
      newImages[event.target.dataset.id] = event.target.value;
      setFormData({ ...formData, images: newImages });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };

  const handleDeleteField = (index) => {
    const updatedFormData = [...formData.images];
    updatedFormData.splice(index, 1);
    console.log(updatedFormData);
    setFormData({ ...formData, images: updatedFormData });
  };

  //onclick push a new input field images in the state
  const handleAddField = () => {
    setFormData({
      ...formData,
      images: [...formData.images, "images/yourimage.jpg"],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:8080/api/post/update/${id}`,
        formData
      );
      console.log(response);
      navigate("/administration");
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
            <div className="form-group" id="imagesForm">
              {formData.images.map((image, index) => (
                <div key={index} className="row mb-2">
                  <div className="col">
                    <input
                      key={index}
                      type="text"
                      className="form-control"
                      placeholder="images collection"
                      name="images"
                      data-id={index}
                      onChange={handleChange}
                      value={image}
                    />
                  </div>
                  <div
                    className="btn btn-danger mb-3"
                    onClick={() => handleDeleteField(index)}
                  >
                    x
                  </div>
                </div>
              ))}
            </div>
            <div className="form-group">
              <div className="row mb-1">
                <div className="col">
                  <div
                    className="btn btn-success mr-2"
                    onClick={handleAddField}
                  >
                    +
                  </div>
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
