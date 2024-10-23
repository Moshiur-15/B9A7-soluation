import { useState } from "react";
import { useEffect } from "react";
import Product from "../product/product";

const Products = ({handleProductTable}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("chefs.json");
      const data = await res.json();
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <div className="md:w-2/3">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {products.map((product, inx) => (
          <Product key={inx} product={product} handleProductTable={handleProductTable}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
