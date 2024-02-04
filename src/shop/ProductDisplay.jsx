import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const ProductDisplay = ({ item }) => {

    const { name, id, price, seller, ratingsCount, quantity, img } = item

    const [prequantity, setQuantity] = useState(quantity)
    const [coupon, setCoupon] = useState('')
    const [size, setSize] = useState('Select Size')
    const [color, setColor] = useState('Select Color')

    const sizeHandler = (e) => {
        setSize(e.target.value)
    }
    const colorHandler = (e) => {
        setColor(e.target.value)
    }

    const handleDecrese = () => {
        if (prequantity >= 1) {
            setQuantity(pre => pre - 1)
        }
    }
    const handleIncrease = () => {

        setQuantity(pre => pre + 1)

    }

    const formHandler = (e) => {
        e.preventDefault()
        const formData = {
            id: id,
            name: name,
            img: img,
            color: color,
            size: size,
            coupon: coupon,
            quantity: prequantity,
            price: price
        }
        const existingCart =JSON.parse(localStorage.getItem('cart')) || []
        const existingProductIndex = existingCart.findIndex(item => item.id === id)

        if (existingProductIndex !== -1) {
            existingCart[existingProductIndex].quantity += parseInt(prequantity)
        } else {
            existingCart.push(formData)
        }

        //updating localstorage 
          localStorage.setItem('cart', JSON.stringify(existingCart))

      //  console.log(JSON.stringify(existingCart))
        //console.log(existingProductIndex)

        //reseting form fields
        setColor('Select Color')
        setSize('Select Size')
        setCoupon('')
         setQuantity(0)
    }
    return (
        <div>
            <div>
                <h4>{name}</h4>
                <p className='rating'>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <span> {ratingsCount}</span>
                </p>
                <h4>${price}</h4>
                <h4>{seller}</h4>
            </div>

            {/* cart components  */}
            <div>
                <form action="" onSubmit={formHandler}>
                    <div className="select-product size">
                        <select name="" value={size} onChange={sizeHandler} id="">
                            <option value="">Select Size</option>
                            <option value="sm">SM</option>
                            <option value="md">MD</option>
                            <option value="lg">LG</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>

                        </select>
                        <i className='icofont-rounded-down'></i>

                    </div>
                    {/* // select color  */}
                    <div className="select-product color">
                        <select name="" value={color} onChange={colorHandler} id="">
                            <option value="">Select Color</option>
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blck">Black</option>
                            <option value="blue">Blue</option>
                            <option value="white">White</option>

                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>
                    {/* cart plus minus  */}

                    <div className="cart-plus-minus">
                        <div className="dec qtybutton" onClick={handleDecrese}>- </div>
                        <input type="text" onChange={(e) => setQuantity(parseInt(e.target.value))} className='cart-plus-minus-box' name='qtybutton' id='qtybutton' value={prequantity} />
                        <div className="inc qtybutton" onClick={handleIncrease} >+</div>
                    </div>
                    {/* //coupon code  */}
                    <div className="discount-code mb-2">
                        <input type="text" placeholder='Enter Discount Code ' onChange={(e) => setCoupon(e.target.value)} />
                    </div>
                    {/* botton section  */}
                    <button className='lab-btn' type='submit'>
                        <span>Add to Cart</span>
                    </button>
                    <Link to={'/cart-page'} className='lab-btn bg-primary' >
                        Check Out
                    </Link>
                </form>
            </div>


        </div>
    );
};

export default ProductDisplay;