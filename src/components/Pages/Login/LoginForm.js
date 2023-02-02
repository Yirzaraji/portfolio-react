import React, { useState } from "react";

const LoginForm = () => {
  const [values, setValues] = useState({
    email: "",
    hash: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [values.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">&nbsp;</div>
        <div className="col-md-6">
          <div className="bg-light py-3 px-3 mt-5 mb-5">
            <h1 className="titleColor">
              <i className="fas fa-sign-in-alt"></i> Connection
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  onChange={handleChange}
                  className="form-control"
                  name="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  onChange={handleChange}
                  className="form-control"
                  name="hash"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-success rounded">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
