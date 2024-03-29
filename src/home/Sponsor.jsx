import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';


const sponsorList = [
    {
        imgUrl: "https://github.com/Bidyut-Sikder/frontEcommerce/blob/master/src/assets/images/sponsor/01.png?raw=true",
    },
    {
        imgUrl: "https://github.com/Bidyut-Sikder/frontEcommerce/blob/master/src/assets/images/sponsor/02.png?raw=true",
    },
    {
        imgUrl: "https://github.com/Bidyut-Sikder/frontEcommerce/blob/master/src/assets/images/sponsor/03.png?raw=true",
    },
    {
        imgUrl: "https://github.com/Bidyut-Sikder/frontEcommerce/blob/master/src/assets/images/sponsor/04.png?raw=true",
    },
    {
        imgUrl: "https://github.com/Bidyut-Sikder/frontEcommerce/blob/master/src/assets/images/sponsor/05.png?raw=true",
    },
    {
        imgUrl: "https://github.com/Bidyut-Sikder/frontEcommerce/blob/master/src/assets/images/sponsor/06.png?raw=true",
    },
];


const Sponsor = () => {
    return (
        <div className="sponsor-section section-bg">
            <div className="container">
                <div className="section-wrapper">
                    <div className="sponsor-slider">
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={20}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                              
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >

                            {
                                sponsorList.map((item, i) => {
                                    return <SwiperSlide key={i} >
                                        <div className="sponsor-item">
                                            <div className="sponsor-thumb">
                                                <img src={item.imgUrl} alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                })
                            }

                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsor;
