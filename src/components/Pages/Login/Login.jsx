import React, { useState } from "react";
import LoginForm from "components/Forms/LoginForm";
import axios from "api/axios";
const Login = () => {
  const [values, setValues] = useState({
    email: "",
    hash: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("api/users/login", values, {
        withCredentials: true,
      });
      console.log(response.data.jwt);
    } catch (error) {
      console.error(error);
    }
  };

  //Jsx render
  return <LoginForm handleSubmit={handleSubmit} handleChange={handleChange} />;
};

export default Login;
