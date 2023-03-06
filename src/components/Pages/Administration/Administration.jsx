import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarAdmin from "components/Pages/Navbar/NavbarAdmin";
import axios from "axios";
import "./Administration.css";

const Administration = (props) => {
  //console.log(user.userName);

  const [posts, setPosts] = useState([]);
  let API_URL = process.env.REACT_APP_URL;

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/posts`);
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    data();
  }, []);

  //ID value is passed onclick from the deleted button
  const handleClick = async (id, event) => {
    event.preventDefault();
    let API_URL = process.env.REACT_APP_URL + "/api/post/delete/" + id;
    try {
      await axios.delete(API_URL);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="section">
      <NavbarAdmin />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-2 adminUserTitle">
            <div className="row">
              <div className="col-md-12 mt-2 pb-2 ml-2 line-bottom">
                <span className="mb-3 mt-4 pb-2 UserAdmin">
                  Bienvenue, <b>{props.user.userName}</b>
                </span>
                <br />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mt-3">
                <ul className="editProfile">
                  <Link to="account_profile">
                    <li>
                      <i className="fas fa-user-circle"></i> Edit Profile
                    </li>
                  </Link>
                  <li>
                    <i className="fas fa-clone"></i> Liste Posts
                  </li>
                  <li>
                    <i className="fas fa-users"></i> Liste Users
                  </li>
                  <li>
                    <i className="fas fa-question-circle"></i> Aides
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-10 text-center mb-5 mt-5">
            <Link
              className="titleColor 1.4rem"
              to="post/create"
              style={{ position: "absolute", left: "22px", top: "-36px" }}
            >
              <i className="far fa-edit"></i>
              <b>Creer un post</b>
            </Link>
            <table className="table table-striped tableStyle">
              <thead className="table-white">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">image</th>
                  <th scope="col">Description</th>
                  <th scope="col">Categorie</th>
                  <th scope="col">Demo Lien</th>
                  <th scope="col">Github Lien</th>
                  <th scope="col">Date</th>
                  <th className="col-1" scope="col">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post, index) => (
                  <tr key={post.id}>
                    <th scope="row">{post.id}</th>
                    <td>{post.title}</td>
                    <td>{post.image}</td>
                    <td>{post.description}|slice(0, 40)</td>
                    <td>{post.category}</td>
                    <td>{post.demo}</td>
                    <td>{post.git}</td>
                    <td>{post.createdAt}</td>
                    <td>
                      <Link className="mr-2" to={`/post/${post.id}`}>
                        <i className="far fa-eye"></i>
                      </Link>
                      <Link className="mr-2" to={`post/update/${post.id}`}>
                        <i className="far fa-edit"></i>
                      </Link>
                      <Link
                        className="mr-2"
                        to={`#`}
                        onClick={(event) => handleClick(post.id, event)}
                      >
                        <i className="far fa-trash-alt"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Administration;
