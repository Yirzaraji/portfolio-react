import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import Administration from "./components/Pages/Administration/Administration";
import PDFViewer from "./components/Common/PDFViewer/PDFViewer";
import Post from "./components/Pages/Post/Post";
import Create from "./components/Pages/Post/Form/Create";
import Update from "./components/Pages/Post/Form/Update";
import Protected from "./components/Common/ProtectedRoute";
import useAuth from "hooks/useAuth";

function App() {
  const { auth } = useAuth();
  //render
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/administration"
          element={
            <Protected isAuthenticated={auth?.isAuthenticated}>
              <Administration user={auth} />
            </Protected>
          }
        />
        <Route
          path="/administration/post/create"
          element={
            <Protected isAuthenticated={auth?.isAuthenticated}>
              <Create />
            </Protected>
          }
        />
        <Route
          path="/administration/post/delete/:id"
          element={
            <Protected isAuthenticated={auth?.isAuthenticated}></Protected>
          }
        />
        <Route
          path="/administration/post/update/:id"
          element={
            <Protected isAuthenticated={auth?.isAuthenticated}>
              <Update />
            </Protected>
          }
        />
        <Route path="/post/:id" element={<Post />} />
        <Route
          path="/cv"
          element={<PDFViewer url="images/CV_Remi_Larrauri.pdf" />}
        />
      </Routes>
    </div>
  );
}
export default App;
