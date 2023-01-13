import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Auth from "./components/Auth";
import AddBlog from "./components/AddBlog";
import BlogDetail from "./components/BlogDetail";
import UserBlogs from "./components/UserBlogs";

import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/myblogs" element={<UserBlogs />} />
          <Route path="/myblogs/:id" element={<BlogDetail />} />
          <Route path="/blogs/add" element={<AddBlog />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
