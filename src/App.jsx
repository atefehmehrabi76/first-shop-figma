import React from "react";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import AdGroup from "./components/AdGroup";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <AdGroup />
      <ProductCard />
      <Footer />
    </>
  );
}

export default App;
