import React from "react";
import Navbar from "../UI/Navbar";
import Header from "../UI/Header";
import ProductLeft from "../components/ProductLeft/ProductLeft";
import ProductRight from "../components/ProductRight/ProductRight";
import Products from "../components/Products/Products";
import { Category as Cat } from "../components/Category/Category";
import Best from "../components/Best/Best";
import Footer from "../UI/Footer";
import products from "../Data/products.json";
const Category = (props) => {
  return (
    <>
      <Navbar />
      <Header heading={props.name.toUpperCase()} />
      <Products>
      {products.products
      .filter((product) => product.category == props.name)
      .map((product, i) => {
        if (i % 2 == 0) {
            return <ProductLeft
              img={product.image.desktop}
              newImage={true}
              category={product.category.toUpperCase()}
              name={product.name}
              description={product.description}
              link={product.url}
            />
          
        } else {
            return <ProductRight
              img={product.image.desktop}
              newImage={true}
              category={product.category.toUpperCase()}
              name={product.name}
              description={product.description}
            />
        }
      })}
      </Products>
      <Cat />
      <Best />
      <Footer />
    </>
  );
};

export default Category;
