import { useState } from 'react';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';

export default function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="container pt-10 space-y-10">
      <nav className="">
        <img className="block mx-auto" src="/Logo.svg" alt="logo" />
      </nav>
      {/* Searchbar */}
      <SearchBar />
      {/* Table */}
      <div className=" space-y-7">
        {/* Filter Header*/}
        <Filter />
        <Table />
      </div>
    </div>
  );
}
