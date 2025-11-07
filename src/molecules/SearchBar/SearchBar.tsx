import React from 'react';
import { Input, InputProps } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import './SearchBar.css';

export interface SearchBarProps extends Omit<InputProps, 'leftIcon'> {
  /** Callback when search is triggered */
  onSearch?: (value: string) => void;
  /** Show search button */
  showButton?: boolean;
  /** Search button text */
  buttonText?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  showButton = true,
  buttonText = 'Search',
  placeholder = 'Search...',
  ...inputProps
}) => {
  const [value, setValue] = React.useState('');

  const handleSearch = () => {
    onSearch?.(value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const searchIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );

  return (
    <div className="ds-search-bar">
      <Input
        {...inputProps}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        leftIcon={searchIcon}
        fullWidth
      />
      {showButton && (
        <Button onClick={handleSearch} className="ds-search-bar__button">
          {buttonText}
        </Button>
      )}
    </div>
  );
};
