import React from "react";
import Navbar from "../UI/Navbar";
import ProductHero from "../components/Product/ProductHero";
import Features from "../components/Product/Features";
import Gallery from "../components/Product/Gallery";
import Like from "../components/Product/Like";
import { Category } from "../components/Category/Category";
import Best from "../components/Best/Best";
import Footer from "../UI/Footer";
import img from "../Images/category-headphones/desktop/image-xx99-mark-two.jpg";
import galleryImage1 from "../Images/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import galleryImage2 from "../Images/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import galleryImage3 from "../Images/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";
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
          name={"XX99 Mark II"}
          category={"HEADPHONES"}
          description={
            "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          }
          price={"2,999"}
        />
        <Features
          featureDescription1={
            "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat."
          }
          featureDescription2={
            "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
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
