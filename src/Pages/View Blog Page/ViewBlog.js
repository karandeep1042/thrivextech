import React from "react";
import ViewBlogHero from "./Components/ViewBlogHero";
import Navbar from "../Home Page/Navbar";
import Footer from "../Home Page/Components/Footer";
import ViewBlogContent from "./Components/ViewBlogContent";
import ShareBlog from "./Components/ShareBlog";
import BlogsSlider from "../Home Page/Components/BlogsSlider";

export default function ViewBlog() {
  return (
    <>
      <Navbar />
      <ViewBlogHero />
      <ViewBlogContent />
      <ShareBlog />
      <BlogsSlider />
      <Footer />
    </>
  );
}
