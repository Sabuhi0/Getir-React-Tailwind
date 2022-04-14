import { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from '../api/banners.json';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useWindowWidth } from '@react-hook/window-size';



function NextButton ({ onClick, className }) {
	return (
		<button className={`text-purple-700 absolute top-1/2 -right-6 -translate-y-1/2`} onClick={onClick}>
			<IoIosArrowForward size={22} />
		</button>
	)
}

function PrevButton ({ onClick, className }) {
	return (
		<button className={`text-purple-700 absolute top-1/2 -left-6 -translate-y-1/2`} onClick={onClick}>
			<IoIosArrowBack size={22} />
		</button>
	)
}


const Campaigns = () => {
    const [banners,setBanners] = useState([]);

    const windowWidth = useWindowWidth()

    useEffect(()=> {
        setBanners(Banners)
    },[])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        speed: 500,
        autoplaySpeed: 3500,
        pauseOnHover: true,
        cssEase: "linear",
        nextArrow: <NextButton />,
		prevArrow: <PrevButton />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
        ]
    };
    return (
        <div className="md:container md:mx-auto md:py-8">
            <h3 className="font-semibold text-sm mb-2 hidden md:block">Kampanyalar</h3>
            <Slider className="md:-mx-2" {...settings}>  
                {banners && banners.map(banner => (
                    <div key={banner.id} className="md:px-2">
                        <img src={banner.image} className="w-full md:rounded-lg" />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Campaigns