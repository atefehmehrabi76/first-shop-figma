import ProductItems from "./ProductItems";
import {products} from"../constant/products";

function ProductCard(){
    
    return(
        <>
        <div className="flex flex-wrap justify-center">
          
          {products.map((product)=>{
            return (
              <div className="m-5" key={product.id}>
                    <ProductItems productData={product}/>
                </div>
            )
          })}
          </div>
        </>
    )
}

export default ProductCard;