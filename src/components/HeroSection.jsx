import { useState } from "react";
import Slider from "react-slick";
import ReactFlagsSelect from 'react-flags-select';
import { useWindowWidth } from '@react-hook/window-size';

const HeroSection = () => {

    const [selected, setSelected] = useState('TR');

    const phones = {
        US: '+1',
        AZ: '+994',
        DE: '+50',
        TR: '+90',
        IT: '+7',
        IN: '+15'
    }

    const windowWidth = useWindowWidth()

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3500,
        pauseOnHover: true,
        cssEase: "linear"
    };
    return (
        <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
            {windowWidth >= 768 && <Slider {...settings}>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg" alt="person" />
                </div>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg" alt="person" />
                </div>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg" alt="person" />
                </div>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg" alt="person" />
                </div>
            </Slider>
            }
            <div className="md:container flex justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
                <div className="hidden md:block">
                    <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" />
                    <h3 className="mt-8 text-4xl font-semibold text-white">
                        Dakikalar içinde <br /> kapınızda <br />
                    </h3>
                </div>
                <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6">
                    <h3 className="text-primary-brand-color text-center font-semibold mb-4">Giriş yap veya kayıt ol</h3>
                    <div className="grid gap-y-3">
                        <div className="flex gap-x-2">
                            <ReactFlagsSelect
                                countries={Object.keys(phones)}
                                customLabels={phones}
                                onSelect={code => setSelected(code)}
                                selected={selected}
                                className="flag-select"
                            />
                            <label className="flex-1 relative group block cursor-text">
                                <input required type="text" className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2" />
                                <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-valid:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-focus:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">Telfon Numarası</span>
                            </label>
                        </div>
                        <button className="bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center w-full rounded-md text-sm font-semibold">
                            Telefon numarası ile devam et
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;