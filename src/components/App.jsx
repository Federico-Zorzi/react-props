import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="wrapper d-flex">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
