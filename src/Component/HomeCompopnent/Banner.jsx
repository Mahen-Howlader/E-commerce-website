import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


function Banner() {

    const bannerData = [
        {
            image: "https://i.ibb.co/yfYCwg5/image2banner.jpg"
        },
        {
            image: "https://i.ibb.co/ggvrFyy/image3banner.jpg"
        },
        {
            image: "https://i.ibb.co/ThWZPsR/image4banner.jpg"
        },
        {
            image: "https://i.ibb.co/MVft0bx/image1banner.jpg"
        },
    ];



    const items = bannerData.map((item,index) =>  {
        return <img className="w-full h-[80vh] bg-gray-800 p-2 max-w-[1240px] mx-auto" src={item?.image}></img>
    })




    return (
        <div>
            <AliceCarousel
                items={items}
                disableButtonsControls
                // autoPlay
                autoPlayInterval={1000}
                infinite
            />
        </div>
    );
}

export default Banner;