import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = ({ products, GridList }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return (
        <div className="widget widget-search">
            <form className="search-wrapper mb-3">
                <input type="text" name='search' id='search'

                    onChange={(e) => setSearchTerm(e.target.value)} defaultValue={searchTerm} placeholder='Search ...' />
                <button type='submit'><i className='icofont-search'></i></button>
            </form>

            {/* //searching result  */}

            <div>
                {
                    searchTerm && filteredProducts.map((product, i) => {
                        return (
                            <Link to={`/shop/${product.id}`} key={i} >
                                <div className="d-flex gap-3 p-2">
                                    <div >
                                        <div className="pro-thumb h-25">
                                            <img src={product.img} width={70} className='flex-{grow|shrink}-0' alt="" />
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <p>
                                            <Link to={`/shop/${product.id}`}>{product.name} </Link>
                                        </p>
                                        <h6>${product.price}</h6>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Search;
