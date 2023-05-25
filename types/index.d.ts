import React from 'react';

declare namespace NextjsPagination {
  type PaginationProps = {
    totalItems: number;
    itemsPerPage: number;
    color?: string;
    shape?: 'circle' | 'square';
    buttonCount?: number;
    showNextPrev?: boolean;
    showFirstLast?: boolean;
    onSuccess?: (page: number) => void;
    onError?: (error: Error) => void;
    customStyles?: React.CSSProperties;
  };

  export const Pagination: React.FC<PaginationProps>;
}

export = NextjsPagination;
