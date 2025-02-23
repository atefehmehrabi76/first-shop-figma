import React, { useState } from "react";
import Title from "./Title";
import products from "../constant/products";
import Image from "./Image";
import Buttons from "./Buttons";
import "../Animation.css";

function ProductCard() {
  const [selected, setSelected] = useState(0);

  const handleButtonClick = (index) => {
    setSelected(index);
  };
  return (
    <div className="flex gap-10">
      <Title products={products[selected]} />
      <Image products={products[selected]} />
      <Buttons onButtonClick={handleButtonClick} selectedIndex={selected} />
    </div>
  );
}

export default ProductCard;
