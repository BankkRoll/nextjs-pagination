import React, { useState, useEffect, useCallback } from 'react';

type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  color?: string;
  shape?: 'circle' | 'square';
  buttonCount?: number;
  showNextPrev?: boolean;
  showFirstLast?: boolean;
  onPageChange?: (page: number) => void;
  onSuccess?: (page: number) => void;
  onError?: (error: Error) => void;
  customStyles?: React.CSSProperties;
};

const Button: React.FC<{
  style: React.CSSProperties;
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}> = React.memo(({ style, onClick, disabled, children }) => (
  <button style={style} onClick={onClick} disabled={disabled}>
    {children}
  </button>
));

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  color = '#007bff',
  shape = 'square',
  buttonCount = 5,
  showNextPrev = false,
  showFirstLast = false,
  onPageChange = () => {},
  onSuccess = () => {},
  onError = () => {},
  customStyles = {},
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
    ...customStyles,
  };

  const handlePageChange = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
        onPageChange(page);
        onSuccess(page);
      } else {
        onError(new Error('Page number is out of range'));
      }
    },
    [totalPages, onPageChange, onSuccess, onError]
  );

  return (
    <div>
      {showFirstLast && (
        <Button
          style={buttonStyle}
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          First
        </Button>
      )}
      {showNextPrev && (
        <Button
          style={buttonStyle}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </Button>
      )}
      {buttonNumbers.map((number) => (
        <Button
          key={number}
          style={buttonStyle}
          onClick={() => handlePageChange(number)}
          disabled={false}
        >
          {number}
        </Button>
      ))}
      {showNextPrev && (
        <Button style={buttonStyle}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      )}
      {showFirstLast && (
        <Button
          style={buttonStyle}
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          Last
        </Button>
      )}
    </div>
  );
};

export default Pagination;