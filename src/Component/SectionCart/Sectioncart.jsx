const Sectioncart = ({product}) => {
    console.log(product)
    return (
        <div className=" p-3 mx-3 bg-white border  border-gray-200 hover:border-2 hover:border-gray-400  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="h-[200px] w-full object-cover" src={product?.imageUrl} alt="" />
            <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{product?.title.slice(1,20)}...</h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Price : {product?.price}</p>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">DiscountedPrice : {product?.discountedPrice}</p>
       
        </div>


    );
}

export default Sectioncart;
