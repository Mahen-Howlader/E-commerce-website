import React from 'react';
import { IoIosStar } from 'react-icons/io';

const ProductCart = ({ Product }) => {
  console.log(Product)
  return (
    <div className="antialiased text-gray-900 ">
      <div className=" hover:shadow  cursor-pointer flex items-center justify-center">
        <div className="bg-white  w-full hover:shadow-xl  rounded-lg overflow-hidden  shadow-2xl ">
          <img className="h-48 w-full object-cover object-end" src={Product?.imageUrl} alt="Home in Countryside" />
          <div className="p-6 space-y-3">
            <h4 className="mt-2 font-semibold text-lg leading-tight truncate ">{Product?.title}</h4>
            <div className="mt-1 flex justify-between">
              <span className='font-semibold'>BDT : {Product?.discountedPrice}</span>
              <span className=" text-gray-400 line-through">BDT: {Product?.price}</span>
              <span className='font-bold text-green-600'>{Product?.discountPersent}% Off</span>
            </div>
            <div className="mt-2 flex justify-evenly  items-center">
            <span className="ml-2 text-gray-600 text-sm">34 reviews</span>

              <span className="text-teal-600 font-semibold">
                <span className='flex'>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
