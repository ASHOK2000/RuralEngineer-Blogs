import React from "react";
// import AllBlogsContent from "./sub-pages/AllBlogs-content";
import Footer from "./Footer";
import NavBar from "./NavBar";

import { useState } from "react";
import AllBlogs from "./BlogList";

export default function Home() {
  return (
    <div>
      <div className="Header">
        <NavBar />
      </div>

      <div>
        <AllBlogs />
      </div>

      <div className="Footer mt-5">
        <Footer />
      </div>
    </div>
  );
}
