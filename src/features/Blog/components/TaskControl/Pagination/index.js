import React, { useState } from 'react';

function Pagination(props) {
    const [currentPage, setCurrentPage] = useState(1);

    const { blogsPerPage, totalBlogs, paginate } = props;
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleClick = (e, number) => {
        e.preventDefault();
        setCurrentPage(number);
        paginate(number);
    }

    const handleClickControl = (e, cl) => {
        e.preventDefault();
        if (cl === 'prev') {
            if (currentPage > 1) {
                const pageNumber = currentPage - 1;
                setCurrentPage(pageNumber);
                paginate(pageNumber);
            }
        } else {
            if (currentPage < pageNumbers[pageNumbers.length - 1]) {
                const pageNumber = currentPage + 1
                setCurrentPage(pageNumber);
                paginate(pageNumber)
            }
        }
    }

    return (
        <section className="task-pagination">
            <nav aria-label="Page navigation pb-5">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <a className="page-link" href="!" onClick={e => handleClickControl(e, 'prev')}>Previous</a>
                    </li>
                    {pageNumbers.map((number, index) => (
                        <li className="page-item" key={index}>
                            <a className="page-link" href="!" onClick={(e) => handleClick(e, number)}>{number}</a>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === pageNumbers[pageNumbers.length - 1] ? "disabled" : ""}`}>
                        <a className="page-link" href="!#" onClick={e => handleClickControl(e, 'next')}>Next</a>
                    </li>
                </ul>
            </nav>
        </section>

    );
}

export default Pagination;