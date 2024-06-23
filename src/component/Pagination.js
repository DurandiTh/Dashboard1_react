// import React, { useState } from 'react';

// function Pagination({ totalPages, currentPage, onPageChange }) {
//     const [pageNumber, setPageNumber] = useState(currentPage || 1); // Set initial page

//   const handlePageChange = (newPage) => {
//     if (newPage > 0 && newPage <= totalPages) {
//       setPageNumber(newPage);
//       onPageChange(newPage); // Call the provided callback
//     }
//   };

//   const renderPageNumbers = () => {
//     const pageRange = Math.ceil(totalPages / 5); // Adjust range based on desired page links
//     const startPage = Math.max(1, pageNumber - 2); // Dynamically adjust starting page
//     const endPage = Math.min(totalPages, pageNumber + 2); // Dynamically adjust ending page

//     const pageLinks = [];
//     for (let i = startPage; i <= endPage; i++) {
//       pageLinks.push(
//         <button
//           key={i}
//           className={`page-number ${i === pageNumber ? 'active' : ''}`}
//           onClick={() => handlePageChange(i)}
//         >
//           {i}
//         </button>
//       );
//     }

//     return pageLinks;
//   };

//   const firstPageButton = () => (
//     <button className="page-button" disabled={pageNumber === 1} onClick={() => handlePageChange(1)}>
//       &laquo; First
//     </button>
//   );

//   const prevPageButton = () => (
//     <button className="page-button" disabled={pageNumber === 1} onClick={() => handlePageChange(pageNumber - 1)}>
//       &#8249; Prev
//     </button>
//   );

//   const nextPageButton = () => (
//     <button className="page-button" disabled={pageNumber === totalPages} onClick={() => handlePageChange(pageNumber + 1)}>
//       Next &#8250;
//     </button>
//   );

//   const lastPageButton = () => (
//     <button className="page-button" disabled={pageNumber === totalPages} onClick={() => handlePageChange(totalPages)}>
//       Last &raquo;
//     </button>
//   );
//     return ( 
//         <div>
//             <div className="pagination">
//       {firstPageButton()}
//       {prevPageButton()}
//       {renderPageNumbers()}
//       {nextPageButton()}
//       {lastPageButton()}
//     </div>

//         </div>
//      );
// }

// export default Pagination;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChevronLeft,faChevronCircleRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Pagination({ totalPages, currentPage, onPageChange }) {
  const [pageNumber, setPageNumber] = useState(currentPage || 1); // Set initial page

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPageNumber(newPage);
      onPageChange(newPage); // Call the provided callback
    }
  };

  const renderPageNumbers = () => {
    const pageRange = Math.ceil(totalPages / 5); // Adjust range based on desired page links
    const startPage = Math.max(1, pageNumber - 2); // Dynamically adjust starting page
    const endPage = Math.min(totalPages, pageNumber + 2); // Dynamically adjust ending page

    const pageLinks = [];
    for (let i = startPage; i <= endPage; i++) {
      pageLinks.push(
        <button
          key={i}
          className={`page-number ${i === pageNumber ? 'active' : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return pageLinks;
  };

  const firstPageButton = () => (
    <button className="page-button" disabled={pageNumber === 1} onClick={() => handlePageChange(1)}>
      &laquo; First
    </button>
  );

  const prevPageButton = () => (
    <button className="page-button" disabled={pageNumber === 1} onClick={() => handlePageChange(pageNumber - 1)}>
      &#8249; Prev
    </button>
  );

  const nextPageButton = () => (
    <button className="page-button" disabled={pageNumber === totalPages} onClick={() => handlePageChange(pageNumber + 1)}>
      Next &#8250;
    </button>
  );

  const lastPageButton = () => (
    <button className="page-button" disabled={pageNumber === totalPages} onClick={() => handlePageChange(totalPages)}>
      Last &raquo;
    </button>
  );

  return (
    <div>
      <div className="pagination">
        {/* {firstPageButton()}
        {prevPageButton()} */}
         <FontAwesomeIcon icon={faChevronLeft} className="dropdown" />
        {renderPageNumbers()}
        <FontAwesomeIcon icon={faChevronRight} className="dropdown" />
        {/* {nextPageButton()}
        {lastPageButton()} */}
      </div>
    </div>
  );
}

export default Pagination;
