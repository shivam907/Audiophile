import React from "react";
import Navbar from "../UI/Navbar";
import Header from "../UI/Header";
import ProductLeft from "../components/ProductLeft/ProductLeft";
import img from "..//Images/category-earphones/desktop/image-yx1-earphones.jpg";
import Products from "../components/Products/Products";
import { Category as Cat } from "../components/Category/Category";
import Best from "../components/Best/Best";
import Footer from "../UI/Footer";
const Category = () => {
  return (
    <>
      <Navbar />
      <Header heading={"EARPHONES"} />
      <Products>
        <ProductLeft
          img={img}
          newImage={true}
          category={"EARPHONES"}
          name={"YX1 WIRELESS"}
          description={
            "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
          }
        />
      </Products>
      <Cat />
      <Best />
      <Footer />
    </>
  );
};

export default Category;
