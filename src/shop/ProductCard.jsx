import React from 'react';
import { Link } from 'react-router-dom';
import Ratting from '../home/Ratting';

const ProductCard = ({ GridList, products }) => {
    return (
        <div className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list"}`}>
            {
                products.map((product, i) => {
                    return (
                        <div key={i} className="col-lg-4 col-md-6 col-12">
                            <div className="product-item">
                                <div className="product-thumb">
                                    <div className="pro-thumb">
                                        <img src={product.img} alt="bidyut" />
                                    </div>
                                    {/* product action links */}
                                    <div className="product-action-link">
                                        <Link to={`/shop/${product.id}`}><i className='icofont-eye'></i> </Link>
                                        <Link ><i className='icofont-heart'></i> </Link>
                                        <Link to={`/cart-page`}><i className='icofont-cart-alt'></i> </Link>

                                    </div>

                                </div>

                                {/* product content */}
                                <div className="product-content">
                                    <h5>
                                        <Link className={`/shop/${product.id}`}> {product.name}</Link>
                                    </h5>
                                    <p className='productRating'>
                                        <Ratting />
                                    </p>
                                    <h5>${product.price}</h5>
                                </div>

                            </div>
                            
                            {/* list style */}
                            <div className="product-list-item">
                                <div className="product-thumb">
                                    <div className="pro-thumb">
                                        <img src={product.img} alt="bidyut" />
                                    </div>
                                    {/* product action links */}
                                    <div className="product-action-link">
                                        <Link to={`/shop/${product.id}`}><i className='icofont-eye'></i> </Link>
                                        <Link ><i className='icofont-heart'></i> </Link>
                                        <Link to={`/cart-page`}><i className='icofont-cart-alt'></i> </Link>

                                    </div>

                                </div>

                                {/* product content */}
                                <div className="product-content">
                                    <h5>
                                        <Link className={`/shop/${product.id}`}> {product.name}</Link>
                                    </h5>
                                    <p className='productRating'>
                                        <Ratting />
                                    </p>
                                    <h5>${product.price}</h5>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ProductCard;