import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllBlogs from "./Resource/Home";
import About from "./Resource/About";
import Contact from "./Resource/Contact-us";
import Footer from "./Resource/Footer";
import PhonePeExpress from "./Resource/Blogs/integration/PhonePe.Express";
import PhonePeNest from "./Resource/Blogs/integration/phonepe.nest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Navigation Bar Routes */}
        <Route path="/" element={<AllBlogs />}></Route>
        <Route path="/Programming" element={<About />}></Route>
        <Route path="/Integration" element={<PhonePeExpress />}></Route>
        <Route path="/Devops" element={<Footer />}></Route>
        <Route path="/Integration" element={<PhonePeExpress />}></Route>
        <Route path="/Information-technology" element={<Footer />}></Route>
        <Route path="/learning" element={<Footer />}></Route>
        <Route path="/Seo" element={<Footer />}></Route>
        <Route path="/Others" element={<Footer />}></Route>

        {/* other Routes */}
        <Route
          path="/Integration/phonepe-express"
          element={<PhonePeExpress />}></Route>

        <Route
          path="/Integration/phonepe-nest"
          element={<PhonePeNest />}></Route>


        <Route path="/Integration/phonepe-nest" element={<Contact />}></Route>
        <Route path="/Integration/stripe-express" element={<Contact />}></Route>
        <Route path="/Integration/stripe-nest" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
