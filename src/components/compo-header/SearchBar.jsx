import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== '') {
      navigate(`/produtos?search=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-[720px]">
      <label htmlFor="searchbar" className="sr-only">
        Pesquisar
      </label>

      <input
        placeholder="Pesquisar Produto..."
        type="text"
        name="searchbar"
        id="searchbar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 pr-10 rounded-[8px] border border-gray-300 bg-[#F5F5F5] text-[16px] focus:outline-none"
      />

      <button type="submit">
        <img
          src="/assets/Search.png"
          alt="buscar"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
        />
      </button>
    </form>
  );
};

export default SearchBar;
