import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css'
import Header from './components/Header/';
import Loading from './components/Loading';
import NotFound from './components/NotFound'
import Thanks from './features/Thanks';

const Blog = React.lazy(() => import('./features/Blog'))

function App(props) {
    return (
        <div className="blog">
            <Suspense fallback={<Loading />}>
                <BrowserRouter>
                    <Header />

                    <Switch>
                        <Redirect exact from="/" to="/thanks" />

                        <Route  path="/blog" component={Blog}/>
                        <Route path="/thanks" component={Thanks}/>
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </Suspense>

        </div>
    );
}

export default App;