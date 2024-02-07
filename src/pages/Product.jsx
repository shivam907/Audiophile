import React from "react";
import Navbar from "../UI/Navbar";
import ProductHero from "../components/Product/ProductHero";
import Features from "../components/Product/Features";
import Gallery from "../components/Product/Gallery";
import Like from "../components/Product/Like";
import { Category } from "../components/Category/Category";
import Best from "../components/Best/Best";
import Footer from "../UI/Footer";
import Product from "../components/Product/Product";
const ProductPage = (props) => {
  return (
    <>
      <Navbar />
      <Product>
        <ProductHero
          img={props.img}
          name={props.name}
          category={props.category}
          description={props.description}
          price={"899"}
        />
        <Features
          featureDescription1={props.features}
          featureListQuantity={[1, 2, 1, 1]}
          featureList={[
            "Headphone unit",
            "Replacement Earcups",
            "User Manual",
            "3.5mm 5m Audio Cable",
          ]}
        />
        <Gallery
          galleryImage1={props.galleryImage[0]}
          galleryImage2={props.galleryImage[1]}
          galleryImage3={props.galleryImage[2]}
        />
        <Like
          likeImage1={props.likeImage[0]}
          likeImage2={props.likeImage[1]}
          likeImage3={props.likeImage[2]}
          likeName1={props.likeName[0]}
          likeName2={props.likeName[1]}
          likeName3={props.likeName[2]}
        />
      </Product>
      <Category />
      <Best />
      <Footer />
    </>
  );
};

export default ProductPage;
