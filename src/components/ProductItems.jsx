import vector from '../images/Vector.png';
import vector1 from '../images/Vector1.png';
import Rectangle from '../images/Rectangle.png';
function    ProductItems({productData}){

    const {image,title,price,material} = productData;

    return(
        <div>
            <div>
                <div className='relative top-[76px] left-[260px]'>
                   <img src={Rectangle} alt="" />
                   <img  className="relative bottom-7 right-[-12px]" src={vector1} alt="" />
                </div>
                <img className='w-[320px] h-[423px] rounded-2xl' src={image} alt="" />
            </div>
            <div className="flex gap-[60px] items-center mt-3">
                <b className="text-[14px]">{title}</b>
                <b>{price} $</b>
            </div>
            <div>
                <p className='text-gray-500'>{material}</p>
            </div>
            <div className='flex gap-2 mt-3'>
                <img src={vector} alt="vector star" />
                <img src={vector} alt="vector star" />
                <img src={vector} alt="vector star" />
                <img src={vector} alt="vector star" />
                <img src={vector} alt="vector star" />
            </div>
        </div>
    )
}

export default ProductItems;