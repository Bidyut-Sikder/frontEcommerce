import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import delImage from '.././assets/images/shop/del.png'
import CheckoutPage from './CheckoutPage';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {

        const storedCartItems = JSON.parse(localStorage.getItem('cart'))
        setCartItems(storedCartItems)

    }, [])
    //calculate price

    const calculateTotalPrice = (item) => {
        return item.price * item.quantity
    }

    //handle quantity increase 
    const handleIncrease = (item) => {
        item.quantity += 1;
        setCartItems([...cartItems])

        //updating local storage 
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }
    //handle quantity decrease 
    const handleDecrease = (item) => {
        if (item.quantity > 1) {

            item.quantity -= 1;
            setCartItems([...cartItems])

            //updating local storage 


            localStorage.setItem('cart', JSON.stringify(cartItems))
        }

    }
    //handleItem delete
    const handleDelete = (item) => {
        const data = cartItems.filter((cartItem) => cartItem.id !== item.id)

        setCartItems(data)
        updateLocalStorage(data)
        // localStorage.setItem("cart", JSON.stringify(data))
    }
    const updateLocalStorage = (cart) => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    const cartSubtotal = cartItems !== null ? cartItems.reduce((prev, item) => prev + calculateTotalPrice(item), 0) : cartItems


    const orderTotal = cartSubtotal;

    return (
        <div>
            <PageHeader title={'Shop Cart'} currentPage={'Cart Page'} />


            <div className="shop-cart padding-tb">
                <div className="container">
                    <div className="section-wrapper">
                        {/* cart top  */}
                        <div className="cart-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th className='cat-product'>Product</th>
                                        <th className='cat-price'>Price</th>
                                        <th className='cat-quantity'>Quantity</th>
                                        <th className='cat-toprice'>Total</th>
                                        <th className='cat-edit'>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItems && cartItems.map((item, i) => (
                                            <tr key={i}>
                                                <td className='product-item cat-product'>
                                                    <div className="p-thumb">
                                                        <Link to={'/shop'} ><img src={item.img} alt="bidyut" /> </Link>
                                                    </div>
                                                    <div className="p-thumb">
                                                        <Link to={'/shop'} >{item.name}</Link>
                                                    </div>
                                                </td>
                                                <td className='cat-price'>$ {item.price}</td>

                                                <td className='cat-quantity'>
                                                    <div className="cart-plus-minus">
                                                        <div className="dec qtybutton" onClick={() => handleDecrease(item)}>-</div>
                                                        <input type="text" className="text-bold cart-plus-minus-box" placeholder={item.quantity} name="qtybutton" />

                                                        <div className="inc qtybutton" onClick={() => handleIncrease(item)}>+</div>


                                                    </div>

                                                </td>
                                                <td className='cat-toprice'>{calculateTotalPrice(item)}</td>
                                                <td className='cat-edit' >
                                                    <div onClick={() => handleDelete(item)}>
                                                        <img src={delImage} alt="" />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>


                        {/* cart botton  */}

                        {/* checkout box  */}

                        <div className="cart-bottom">
                            <div className="cart-checkout-box">
                                <form action="" className='coupon'>
                                    <input type="text" className='cart-page-input-text' placeholder='Coupon code...' name='coupon' id='coupon' />
                                    <input type='submit' value='Apply Coupon' />
                                </form>
                                <form action="" className='cart-checkout'>
                                    <input type='submit' value='Update Cart' />
                                    <div>
                                        <CheckoutPage />
                                    </div>
                                </form>
                            </div>

                            {/* shiping box  */}
                            <div className="shiping-box">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="calculate-shiping">
                                            <h3>Calculate Shiping</h3>
                                            {/* select country  */}
                                            <div className="outline-select">
                                                <select name="" id="">
                                                    <option value="uk">United Kingdom(UK)</option>
                                                    <option value="bd">Bangladesh</option>
                                                    <option value="pakistan">Pakistan</option>
                                                    <option value="india">India</option>
                                                    <option value="nepal">Nepal</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className="icofont-rounded-down"></i>
                                                </span>
                                            </div>

                                            {/* select city  */}
                                            <div className="outline-select shiping-select">
                                                <select >
                                                    <option value="dhaka">Dhaka</option>
                                                    <option value="tokyo">Tokyo</option>
                                                    <option value="islamabad">Islamabad</option>
                                                    <option value="dheli">Delhi</option>
                                                    <option value="katmumdu">Katmumdu</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className="icofont-rounded-down"></i>
                                                </span>
                                            </div>
                                            <input type="text" name='postcode' className='cart-page-input-text' id='postcode' placeholder='Postcode/ZIP*' />
                                            <button type='submit'>Update Address</button>

                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">

                                        <div className="cart-overview">
                                            <h3>Cart Total</h3>
                                            <ul className='lab-ul'>
                                                <li>
                                                    <span className='pull-left'>Cart Subtal</span>
                                                    <p className='pull-right'>{cartSubtotal}</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>Shiping and handling</span>
                                                    <p className='pull-right'>Free shipping</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>Order Total</span>
                                                    <p className='pull-right'>{orderTotal && orderTotal.toFixed(2)}</p>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>












        </div>
    );
};

export default CartPage;
















