import React from "react";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard(props: any) {
  var prod = props.product;
  return (
    <div className="card">

      {/* Image */}
      <div className="mt-2 mx-2" style={{ height: "210px" }}>
        <img src={prod.image} alt={prod.title} className="img-fluid h-100" style={{objectFit:"contain"}}/>
      </div>

      <div className="card-body">

        {/* Title */}
        <div
          className="text-truncate mb-2"
          style={{ maxWidth: "100%", display: "block" }}
        >
          <Link
            className="text-decoration-underline text-dark"
            href={`/products/${prod.id}`}
          >
            {prod.title}
          </Link>
        </div>

        {/* Rating*/}
        <div className="my-2">
          <span>{prod.rating.rate}</span>
          <span className="text-warning">({prod.rating.count})</span>
        </div>

        {/* Price and Button */}
        <div>
          <p className="fw-bold my-2">${prod.price}</p>
          <AddToCartButton product={prod} moveToCartPage={false}/>
        </div>
      </div>
    </div>
  );
}
