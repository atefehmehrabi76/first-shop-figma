import { useState } from "react";

function Product(){
  const [count,setCount]=useState(0);
  const product={item:"iphone",price:2500};
  const totalPrice=count*product.price;
  const [userName,setUserName]=useState("");

  const  handleClick=()=>{
    setCount(count+1);
  }
  
 
  
  return(
    
    <>
      <button onClick={handleClick}>Click Here</button>
      <h3>Number:{count}</h3>
      <p>Totalprice: {totalPrice} $</p>
      <input type="text" onKeyUp={(e)=>{setUserName(e.target.value)}}/>
      <p>userName:{userName}</p>
    
    
    </>
  )


}

export default Product;

// structure:
// const user={
//     name:"atefeh"
//     ,age:27
//     ,email:"mehrabiatefeh12@gmail.com"
// }


// destructuring
// const {name}=user;