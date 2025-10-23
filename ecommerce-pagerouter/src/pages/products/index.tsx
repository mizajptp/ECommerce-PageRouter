import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { ProductsService } from '@/services/products-service';
import { Product } from '@/models/product';
import { useRouter } from 'next/router';
import CategoryFilter from '@/components/CategoryFilter';
import SortFilter from '@/components/SortFilter';
import Head from 'next/head';

export async function getServerSideProps() {

  var products: Product[] = await ProductsService.getProducts();

  return {
    props: { products },
  };
}

export default function Products({ products }: any) {

  const router = useRouter();
  const { search = "", category = "", sort = "" } = router.query;

  // Filter products by search + category
  const filteredProducts = products.filter((p: any) => {
    const matchesSearch = p.title.toLowerCase().includes((search as string).toLowerCase());
    const matchesCategory = category ? p.category === category : true;
    return matchesSearch && matchesCategory;
  });

  // Sort products by price
  if (sort === "asc") {
      filteredProducts.sort((a: any, b: any) => a.price - b.price);
    } else if (sort === "desc") {
      filteredProducts.sort((a: any, b: any) => b.price - a.price);
    }

    const categories = Array.from(new Set(products.map((p:any) => p.category)));

  return (
    <>
      <Head>
        <title>Products | M-Cart</title>
      </Head>
      <div className="container">
        <div id="top" className="my-4 d-flex flex-column flex-md-row justify-content-between align-items-center" >
          <p className="mb-2 mb-md-0">
            {filteredProducts.length === 0
            ? "No products found."
            : filteredProducts.length === 1
            ? "1 product found"
            : `${filteredProducts.length} products found`
          }
          </p>
          <div className="d-flex gap-2">
          <CategoryFilter categories={categories as []} selected={category as string} />
          <SortFilter selected={sort as string} />
          </div>
        </div>

        <div className="row g-4 text-center">
          {filteredProducts.map((p:any) => {
            return (
              <div className="col-6 col-md-4 col-lg-3" key={p.id}>
                <ProductCard product={p} />
              </div>
            );
          })}
        </div>

        {/* Back To Top Link */}
        {filteredProducts.length > 0 && (
          <div className="p-3 text-end">
            <Link className="text-decoration-underline" href="#top">
              <i className="bi bi-arrow-up me-1"></i> Back to Top
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
