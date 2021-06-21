import React from 'react';
import { connect } from 'react-redux';

const Pagination = ({ goPrev, goNext, currentPage, totalItems }) => {
  const isFirstPage = currentPage === 0;
  const isLastPage = (currentPage + 1) * 3 >= totalItems;

  return (
    <div className="pagination">
      <button className="btn" disabled={isFirstPage} onClick={goPrev}>
        {!isFirstPage ? '←' : ''}
      </button>

      <span className="pagination__page">{currentPage + 1}</span>

      <button className="btn" disabled={isLastPage} onClick={goNext}>
        {!isLastPage ? '→' : ''}
      </button>
    </div>
  );
};

// const mapState = state => {
//   return {
//     users: state
//   };
// };

// const connector = connect(mapState);
// const ConnectedPagination = connector(Pagination);

// export default ConnectedPagination;
export default Pagination;
