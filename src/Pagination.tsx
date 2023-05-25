// Pagination.tsx
import React, { useState, useEffect } from 'react';

type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  color?: string;
  shape?: 'circle' | 'square';
  buttonCount?: number;
  showNextPrev?: boolean;
  showFirstLast?: boolean;
  onPageChange?: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  color = '#007bff',
  shape = 'square',
  buttonCount = 5,
  showNextPrev = false,
  showFirstLast = false,
  onPageChange = () => {},
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [buttonNumbers, setButtonNumbers] = useState<number[]>([]);

  useEffect(() => {
    let startPage = Math.max(1, currentPage - Math.floor(buttonCount / 2));
    let endPage = startPage + buttonCount - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - buttonCount + 1);
    }

    const newButtonNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      newButtonNumbers.push(i);
    }

    setButtonNumbers(newButtonNumbers);
  }, [currentPage, totalPages, buttonCount]);

  const buttonStyle = {
    color: 'white',
    backgroundColor: color,
    borderRadius: shape === 'circle' ? '50%' : '0',
    padding: '0.5rem 1rem',
    margin: '0 0.2rem',
    border: 'none',
    cursor: 'pointer',
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      onPageChange(page);
    }
  };

  return (
    <div>
      {showFirstLast && (
        <button
          style={buttonStyle}
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          First
        </button>
      )}
      {showNextPrev && (
        <button
          style={buttonStyle}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
      )}
      {buttonNumbers.map((number) => (
        <button
          key={number}
          style={buttonStyle}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </button>
      ))}
      {showNextPrev && (
        <button
          style={buttonStyle}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      )}
      {showFirstLast && (
        <button
          style={buttonStyle}
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          Last
        </button>
      )}
    </div>
  );
};

export default Pagination;