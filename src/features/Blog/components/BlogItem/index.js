import React from 'react';
import { Link } from 'react-router-dom';
import './BlogItem.scss'

function BlogItem(props) {
    const { blog } = props;

    return (
        <div className="container">
            <div className="blog-control pt-3">
                <Link to="/blog" className="blog-control__link">Back</Link>
            </div>
            <div className="blog-content">
                <p>{blog.content}</p>
            </div>

        </div>
    );
}

export default BlogItem;