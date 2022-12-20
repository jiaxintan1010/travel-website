import React, { useEffect } from "react";
import "../../App.css";

function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1 className="products">Products</h1>
    </div>
  );
}

export default Products;
