import React from "react";
import Navbar from "../UI/Navbar";
import ProductHero from "../components/Product/ProductHero";
import Features from "../components/Product/Features";
import Gallery from "../components/Product/Gallery";
import Like from "../components/Product/Like";
import { Category } from "../components/Category/Category";
import Best from "../components/Best/Best";
import Footer from "../UI/Footer";
import img from "../Images/category-headphones/desktop/image-xx99-mark-one.jpg";
const XX99Mark2 = () => {
  return (
    <>
      <Navbar />
      <ProductHero
        img={img}
        name={"XX99 Mark I"}
        category={"HEADPHONES"}
        description={
          "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
        }
        price={"1,750"}
      />
      <Features
        featureDescription1={
          "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz."
        }
        featureDescription2={
          "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector."
        }
      />
      <Gallery />
      <Like />
      <Category />
      <Best />
      <Footer />
    </>
  );
};

export default XX99Mark2;
