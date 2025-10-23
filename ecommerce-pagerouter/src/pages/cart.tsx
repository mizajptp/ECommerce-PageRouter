

import { CartItem } from "@/models/cart";
import { clearCart, decrementQuantity, incrementQuantity, removeFromCart } from "@/store/slice/cartSlice";
import { RootState } from "@/store/store";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {

  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => {
    return state.cart.cartItems;
  });

  const onRemoveClick = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const OnClearClick = () => {
    dispatch(clearCart());
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <Head>
        <title>Cart | M-Cart</title>
      </Head>
      <div className="container my-4">
        {cart.length === 0 ? (
          <h5>Your Cart is empty.</h5>
        ) : (
          <>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="">Your Cart</h5>
              <button
                className="btn btn-sm btn-outline-danger d-flex align-items-center px-3 py-2"
                onClick={() => OnClearClick()}
              >
                <i className="bi bi-trash-fill me-2"></i>
                Clear Cart
              </button>
            </div>

            {/* Cart Items */}
            <div className="list-group">
              {cart.map((item: CartItem) => (
                <div className="list-group-item border-0 border-bottom p-3">
                  <div className="row align-items-center ">

                    {/* Image */}
                    <div className="col-3 col-md-2 text-center gy-3">
                      <img src={item.image} alt="Image" height={100} width={80} />
                    </div>

                    {/* Title and Price */}
                    <div className="col-9 col-md-5 text-center text-md-start">
                      <Link
                        className="text-decoration-underline fw-semibold text-dark"
                        href={`/products/${item.id}`}
                      >
                        {item.title}
                      </Link>

                      <div className="text-muted mt-1">${item.price}</div>
                    </div>

                    {/* Quantity and Button */}
                    <div className="col-12 col-md-5 d-flex justify-content-between align-items-center my-2">
                      <div>
                        <button
                          className="btn btn-outline-secondary btn-sm rounded-5"
                          onClick={() => dispatch(decrementQuantity(item.id))}
                        >
                          -
                        </button>
                        <span className="mx-3">{item.quantity}</span>
                        <button
                          className="btn btn-outline-secondary btn-sm rounded-5"
                          onClick={() => dispatch(incrementQuantity(item.id))}
                        >
                          +
                        </button>
                      </div>
                      <div className="fw-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                      <button
                        className="btn btn-outline-danger btn-sm rounded-1"
                        onClick={() => onRemoveClick(item.id)}
                      >
                        <i className="bi bi-trash-fill"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Amount */}
            <div className="mt-2 pt-3 border-top text-end">
              <h5>
                <strong>Total:</strong> ${total.toFixed(2)}
              </h5>
            </div>
          </>
        )}
      </div>
    </>
  );
}
