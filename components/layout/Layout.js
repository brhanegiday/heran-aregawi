import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  return (
    <div className="">
      <Header />
      <main className="min-h-screen bg-[#f5f5f5]">{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
