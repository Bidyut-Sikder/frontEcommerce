import React from 'react';
import PageHeader from '../components/PageHeader';
import GoogleMap from '../components/GoogleMap';



const subTitle = "Get in touch with us";
const title = "We're Always Eager To Hear From You!";
const conSubTitle = "Get in touch with Contact us";
const conTitle =
    "Fill The Form Below So We Can Get To Know You And Your Needs Better.";
const btnText = "Send our Message";

const contactList = [
    {
        imgUrl: "https://github.com/Bidyut-Sikder/frontEcommerce/blob/master/src/assets/images/icon/01.png?raw=true",
        imgAlt: "contact icon",
        title: "Office Address",
        desc: "1201 park street, Fifth Avenue",
    },
    {
        imgUrl: "https://github.com/Bidyut-Sikder/frontEcommerce/blob/master/src/assets/images/icon/02.png?raw=true",
        imgAlt: "contact icon",
        title: "Phone number",
        desc: "+22698 745 632,02 982 745",
    },
    {
        imgUrl: "https://github.com/Bidyut-Sikder/frontEcommerce/blob/master/src/assets/images/icon/03.png?raw=true",
        imgAlt: "contact icon",
        title: "Send email",
        desc: "admin@shopcart.com",
    },
    {
        imgUrl: "https://github.com/Bidyut-Sikder/frontEcommerce/blob/master/src/assets/images/icon/04.png?raw=true",
        imgAlt: "contact icon",
        title: "Our website",
        desc: "www.shopcart.com",
    },
];

const Contact = () => {
    return (
        <div>
            <PageHeader title={'Get In Touch With Us'} currentPage={'Contact Us'} />

            <div className="map-address-section padding-tb section-bg">
                <div className="container">
                    <div className="section-header text-center">
                        <span className='subtitle'>{subTitle}</span>
                        <h2 className='title'>{title}</h2>
                    </div>

                    <div className="section-wrapper">
                        <div className="row flex-row-reverse">
                            <div className="col-xl-4 col-lg-5 col-12">
                                <div className="contact-wrapper">
                                    {
                                        contactList.map((item, i) => (
                                            <div key={i} className='contact-item'>
                                                <div className="contact-thumb">
                                                    <img src={item.imgUrl} alt="bidyut" />
                                                </div>
                                                <div className='contact-content'>
                                                    <h6>{item.title}</h6>
                                                    <p>{item.desc}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-7 col-12">
                                <GoogleMap />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-section padding-tb">
                <div className="container">
                    <div className="section-header text-center">
                        <span className='subtitle'>{conSubTitle}</span>
                        <h2 className='title'>{conTitle}</h2>
                    </div>

                    <div className="section-wrapper">
                        <form action="" className='contact-form'>

                            <div className="form-group">
                                <input type="text" placeholder='Your Name *' name='name' id='name' />
                            </div>

                            <div className="form-group">
                                <input type="email" placeholder='Your Email *' name='email' id='email' />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder='Phone Number *' name='number' id='number' />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder='Subject' name='subject' id='subject' />
                            </div>

                            <div className="form-group w-100">
                                <textarea placeholder='Your Message' name="message" id="message" rows="8"></textarea>
                            </div>

                            <div className="form-group ">
                                <button  type='submit' className='lab-btn'><span>{btnText}</span></button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default Contact;

