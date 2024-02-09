"use client";

import useCartService from "@/lib/hooks/new_cart_store";
import { OrderItem } from "@/lib/module/order_models";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AddToCart({ item }: { item: OrderItem }) {
  //   const router = useRouter();
  const { items, increase } = useCartService();
  const [existItem, setExistItem] = useState<OrderItem | undefined>();

  useEffect(() => {
    setExistItem(items.find((x) => x.slug === item.slug));
  }, [item, items]);

  const addToCartHandler = () => {
    increase(item);
  };
  return existItem ? (
    <div>
      <button className="btn" type="button">
        -
      </button>
      <span className="px-2">{existItem.qty}</span>
      <button className="btn" type="button" onClick={() => increase(existItem)}>
        +
      </button>
    </div>
  ) : (
    <button
      className="btn btn-default w-full"
      type="button"
      onClick={addToCartHandler}
    >
      Add to Cart
    </button>
  );
}