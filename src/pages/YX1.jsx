import React from "react";
import Navbar from "../UI/Navbar";
import ProductHero from "../components/Product/ProductHero";
import Features from "../components/Product/Features";
import Gallery from "../components/Product/Gallery";
import Like from "../components/Product/Like";
import { Category } from "../components/Category/Category";
import Best from "../components/Best/Best";
import Footer from "../UI/Footer";
import img from "../Images/category-earphones/desktop/image-yx1-earphones.jpg";
import galleryImage1 from "../Images/product-yx1-earphones/desktop/image-gallery-1.jpg";
import galleryImage2 from "../Images/product-yx1-earphones/desktop/image-gallery-2.jpg";
import galleryImage3 from "../Images/product-yx1-earphones/desktop/image-gallery-3.jpg";
import likeImage1 from "../Images/shared/desktop/image-zx9-speaker.jpg";
import likeImage2 from "../Images/shared/desktop/image-xx99-mark-one-headphones.jpg";
import likeImage3 from "../Images/shared/desktop/image-xx59-headphones.jpg";
import Product from "../components/Product/Product";
const XX99Mark2 = () => {
  return (
    <>
      <Navbar />
      <Product>
        <ProductHero
          img={img}
          name={"YX1"}
          category={"EARPHONES"}
          description={
            "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
          }
          price={"599"}
        />
        <Features
          featureDescription1={
            "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound."
          }
          featureDescription2={
            "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black."
          }
          featureListQuantity={[2, 2, 1, 1]}
          featureList={[
            "Earphone unit",
            "Multi Size Earplugs",
            "User Manual",
            "USB-C Charging Cable",
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
          likeName1={"ZX9 SPEAKERS"}
          likeName2={"XX99 MARK II"}
          likeName3={"XX59 HEADPHONES"}
        />
      </Product>
      <Category />
      <Best />
      <Footer />
    </>
  );
};

export default XX99Mark2;
