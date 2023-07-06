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
import galleryImage1 from "../Images/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg";
import galleryImage2 from "../Images/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg";
import galleryImage3 from "../Images/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg";
import likeImage1 from "../Images/shared/desktop/image-xx99-mark-two-headphones.jpg";
import likeImage2 from "../Images/shared/desktop/image-xx59-headphones.jpg";
import likeImage3 from "../Images/shared/desktop/image-zx9-speaker.jpg";
import Product from "../components/Product/Product";
const XX99Mark2 = () => {
  return (
    <>
      <Navbar />
      <Product>
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
          featureListQuantity={[1, 2, 1, 1]}
          featureList={[
            "Headphone unit",
            "Replacement Earcups",
            "User Manual",
            "3.5mm 5m Audio Cable",
          ]}
        />
        <Gallery
          galleryImage1={galleryImage1}
          galleryImage2={galleryImage2}
          galleryImage3={galleryImage3}
        />
        <Like
          likeImage1={likeImage1}
          likeImage2={likeImage2}
          likeImage3={likeImage3}
          likeName1={"XX99 MARK I"}
          likeName2={"XX59"}
          likeName3={"ZX9 SPEAKER"}
        />
      </Product>
      <Category />
      <Best />
      <Footer />
    </>
  );
};

export default XX99Mark2;
