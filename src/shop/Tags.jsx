import React from 'react';
import { Link } from 'react-router-dom';



const title = 'Most Popular Tags'
const tagsList = [
    {
        link: "#",
        text: "envato",
    },
    {
        link: "#",
        text: "themeforest",
    },
    {
        link: "#",
        text: "codecanyon",
    },
    {
        link: "#",
        text: "videohive",
    },
    {
        link: "#",
        text: "audiojungle",
    },
    {
        link: "#",
        text: "3docean",
    },
    {
        link: "#",
        text: "envato",
    },
    {
        link: "#",
        text: "themeforest",
    },
    {
        link: "#",
        text: "codecanyon",
    },
];

const Tags = () => {
    return (
        <div className="widget widget-tags">
            <div className="widget-header">
                <h5 className='title'> {title}</h5>
            </div>
            <ul className="widget-wrapper">
                {
                    tagsList.map((item, i) => {
                        return (
                            <li key={i} > <Link to={item.link}   >{item.text}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Tags;