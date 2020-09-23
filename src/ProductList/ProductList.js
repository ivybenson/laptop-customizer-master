import React from "react";

import ProductCategory from "../ProductCategory/ProductCategory";

export default function ProductList(props) {
  const features = Object.keys(props.features).map((feature, idx) => (
    <ProductCategory feature={feature} idx={idx} {...props} />
  ));
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  );
}
