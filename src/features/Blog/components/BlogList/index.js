import React from 'react';
import './BlogList.scss'
import { Link, useRouteMatch } from 'react-router-dom';
BlogList.propTypes = {

};

function BlogList(props) {
    const { blogs } = props;
    const match = useRouteMatch();

    return (
        <section className="list">
            <div className="container">
                <div className="row">
                    <ul className="list-unstyled">
                        {blogs.map((blog, index) => (
                            <Link to={`${match.url}/${blog.id}`} key={index} className="list__link">
                                <li className="media mb-5" >
                                    <img src={blog.image} className="mr-3 list__image" alt={blog.title} />
                                    <div className="media-body">
                                        <h5 className="mt-0 mb-1">{blog.title}</h5>
                                        {blog.content}
                                    </div>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

    );
}

export default BlogList;