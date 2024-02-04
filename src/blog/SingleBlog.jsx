import React, { useState } from 'react';
import bloglist from '../assets/utilis/blogdata'
import { Link, useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Tags from '../shop/Tags';
import PopularPosts from '../shop/PopularPosts';



const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        siteLink: '#',
        className: 'pinterest',
    },
]

const SingleBlog = () => {
    const [blog, setBlog] = useState(bloglist)
    const { id } = useParams()
    console.log(id)

    const result = bloglist.filter((item) => item.id === parseInt(id))



    return (
        <div>
            <PageHeader title={'Single Blog Page'} currentPage={'Blog / Blog Details'} />

            <div className="blog-section blog-single padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="section-wrapper">
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                                <div className="post-inner">
                                                    {
                                                        result.map((item, i) => (
                                                            <div key={item.id}>
                                                                <div className="post-thumb">
                                                                    <img src={item.imgUrl} alt="bidyut" className='w-100' />
                                                                </div>
                                                                <div className="post-content">
                                                                    <h3>{item.title}</h3>
                                                                    <div className="meta-post">
                                                                        <ul className="lab-ul">
                                                                            {
                                                                                item.metaList.map((val, i) => (
                                                                                    <li key={i}>  <i className={val.iconName} > {val.text}</i></li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>

                                                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsum tempora est quibusdam vitae deserunt? Architecto earum iusto nostrum minima tempora quaerat optio repudiandae nisi! Libero tenetur corrupti nesciunt corporis esse voluptates. Blanditiis saepe recusandae nesciunt eligendi odit minus quos.</p>
                                                                    <blockquote>
                                                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsa eius ipsum nam eum fugiat temporibus repellendus aspernatur incidunt natus!</p>
                                                                        <cite>
                                                                            <Link to={'#'}>...Bidyut Sikder</Link>
                                                                        </cite>
                                                                    </blockquote>
                                                                    <p>Lorem ipsum dolor, tatem repudiandae veniam itaque molestiae cupiditate possimus! Quaerat, ipsum libero. Dolor harum voluptates dolorum inventore atque voluptatibus! A, doloremque. Cumque assumenda eaque quae ipsa nam accusamus, voluptatum et quidem.</p>
                                                                    <img src="/src/assets/images/blog/single/01.jpg" alt="bidyut" />
                                                                    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, tempore. consectetur adipisicing elit. Harum consequuntur, magnam doloribus optio blanditiis necessitatibus enim est aperiam autem excepturi!</p>

                                                                    <div className="video-thumb">
                                                                        <img src="/src/assets/images/blog/single/02.jpg" alt="bidyut" />
                                                                        <a target='blank' className='video-button popup' href="https://www.youtube.com/watch?v=FP8-VAH3zi0"><i className='icofont-ui-play'></i></a>
                                                                    </div>

                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam libero, quos cupiditate eaque expedita aspernatur incidunt nihil suscipit voluptates cum.</p>

                                                                    <div className="tags-section">
                                                                        <ul className="tags lab-ul">
                                                                            <li>
                                                                                <Link to={''} href="">Agency</Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link to={''} href="">Business</Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link to={''} href="">Personal</Link>
                                                                            </li>

                                                                        </ul>

                                                                        {/* social icons  */}
                                                                        <ul className="lab-ul social-icons">
                                                                            {
                                                                                socialList.map((item, i) => (
                                                                                    <li key={i}>
                                                                                        <Link to={''} className={item.className}> <i className={item.iconName}></i>  </Link>
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>


                                                                    </div>

                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                                <div className="navigations-part">
                                                    <div className="left">
                                                        <Link to={''} className='prev'>
                                                            <i className='icofont-double-left'></i> Privios Blog
                                                        </Link>
                                                        <Link to={''} className='title'>
                                                            Evisculate Parallel Process via Technica Sound Models Authoritative
                                                        </Link>
                                                    </div>
                                                    <div className="right">
                                                        <Link to={''} className='prev'>
                                                            Next Blog <i className='icofont-double-right'></i>
                                                        </Link>
                                                        <Link to={''} className='title'>
                                                            Evisculate Parallel Process via Technica Sound Models Authoritative
                                                        </Link>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <aside>
                                <Tags />
                                <PopularPosts />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleBlog;