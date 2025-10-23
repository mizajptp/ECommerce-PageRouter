import { addToCart } from "@/store/slice/cartSlice";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

export default function AddToCartButton(props: any) {
  const router = useRouter();

  const dispatch = useDispatch();

  const onAddClick = (p: any) => {
    dispatch(addToCart(p));
    if (props.moveToCartPage) {
      router.push("/cart");
    }
  };

  return (
    <div>
      <button className="btn btn-sm btn-warning rounded-3" onClick={() => onAddClick(props.product)}>
        Add To Cart
      </button>
    </div>
  );
}
