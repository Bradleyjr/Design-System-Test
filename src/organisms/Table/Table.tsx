import React from 'react';
import './Table.css';

export interface TableColumn<T = any> {
  /** Column header */
  header: string;
  /** Data accessor key or render function */
  accessor: keyof T | ((row: T) => React.ReactNode);
  /** Column width */
  width?: string;
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
}

export interface TableProps<T = any> {
  /** Table columns */
  columns: TableColumn<T>[];
  /** Table data */
  data: T[];
  /** Table variant */
  variant?: 'default' | 'striped' | 'bordered';
  /** Hover effect on rows */
  hoverable?: boolean;
  /** Compact spacing */
  compact?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Empty state message */
  emptyMessage?: string;
  /** Row click handler */
  onRowClick?: (row: T, index: number) => void;
}

export const Table = <T extends Record<string, any>>({
  columns,
  data,
  variant = 'default',
  hoverable = false,
  compact = false,
  loading = false,
  emptyMessage = 'No data available',
  onRowClick,
}: TableProps<T>) => {
  const tableClassNames = [
    'ds-table',
    `ds-table--${variant}`,
    hoverable && 'ds-table--hoverable',
    compact && 'ds-table--compact',
    onRowClick && 'ds-table--clickable',
  ]
    .filter(Boolean)
    .join(' ');

  const getCellValue = (row: T, column: TableColumn<T>) => {
    if (typeof column.accessor === 'function') {
      return column.accessor(row);
    }
    return row[column.accessor];
  };

  if (loading) {
    return (
      <div className="ds-table-wrapper">
        <div className="ds-table-loading">
          <div className="ds-table-spinner" />
          <span>Loading...</span>
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="ds-table-wrapper">
        <div className="ds-table-empty">{emptyMessage}</div>
      </div>
    );
  }

  return (
    <div className="ds-table-wrapper">
      <table className={tableClassNames}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                style={{
                  width: column.width,
                  textAlign: column.align,
                }}
                className="ds-table__header-cell"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={() => onRowClick?.(row, rowIndex)}
              className="ds-table__row"
            >
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  style={{ textAlign: column.align }}
                  className="ds-table__cell"
                >
                  {getCellValue(row, column)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
