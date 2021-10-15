import React from 'react';
import './Loading.scss'

function Loading(props) {
    return (
        <section className="loading-page">
            <div className="wrapper">
                <span className="circle circle-1"></span>
                <span className="circle circle-2"></span>
                <span className="circle circle-3"></span>
                <span className="circle circle-4"></span>
                <span className="circle circle-5"></span>
                <span className="circle circle-6"></span>
                <span className="circle circle-7"></span>
                <span className="circle circle-8"></span>
            </div>
        </section>
    );
}

export default Loading;