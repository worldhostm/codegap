import React, { useState } from 'react';

interface SearchInputProps {
  placeholder?: string; // 검색창에 표시될 플레이스홀더
  onSearch: (query: string) => void; // 검색 실행 시 호출될 함수
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder = 'Search...', onSearch }) => {
  const [query, setQuery] = useState(''); // 검색어 상태 관리

  const handleSearch = () => {
    onSearch(query); // 검색어 전달
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(); // 엔터를 누르면 검색 실행
    }
  };

  return (
    <div className="flex items-center w-full max-w-md border rounded-md shadow-sm">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        className="flex-grow p-2 border-0 focus:ring-0 focus:outline-none"
        placeholder={placeholder}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
