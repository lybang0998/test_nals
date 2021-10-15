import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onSearch, onSort } from '../../../blogSlice';

function Search(props) {
    const [keyword, setKeyword] = useState('');
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setKeyword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (keyword) {
            setError(false);
            dispatch(onSearch(keyword));
        } else {
            setError(true);
        }
    }

    const handleClickReset = () => {
        dispatch(onSort(null));
        dispatch(onSearch(''));
    }

    return (
        <div className="col-sm-12 col-md-10">
            {error && (
                <div className="alert alert-warning" role="alert">
                    Please type you keyword !
                </div>
            )}
            <form className="needs-validation">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button className="input-group-text" type="reset" value={keyword} onClick={handleClickReset}>Reset</button>
                    </div>
                    <input type="text" className="form-control" required onChange={(text) => handleChange(text)} placeholder="Please type your search ..." />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" onClick={e => handleSubmit(e)}>Search</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Search;