
import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function SearchBar() {

  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
     const params = { ...router.query, search: searchTerm || "" };
    router.push({ pathname: "/products", query: params });
    // setSearchTerm("");
  };

  return (
    <div>
      <form className="d-flex" role="search" onSubmit={onSearchSubmit}>
        {/* TextBox */}
        <input
          className="form-control me-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="search"
          placeholder="Search"
          aria-label="Search"
        />

        {/* Search Button */}
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
