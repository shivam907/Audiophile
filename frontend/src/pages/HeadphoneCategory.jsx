import React from "react";
import Navbar from "../UI/Navbar";
import Header from "../UI/Header";
import ProductLeft from "../components/ProductLeft/ProductLeft";
import img from "..//Images/category-headphones/desktop/image-xx99-mark-two.jpg";
import img2 from "../Images/category-headphones/desktop/image-xx99-mark-one.jpg";
import img3 from "../Images/category-headphones/desktop/image-xx59.jpg";
import Products from "../components/Products/Products";
import ProductRight from "../components/ProductRight/ProductRight";
import { Category as Cat } from "../components/Category/Category";
import Best from "../components/Best/Best";
import Footer from "../UI/Footer";
const Category = () => {
  return (
    <>
      <Navbar />
      <Header heading={"HEADPHONES"} />
      <Products>
        <ProductLeft
          img={img}
          newImage={true}
          category={"HEADPHONES"}
          name={"XX99 MARK II"}
          description={
            "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          }
        />
        <ProductRight
          img={img2}
          newImage={false}
          category={"HEADPHONES"}
          name={"XX99 MARK I"}
          description={
            "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
          }
        />
        <ProductLeft
          img={img3}
          newImage={false}
          category={"HEADPHONES"}
          name={"XX59"}
          description={
            "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
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
