import { unwrapResult } from '@reduxjs/toolkit';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../../../../components/Banner';
import { getAllBlog } from '../../blogSlice';
import BlogList from '../../components/BlogList';
import TaskControl from '../../components/TaskControl';
import Pagination from '../../components/TaskControl/Pagination';
import NotFound from '../../../../components/NotFound';
import Loading from '../../../../components/Loading';

function BlogListPage(props) {
    const isLoading = useSelector(state => state.blogs.isLoading);
    const keyword = useSelector(state => state.blogs.key);
    const sortValue = useSelector(state => state.blogs.sortValue);
    var blogs = useSelector(state => state.blogs.blogList);

    const [currentPage, setCurrentPage] = useState(1);
    const [blogsPerPage] = useState(10);
    const [notFound, setNotFound] = useState(false);
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchBlogList = async () => {
            try {
                const actionResult = await dispatch(getAllBlog());
                const blogList = unwrapResult(actionResult);
            } catch (error) {
                console.log('Failed to fetch blog list: ', error);
                setNotFound(true);
                setMessage(error.message);
            }
        }
        fetchBlogList()
    }, [])

    if (keyword) {
        blogs = blogs.filter((blog) => {
            return blog.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
        })
    }

    if (sortValue === 1) {
        blogs = [...blogs];
        blogs.sort((a, b) => {
            if (a.title > b.title) return 1;
            else if (a.title < b.title) return -1;
            else return 0;
        })
    }
    else if (sortValue === -1) {
        blogs = [...blogs];
        blogs.sort((a, b) => {
            if (a.title < b.title) return 1;
            else if (a.title > b.title) return -1;
            else return 0;
        })
    }

    if(isLoading){
        return(
            <Loading />
        )
    }

    if(notFound){
        return(
            <NotFound content={message} />
        )
    }

    const indexOfLastPost = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastPost - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="blog-list">
            <Banner title="Welcome to Blog 🥳 !" />
            <TaskControl />
            {isLoading === false && <BlogList blogs={currentBlogs} />}
            <Pagination blogsPerPage={blogsPerPage} totalBlogs={blogs.length} paginate={paginate} currentPage={currentPage} />
        </div>
    );
}

export default BlogListPage;