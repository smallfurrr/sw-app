import React, { useState } from 'react';
import styles from './Search.module.scss';

interface SearchProps {
  placeholder?: string;
  handleSearch: () => void;
}

const Search: React.FC<SearchProps> = ({ placeholder, handleSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div>
      <button onClick={() => handleSearch()} className="btn">
        <img src="/icon-search.svg" alt="magnifying-icon" />
      </button>
      <input
        value={searchInput}
        className={styles['search-input']}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
