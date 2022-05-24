import React, { useState } from 'react';
import Image from 'next/image';
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
    <div className="d-flex align-items-center">
      <button onClick={() => handleSearch()} className="btn p-0">
        <Image
          src="/icon-search.svg"
          height={16}
          width={16}
          alt="magnifying-icon"
        />
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
