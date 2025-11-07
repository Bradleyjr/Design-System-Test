import React from 'react';
import './Pagination.css';

export interface PaginationProps {
  /** Total number of pages */
  totalPages: number;
  /** Current page (1-indexed) */
  currentPage: number;
  /** Callback when page changes */
  onPageChange: (page: number) => void;
  /** Number of page buttons to show around current page */
  siblingCount?: number;
  /** Show first/last page buttons */
  showFirstLast?: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  siblingCount = 1,
  showFirstLast = true,
}) => {
  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];
    const leftSibling = Math.max(currentPage - siblingCount, 1);
    const rightSibling = Math.min(currentPage + siblingCount, totalPages);

    const showLeftEllipsis = leftSibling > 2;
    const showRightEllipsis = rightSibling < totalPages - 1;

    // Always show first page
    pages.push(1);

    // Show left ellipsis
    if (showLeftEllipsis) {
      pages.push('...');
    } else if (leftSibling === 2) {
      pages.push(2);
    }

    // Show middle pages
    for (let i = leftSibling; i <= rightSibling; i++) {
      if (i !== 1 && i !== totalPages) {
        pages.push(i);
      }
    }

    // Show right ellipsis
    if (showRightEllipsis) {
      pages.push('...');
    } else if (rightSibling === totalPages - 1) {
      pages.push(totalPages - 1);
    }

    // Always show last page if more than 1 page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();
  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return (
    <nav className="ds-pagination" role="navigation" aria-label="Pagination">
      {showFirstLast && (
        <button
          className="ds-pagination__button"
          onClick={() => onPageChange(1)}
          disabled={!canGoPrevious}
          aria-label="First page"
        >
          «
        </button>
      )}

      <button
        className="ds-pagination__button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!canGoPrevious}
        aria-label="Previous page"
      >
        ‹
      </button>

      {pageNumbers.map((page, index) => {
        if (page === '...') {
          return (
            <span key={`ellipsis-${index}`} className="ds-pagination__ellipsis">
              ...
            </span>
          );
        }

        const pageNum = page as number;
        const isActive = pageNum === currentPage;

        return (
          <button
            key={pageNum}
            className={`ds-pagination__button ${isActive ? 'ds-pagination__button--active' : ''}`}
            onClick={() => onPageChange(pageNum)}
            aria-label={`Page ${pageNum}`}
            aria-current={isActive ? 'page' : undefined}
          >
            {pageNum}
          </button>
        );
      })}

      <button
        className="ds-pagination__button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!canGoNext}
        aria-label="Next page"
      >
        ›
      </button>

      {showFirstLast && (
        <button
          className="ds-pagination__button"
          onClick={() => onPageChange(totalPages)}
          disabled={!canGoNext}
          aria-label="Last page"
        >
          »
        </button>
      )}
    </nav>
  );
};
