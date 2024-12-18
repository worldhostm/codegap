'use client'

// React Pagination Component
import React from 'react';

interface PaginationProps {
  totalItems: number; // Total number of items
  itemsPerPage: number; // Items per page
  currentPage: number; // Current active page
  onPageChange: (page: number) => void; // Callback when page changes
}

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
} : PaginationProps){
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          style={{
            margin: '0 5px',
            padding: '5px 10px',
            backgroundColor: i === currentPage ? '#007bff' : '#f4f4f4',
            color: i === currentPage ? '#fff' : '#000',
            border: '1px solid #ddd',
            borderRadius: '3px',
            cursor: 'pointer',
          }}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          margin: '0 5px',
          padding: '5px 10px',
          backgroundColor: '#f4f4f4',
          border: '1px solid #ddd',
          borderRadius: '3px',
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
        }}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{
          margin: '0 5px',
          padding: '5px 10px',
          backgroundColor: '#f4f4f4',
          border: '1px solid #ddd',
          borderRadius: '3px',
          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
        }}
      >
        Next
      </button>
    </div>
  );
};

// Example usage
// import Pagination from './Pagination';
// const [currentPage, setCurrentPage] = React.useState(1);
// const itemsPerPage = 10;
// const totalItems = 100;

// <Pagination
//   totalItems={totalItems}
//   itemsPerPage={itemsPerPage}
//   currentPage={currentPage}
//   onPageChange={(page) => setCurrentPage(page)}
// />;
