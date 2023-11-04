"use client";
import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import NavBarNew from "./NavBarNew";

function Layout({ children }) {
  useEffect(() => {
    import("preline");
  }, []);

  return (
    <div className='overflow-x-hidden'>
      <NavBarNew />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
