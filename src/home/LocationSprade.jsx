import React from 'react';
import { Link } from 'react-router-dom';



const title = 'More Then 60,000 Customers';

const desc = "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us from Africa',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
]


const LocationSprade = () => {
    return (
        <div className="clients-section style-2 padding-tb">
            <div className="container">

                <div className="section-header text-center">
                    <h2 className="title">{title}</h2>
                    <p>{desc}</p>
                </div>

                {/* main content */}
                <div className="section-wrapper">
                    <div className="clients">
                        {
                            clientsList.map((item, i) => {
                                return (
                                    <div key={i} className="client-list">
                                        <Link className='client-content' to={'/sign-up'}>
                                            <span>{item.text}</span>
                                        </Link>
                                        <div className="client-thumb">
                                            <img src={item.imgUrl} alt="img" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>




        </div>
    );
};

export default LocationSprade;





// .client-thumb {
//     img {
//         opacity: 1;
//     }
//     &::after, &::before {
//         -webkit-animation: circle-2 1.05s infinite;
//         -moz-animation: circle-2 1.05s infinite;
//         -ms-animation: circle-2 1.05s infinite;
//         -o-animation: circle-2 1.05s infinite;
//         animation: circle-2 1.05s infinite;
//     }
// }

