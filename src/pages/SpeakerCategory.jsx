import React from "react";
import Navbar from "../UI/Navbar";
import Header from "../UI/Header";
import ProductLeft from "../components/ProductLeft/ProductLeft";
import img from "../Images/category-speakers/desktop/image-zx9.jpg";
import img2 from "../Images/category-speakers/desktop/image-zx7.jpg";
import Products from "../components/Products/Products";
import ProductRight from "../components/ProductRight/ProductRight";
import { Category as Cat } from "../components/Category/Category";
import Best from "../components/Best/Best";
import Footer from "../UI/Footer";
const Category = () => {
  return (
    <>
      <Navbar />
      <Header heading={"SPEAKERS"} />
      <Products>
        <ProductLeft
          img={img}
          newImage={true}
          category={"SPEAKER"}
          name={"ZX9"}
          description={
            "pgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          }
        />
        <ProductRight
          img={img2}
          newImage={false}
          category={"SPEAKER"}
          name={"ZX7"}
          description={
            "tream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
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
