import AddToCartButton from '@/components/AddToCartButton';
import { ProductsService } from '@/services/products-service';
import Head from 'next/head';
import React from 'react'

export async function getServerSideProps({ params }:any) {

  const {productId} = params;

  var product = await ProductsService.getProductById(productId);

  return {
    props: { product }, 
  };
}


export default function ProductDetails({product} : any) {
  return (
    <>
      <Head>
        <title>{product.title} | M-Cart</title>
      </Head>
      <div className="container py-5">
        <div className="row  gy-4">
          
          {/* Image */}
          <div className="col-12 col-md-6 text-center">
            <img src={product.image} height={400} width={300} />
          </div>

          {/* Details */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
            {/* Title and Rating */}
            <div className="row d-flex py-2 justify-content-between">
              <div className="col-9 fw-bold fs-5">{product.title}</div>
              <div className="col-3 text-end">
                <i className="bi bi-star-fill text-warning px-1"></i>
                <span className="px-1">{product.rating.rate}</span>
                <span className="text-warning">({product.rating.count})</span>
              </div>
            </div>

            {/* Description */}
            <div className="py-2 text-muted mb-3">{product.description}</div>

            {/* Price and Button */}
            <div className="d-flex py-2 justify-content-between align-items-center">
              <div className="fw-bold fs-4 text-success">${product.price}</div>
              <div>
                <AddToCartButton product={product} moveToCartPage={true}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
