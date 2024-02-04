import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Ratting from '../home/Ratting';
import ProductDescription from './ProductDescription';

const reviwtitle = "Add a Review";

const ReviewList = [
    {
        imgUrl: "/src/assets/images/instructor/01.jpg",
        imgAlt: "Client thumb",
        name: "Ganelon Boileau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/02.jpg",
        imgAlt: "Client thumb",
        name: "Morgana Cailot",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/03.jpg",
        imgAlt: "Client thumb",
        name: "Telford Bois",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/04.jpg",
        imgAlt: "Client thumb",
        name: "Cher Daviau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
];


const ReviewAndDescription = () => {
    const [reviewShow, setReviewShow] = useState(false)

    const formHandler = (e) => {
        e.preventDefault()

    }
    return (
        <>
            <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
                <li onClick={() => setReviewShow(!reviewShow)} className='desc'>Description</li>
                <li onClick={() => setReviewShow(!reviewShow)} className='rev'>Reviews</li>
            </ul>

            {/* description and review content  */}
            <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
                <div className="review-showing">
                    <ul className="content lab-ul">
                        {
                            ReviewList.map((review, i) => (
                                <li key={i}>
                                    <div className='post-thumb'>
                                        <img src={review.imgUrl} alt="" />
                                    </div>
                                    <div className="post-content">
                                        <div className="entry-meta">
                                            <div className="posted-on">
                                                <Link to={''}>{review.name} <br />
                                                    <Ratting />
                                                </Link>

                                                <p>{review.date}</p>

                                            </div>
                                        </div>
                                        <div className="entry-content">
                                            <p>{review.desc}</p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>

                    {/* add review field  */}
                    <div className="client-review">
                        <div className="review-form">
                            <div className="review-title">
                                <h5>{reviwtitle}</h5>
                            </div>
                            <form action="" className='row' onSubmit={formHandler} >
                                <div className="col-md-4 col-12">
                                    <input type="text" name='name' placeholder='Full Name *' />
                                </div>
                                <div className="col-md-4 col-12">
                                    <input type="text" name='name' placeholder='Your Email *' />
                                </div>
                                <div className="col-md-4 col-12">
                                    <div className="rating">
                                        <span className='me-2'>Your Rating </span>
                                        <Ratting />
                                    </div>
                                </div>
                                {/* textarea area  */}
                                <div className="col-md-12 col-12">
                                    <textarea name="message" id="message" rows="8" placeholder='Type Your Message'></textarea>
                                </div>

                                {/* //submit button  */}

                                <div className="col-12">
                                    <button className='default-button'>
                                        <span>Submit Review</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <ProductDescription />

            </div>
        </>
    );
};

export default ReviewAndDescription;