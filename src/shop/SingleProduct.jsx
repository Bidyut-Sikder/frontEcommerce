import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import ProductDisplay from './ProductDisplay';
import ReviewAndDescription from './ReviewAndDescription';
import PopularPosts from './PopularPosts';
import Tags from './Tags';


const SingleProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {

        (async () => {
            const response = await fetch('/src/products.json')
            const resData = await response.json()
            setProduct(resData)

            //console.log(resData)
        })()

    }, [])

    const result = product.filter(p => p.id === id)

    return (
        <div>
            <PageHeader title={'OUR SHOP SINGLE'} currentPage={'Shop / Single Product'} />

            <div className="shop-single padding-tb aside-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="product-details">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 col-12">
                                            <div className="product-thumb">
                                                <div className="swiper-container pro-single-top">
                                                    <Swiper spaceBetween={30} slidesPerView={1} loop={true} autoplay={{
                                                        delay: 2000,
                                                        disableOnInteraction: false
                                                    }}
                                                        navigation={{ prevEl: '.pro-single-prev', nextEl: '.pro-single-next' }}
                                                        modules={[Autoplay]} className="mySwiper">
                                                        {
                                                            result.map((product, i) => {
                                                                return (
                                                                    <SwiperSlide key={i}>
                                                                        <div className="single-thumb">
                                                                            <img src={product.img} alt="dd" />
                                                                        </div>
                                                                    </SwiperSlide>
                                                                )
                                                            })
                                                        }

                                                    </Swiper>
                                                    <div className="pro-single-prev">
                                                        <i className='icofont-rounded-right'></i>
                                                    </div>
                                                    <div className="pro-single-next">
                                                        <i className='icofont-rounded-left'></i>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>

                                        {/* details starts here  */}
                                        <div className="col-md-6 col-12">
                                            <div className="post-content">
                                                <div>
                                                    {
                                                        result.map((item, i) => {
                                                            return (
                                                              < ProductDisplay key={i} item={item} />
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review">
                                    <ReviewAndDescription />
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <aside className="ps-lg-4">
                                <PopularPosts />
                                <Tags />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleProduct; 