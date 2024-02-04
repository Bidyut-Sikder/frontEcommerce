import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';



const payPalImg = 'https://shorturl.at/buLOZ'
const visaCard = 'https://shorturl.at/uBCW8'
const CheckoutPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [show, setShow] = useState(false)
    const [activeTab, setActiveTab] = useState('visa')

    const handleTabChange = (tabId) => {
        setActiveTab(tabId)
    }

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)





    const from = location.state?.from?.pathname || "/"



    const handleOrderConfirm = (e) => {
        alert('Your order is placed successfully.')
        localStorage.removeItem('cart')
        navigate('/', { replace: true })
    }


    return (
        <div className='modalCard'>
            <Button variant='primary' onClick={handleShow} className='py-2' >Proceed to Checkout</Button>

            <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                className='modal fade'
                centered

            >
                <div className="modal-dialog p-4">
                    <h5 className='px-3 mb-3'> Select Your Payment Method</h5>

                    <div className="modal-content ">
                        <div className="modal-body ">
                            <div className="tabs mt-3">
                                <ul className="nav nav-tabs " id="myTab" role='tablist'>
                                    <li className='nav-item' role='presentation'>
                                        <Link
                                            href="#visa"
                                            className={`nav-link ${activeTab === 'visa' ? 'active' : ''}`}
                                            id='visa-tab'
                                            data-toggle='tab'
                                            role='tab'
                                            aria-controls='visa'
                                            aria-selected={activeTab === 'visa'}
                                            onClick={() => handleTabChange('visa')}

                                        >
                                            <img style={{ height: '42px' }} src={visaCard} width="80" alt="" />
                                        </Link>
                                    </li>

                                    <li className='nav-item' role='presentation'>
                                        <Link
                                            href="#paypal"
                                            className={`nav-link ${activeTab === 'paypal' ? 'active' : ''}`}
                                            id='paypal-tab'
                                            data-toggle='tab'
                                            role='tab'
                                            aria-controls='paypal'
                                            aria-selected={activeTab === 'paypal'}
                                            onClick={() => handleTabChange('paypal')}

                                        >
                                            <img style={{ height: '42px' }} src={payPalImg} width="80" alt="" />
                                        </Link>
                                    </li>
                                </ul>
                                {/* contents here  */}

                                <div className="tab-content" id="myTabContent">
                                    {/* visa content  */}
                                    <div
                                        id='visa'
                                        role='tabpanel'
                                        aria-labelledby='visa-tab'
                                        className={`tab-pane fade ${activeTab === 'visa' ? 'show active' : ""}`}>


                                        {/* visa tab content  */}
                                        <div className="mt-4 mx-4">
                                            <div className="text-center">
                                                <h5>Cradit Card</h5>
                                            </div>
                                            <div className="form mt-3">
                                                <div className="inputbox">

                                                    <input type="text" required name='name' id='name' className='form-control' />
                                                    <span>Cardholder's Name</span>
                                                </div>
                                                <div className="inputbox">

                                                    <input type="text" required min={1} max={999} name='number' id='number' className='form-control' />
                                                    <span>Card Number <i className='fa fa-eye'></i></span>
                                                </div>

                                                <div className="d-flex flex-row">
                                                    <div className="inputbox">

                                                        <input type="text" required name='name' id='name' className='form-control' />
                                                        <span>Expiration Date</span>
                                                    </div>
                                                    <div className="inputbox">

                                                        <input type="text" required min={1} max={999} name='number' id='number' className='form-control' />
                                                        <span>CVV <i className='fa fa-eye'></i></span>
                                                    </div>
                                                </div>

                                                <div className="py-1 pay">
                                                    <button onClick={handleOrderConfirm} className='btn btn-success btn-block'>Order Now</button>
                                                </div>


                                            </div>
                                        </div>








                                    </div>

                                    {/* paypal content  */}
                                    <div
                                        id='paypal'
                                        role='tabpanel'
                                        aria-labelledby='paypal-tab'
                                        className={`tab-pane fade ${activeTab === 'paypal' ? 'show active' : ""}`}>


                                        {/* paypal tab content  */}
                                        <div className="mt-4 mx-4">
                                            <div className="text-center">
                                                <h5>Paypal Account Info</h5>
                                            </div>
                                            <div className="form mt-3">
                                                <div className="inputbox">

                                                    <input type="text" required name='name' id='name' className='form-control' />
                                                    <span>Enter Your Email</span>
                                                </div>
                                                <div className="inputbox">

                                                    <input type="text" required min={1} max={999} name='number' id='number' className='form-control' />
                                                    <span>Your Name </span>
                                                </div>

                                                <div className="d-flex flex-row">

                                                    <div className="inputbox">
                                                        <input type="text" required name='name' id='name' className='form-control' />
                                                        <span>Extra Info</span>
                                                    </div>
                                                    <div className="inputbox">

                                                        <input type="text" required name='name' id='name' className='form-control' />
                                                        <span></span>
                                                    </div>
                                                </div>



                                                <div className="py-1 pay">
                                                    <button className='btn btn-success btn-block'>Add Paypal</button>
                                                </div>


                                            </div>

                                        </div>





                                    </div>


                                </div>

                                {/* payment disclaimer  */}
                                <p className='mb-3 px-4 p-Disclaimer'>Lorem ipsum dolor sit amet consectetur adipisicing elit. , iure optio eligendi?</p>


                            </div>
                        </div>
                    </div>
                </div>

            </Modal>
        </div>
    );
};

export default CheckoutPage;