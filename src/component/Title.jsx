import React from "react";


function Title({ products}) {
  const { title, description } = products;
  
  return (
    <div
      className="w-[200px] h-[200px] text-center flex flex-col justify-center"
      key={products.id}
    >
      <b className="loading mb-5">{title}</b>
      <p className="loading2 text-gray-500">{description}</p>
    </div>
  );
}

export default Title;
