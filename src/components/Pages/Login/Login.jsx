import React, { useState } from "react";
import LoginForm from "components/Forms/LoginForm";
import axios from "api/axios";
import useAuth from "hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [values, setValues] = useState({
    email: "",
    hash: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      //field: value
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("api/users/login", values, {
        withCredentials: true,
      });
      console.log(response.data);
      const isAuthenticated = true;
      const token = response.data.jwt;
      const userName = response.data.user.userName;
      const userId = response.data.user.id;
      const hash = response.data.user.password;
      setAuth({ isAuthenticated, token, userName, hash, userId });
      console.log({ auth });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return <LoginForm handleSubmit={handleSubmit} handleChange={handleChange} />;
};

export default Login;
