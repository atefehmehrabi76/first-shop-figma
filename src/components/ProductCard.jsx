import ProductItems from "./ProductItems";
import {product} from"../constant/products";

function ProductCard(){
    
    return(
        <>
          {product.map((item)=>{
            return (
                <li key={item.id}>
                    <ProductItems title={item.title} price={item.price} imasge={item.image} material={item.material}/>
                </li>
            )
          })}
        </>
    )
}

export default ProductCard;