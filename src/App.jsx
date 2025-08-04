import React from "react";
import Header from "./component/Header";
import Footer from "./component/footer";
import Main from "./component/Main";

export default function App() {
  return (
    <>
      <div className="main-body">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
