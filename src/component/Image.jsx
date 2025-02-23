import React from "react";

function Image({ products }) {
  return (
    <div>
      <img
        className="w-[200px] h-[200px]"
        src={products.image}
        alt={`${products.title}`}
      />
    </div>
  );
}

export default Image;
