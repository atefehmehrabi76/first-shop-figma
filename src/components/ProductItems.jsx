function    ProductItems(image,title,price,material){

    return(
        <div>
            <div>
                <img src={image} alt="" />
                <button></button>
            </div>
            <div>
                <h3>{title}</h3>
                <b>{price} $</b>
            </div>
            <div>
                <p>{material}</p>
            </div>
        </div>
    )
}

export default ProductItems;