import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Navbar/Layout";
import Home from "../../../Pages/Home/Home";
import Blogs from "../../../Pages/Blogs/Blogs";
import Contact from "../../../Pages/Contact/Contact";
import NoPage from "../../../Pages/No page/NoPage";
import About from "../../../Pages/About/About";
import Category from "../../../Pages/Category/Category";
import Career from "../../../Pages/Career/Career";
import Trending from "../../../Pages/Trending/Trending";
import Enroll from "../../../Pages/Enroll/Enroll";


const nabar=()=>
{
    return(
      <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="blog" element={<Blogs/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="*" element={<NoPage/>} />
          <Route path="about" element={<About/>} />
          <Route path="category" element={<Category/>} />
          <Route path="career" element={<Career/>} />
          <Route path="trending" element={<Trending/>} />
          <Route path="enroll" element={<Enroll/>} />
         
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    )
}
export default nabar;