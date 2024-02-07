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
          featureListQuantity={props.quantity}
          featureList={props.items}
        />
        <Gallery
          galleryImage1={props.galleryImage[0]}
          galleryImage2={props.galleryImage[1]}
          galleryImage3={props.galleryImage[2]}
        />
        <Like
          likeImage={[props.likeImage[0], props.likeImage[1], props.likeImage[2]]}
          likeName={[props.likeName[0], props.likeName[1], props.likeName[2]]}
          url={[props.likeUrl[0], props.likeUrl[1], props.likeUrl[2]]}

        />
      </Product>
      <Category />
      <Best />
      <Footer />
    </>
  );
};

export default ProductPage;
