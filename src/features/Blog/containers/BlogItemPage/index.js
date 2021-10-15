import { unwrapResult } from '@reduxjs/toolkit';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import Banner from '../../../../components/Banner';
import NotFound from '../../../../components/NotFound';
import { getBlogItem } from '../../blogSlice';
import BlogItem from '../../components/BlogItem'
import Loading from '../../../../components/Loading';

function BlogItemPage(props) {
    const match = useRouteMatch();
    const {blogId} = match.params

    const isLoading = useSelector(state => state.blogs.isLoading);
    const blog = useSelector(state => state.blogs.item);

    const [notFound, setNotFound] = useState(false);
    const [message, setMessage] = useState('');
    
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchBlogItem = async () => {
            if(blogId){
                try{
                    const actionResult = await dispatch(getBlogItem(blogId));
                    const blogItem = unwrapResult(actionResult);
                } catch(error){
                    setMessage(error.message);
                    setNotFound(true);
                }
            }
        }
        fetchBlogItem();
    }, []);

    if(isLoading){
        return (
            <Loading />
        )
    }

    if(notFound){
        return <NotFound content={message} />
    }

    return (
        <div className="blog-item">
            <Banner title={blog.title} backgroundUrl={blog.image} />
            <BlogItem blog={blog} />
        </div>
    );
}

export default BlogItemPage;