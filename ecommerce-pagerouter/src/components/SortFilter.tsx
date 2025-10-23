
import { useRouter } from 'next/router';
import React from 'react'

export default function SortFilter({ selected }: { selected: string }) {

     const router = useRouter();

   const onSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const params = { ...router.query, sort: value || "" };
    router.push({ pathname: "/products", query: params });
  };
  
  return (
    <select
      className="form-select w-auto" value={selected} onChange={onSortChange}
    >
      <option value="">Sort by</option>
      <option value="asc">Price: Low to High</option>
      <option value="desc">Price: High to Low</option>
    </select>
  );
}
