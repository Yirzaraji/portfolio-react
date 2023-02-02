import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col-md-3">&nbsp;</div>
        <div class="col-md-6">
          <div class="bg-light py-3 px-3 mt-5 mb-5">
            <h1 class="titleColor">
              <i class="fas fa-sign-in-alt"></i> Connection
            </h1>
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div class="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                />
              </div>
              <div class="form-group">
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
