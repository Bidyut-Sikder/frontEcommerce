import React from 'react';
import data from '../products.json'

const ShopCategory = ({ filteredItem, setItem, menuItem, setProducts, selectCategory }) => {

    return (
        <>

            <div className='widget-header'>
                <h5>All Categories</h5>
            </div>
            <div>
                <button onClick={() => setProducts(data)} className={selectCategory === 'All' ? 'bg-warning' : ''}>All</button>
                {
                    menuItem.map((item, i) => {
                        return (
                            <button
                                className={`m-2 ${selectCategory === item ? 'bg-warning' : ''}`}
                                key={i}
                                onClick={() => filteredItem(item)}
                            >

                                {item}
                            </button>
                        )
                    })
                }
            </div>
        </>
    );
};

export default ShopCategory;