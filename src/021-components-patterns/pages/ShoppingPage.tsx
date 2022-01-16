import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { Product } from "../interfaces/interfaces";
import "../styles/custom-styles.css";
import { useState } from "react";

const product1 = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};
const product2 = {
  id: "2",
  title: "Coffee Mug - Meme",
  img: "./coffee-mug2.png",
};

const products: Product[] = [product1, product2];

interface IProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: IProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    console.log("product count change", count, product);

    setShoppingCart((oldState) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldState;
        return rest;
      }

      return {
        ...oldState,
        [product.id]: { ...product, count },
      };
    });
  };

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className=" text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        <ProductCard
          product={product2}
          className="bg-dark text-white"
          style={{ width: "100px" }}
        >
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard
          product={product1}
          className="bg-dark text-white"
          style={{ width: "100px" }}
        >
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>

      <div>
        <span>{JSON.stringify(shoppingCart, null, 5)}</span>
      </div>
    </div>
  );
};
