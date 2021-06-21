import React from 'react';

const Pagination = ({goPrev, goNext, currentPage, totalItems}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage * 3 >= totalItems;

  return (
    <div className="pagination">
      <button className="btn" disabled={isFirstPage} onClick={goPrev}>
        {!isFirstPage ? '←' : ''}
      </button>

      <span className="pagination__page">{currentPage}</span>

      <button className="btn" disabled={isLastPage} onClick={goNext}>
        {!isLastPage ? '→' : ''}
      </button>
    </div>
  );
};

export default Pagination;