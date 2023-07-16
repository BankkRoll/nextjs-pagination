import React, { useState, useEffect, useCallback } from "react";

// Constants for default values
const DEFAULT_COLOR = "#007bff";
const DEFAULT_SHAPE = "square";
const DEFAULT_BUTTON_COUNT = 5;
const DEFAULT_FIRST_TEXT = "First";
const DEFAULT_PREV_TEXT = "Prev";
const DEFAULT_NEXT_TEXT = "Next";
const DEFAULT_LAST_TEXT = "Last";

type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  onPageChange?: (page: number) => void;
  color?: string;
  shape?: "circle" | "square";
  visibleButtonCount?: number;
  showNextPrev?: boolean;
  showFirstLast?: boolean;
  onSuccess?: (page: number) => void;
  onError?: (error: Error) => void;
  customStyles?: React.CSSProperties;
  firstText?: React.ReactNode;
  prevText?: React.ReactNode;
  nextText?: React.ReactNode;
  lastText?: React.ReactNode;
  className?: string;
  buttonClassName?: string;
};

// Button component used for all the buttons in the pagination component
const Button: React.FC<{
  style: React.CSSProperties;
  onClick: () => void;
  disabled: boolean;
  className?: string;
  children: React.ReactNode;
}> = React.memo(({ style, onClick, disabled, className, children }) => (
  <button
    style={style}
    onClick={onClick}
    disabled={disabled}
    className={className}
  >
    {children}
  </button>
));

// Pagination component
const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange = () => {},
  color = DEFAULT_COLOR,
  shape = DEFAULT_SHAPE,
  visibleButtonCount = DEFAULT_BUTTON_COUNT,
  showNextPrev = false,
  showFirstLast = false,
  onSuccess = () => {},
  onError = () => {},
  customStyles = {},
  firstText = DEFAULT_FIRST_TEXT,
  prevText = DEFAULT_PREV_TEXT,
  nextText = DEFAULT_NEXT_TEXT,
  lastText = DEFAULT_LAST_TEXT,
  className = "",
  buttonClassName = "",
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [buttonNumbers, setButtonNumbers] = useState<number[]>([]);

  // Calculate total number of pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Calculate the button numbers to display
  useEffect(() => {
    // Calculate start and end page numbers
    let startPage = Math.max(
      1,
      currentPage - Math.floor(visibleButtonCount / 2),
    );
    let endPage = startPage + visibleButtonCount - 1;
    // Adjust start and end page if they go beyond the total number of pages
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - visibleButtonCount + 1);
    }
    // Generate button numbers
    const newButtonNumbers = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i,
    );
    setButtonNumbers(newButtonNumbers);
  }, [currentPage, totalPages, visibleButtonCount]);

  // Style for the buttons
  const buttonStyle = {
    color: "white",
    backgroundColor: color,
    borderRadius: shape === "circle" ? "50%" : "0",
    padding: "0.5rem 1rem",
    margin: "0 0.2rem",
    border: "none",
    cursor: "pointer",
    ...customStyles,
  };

  // Callback function to handle page changes
  const handlePageChange = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
        onPageChange(page);
        onSuccess(page);
      } else {
        onError(new Error("Page number is out of range"));
      }
    },
    [totalPages, onPageChange, onSuccess, onError],
  );

  // Render the pagination component
  return (
    <div className={className}>
      {showFirstLast ? (
        <Button
          style={buttonStyle}
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className={buttonClassName}
        >
          {firstText}
        </Button>
      ) : null}
      {showNextPrev ? (
        <Button
          style={buttonStyle}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={buttonClassName}
        >
          {prevText}
        </Button>
      ) : null}
      {buttonNumbers.map((number) => (
        <Button
          key={number}
          style={buttonStyle}
          onClick={() => handlePageChange(number)}
          disabled={false}
          className={buttonClassName}
        >
          {number}
        </Button>
      ))}
      {showNextPrev ? (
        <Button
          style={buttonStyle}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={buttonClassName}
        >
          {nextText}
        </Button>
      ) : null}
      {showFirstLast ? (
        <Button
          style={buttonStyle}
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          className={buttonClassName}
        >
          {lastText}
        </Button>
      ) : null}
    </div>
  );
};

export default Pagination;
