import React from "react";

import CartItem from "../CartItem/CartItem";
import Total from "../Total/Total";

export default function CartList(props) {
  const summary = Object.keys(props.selected).map((feature, idx) => (
    <CartItem feature={feature} idx={idx} {...props} />
  ));

  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {summary}
      <Total {...props} />
    </section>
  );
}
