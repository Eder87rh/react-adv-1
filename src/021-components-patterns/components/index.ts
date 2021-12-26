import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProoductCardHOCProps } from "../interfaces/interfaces";

export * from "./ProductButtons";
// export * from "./ProductCard";
export * from "./ProductImage";
export * from "./ProductTitle";

export const ProductCard: ProoductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
