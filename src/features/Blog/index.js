import React from 'react';
import {Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import BlogItemPage from './containers/BlogItemPage';
import BlogListPage from './containers/BlogListPage';


function Blog(props) {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={match.url} component={BlogListPage} />
            <Route path={`${match.url}/:blogId`} component={BlogItemPage} />

            <Route component={NotFound}/>
        </Switch>
    );
}

export default Blog;