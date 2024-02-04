import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import data from '../products.json'
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import Search from './Search';
import ShopCategory from './ShopCategory';
import PopularPosts from './PopularPosts';
import Tags from './Tags';

const showResult = 'Showing 01-12 of 139 Results'

const Shop = () => {
    const [GridList, setGridList] = useState(true)
    const [products, setProducts] = useState(data)


    //fiilter products based on category
    const [selectCategory, setSelectCategory] = useState('All')
    const menuItem = [...new Set(data.map(item => item.category))]

    const filteredItem = (currentCategory) => {
        const newItem = data.filter((item) => item.category === currentCategory)
        setSelectCategory(currentCategory)
        setProducts(newItem)
    }







    //pagination starts here 
    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 12;

    const indexOfLastProduct = currentPage * productsPerPage;

    const indexOfFristProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFristProduct, indexOfLastProduct)

    //function to change current page 
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    return (
        <div>
            <PageHeader title='Our Shop Page' currentPage='Shop' />

            <div className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                {/* layout and title here */}
                                <div className="shop-title d-flex flex-wrap justify-content-between">
                                    <p>{showResult} </p>
                                    <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                                        <a onClick={() => setGridList(!GridList)} className="grid">
                                            <i className='icofont-ghost'></i>
                                        </a>
                                        <a onClick={() => setGridList(!GridList)} className="list">
                                            <i className='icofont-listine-dots'></i>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <ProductCard GridList={GridList} products={currentProducts} />
                                </div>
                                <Pagination
                                    productsPerPage={productsPerPage}
                                    totalProducts={products.length}
                                    paginate={paginate}
                                    activePage={currentPage}
                                />
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <aside>
                                <Search products={products} GridList={GridList} />
                                <ShopCategory
                                    filteredItem={filteredItem}
                                    setItem={setProducts}
                                    menuItem={menuItem}
                                    setProducts={setProducts}
                                    selectCategory={selectCategory}

                                />
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

export default Shop;  