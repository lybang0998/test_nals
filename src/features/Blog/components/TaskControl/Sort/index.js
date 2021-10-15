import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onSort } from '../../../blogSlice';
import './Sort.scss';

function Sort(props) {
    const valueSort = useSelector(state => state.blogs.sortValue);
    const dispatch = useDispatch();

    const handleClickSort = (value) => {
        dispatch(onSort(value));
    }
    
    return (
        <div className="col-sm-12 col-md-2 text-center">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle sort-button" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <span className={valueSort === 1 ? "dropdown-item sort-dropdown__selected" : "dropdown-item"} onClick={() => handleClickSort(1)} href="#">Sort Ascending (A-Z) </span>
                    <span className={valueSort === -1 ? "dropdown-item sort-dropdown__selected" : "dropdown-item"} onClick={() => handleClickSort(-1)} href="#">Sort Descending (Z-A) </span>
                </div>
            </div>
        </div>

    );
}

export default Sort;