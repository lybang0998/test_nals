import React from 'react';
import './NotFound.scss';
import PropTypes from 'prop-types';

NotFound.propTypes = {
    content : PropTypes.string,
};

NotFound.defautlProps = {
    content: "The page you requested was not found."
}

function NotFound(props) {
    const {content} = props;
    return (
        <div className="d-flex justify-content-center align-items-center" id="main">
            <h1 className="mr-3 pr-3 align-top border-right inline-block align-content-center">404</h1>
            <div className="inline-block align-middle">
                <h2 className="font-weight-normal lead" id="desc">{content}</h2>
            </div>
        </div>
    );
}

export default NotFound;