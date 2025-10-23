
import { useRouter } from "next/router";
import React from "react";

export default function CategoryFilter({
  categories,
  selected,
}: {
  categories: string[];
  selected: string;
}) {

  const router = useRouter();

  const categoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const params = { ...router.query, category: value || "" };

    router.push({ pathname: "/products", query: params });
  };

  return (
    <select className="form-select w-auto" value={selected} onChange={categoryChange}>
      <option value="">All Categories</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}
