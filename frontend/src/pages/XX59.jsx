import React from "react";
import Navbar from "../UI/Navbar";
import ProductHero from "../components/Product/ProductHero";
import Features from "../components/Product/Features";
import Gallery from "../components/Product/Gallery";
import Like from "../components/Product/Like";
import { Category } from "../components/Category/Category";
import Best from "../components/Best/Best";
import Footer from "../UI/Footer";
import img from "../Images/category-headphones/desktop/image-xx59.jpg";
import galleryImage1 from "../Images/product-xx59-headphones/desktop/image-gallery-1.jpg";
import galleryImage2 from "../Images/product-xx59-headphones/desktop/image-gallery-2.jpg";
import galleryImage3 from "../Images/product-xx59-headphones/desktop/image-gallery-3.jpg";
import likeImage1 from "../Images/shared/desktop/image-xx99-mark-one-headphones.jpg";
import likeImage2 from "../Images/shared/desktop/image-xx99-mark-two-headphones.jpg";
import likeImage3 from "../Images/shared/desktop/image-zx9-speaker.jpg";
import Product from "../components/Product/Product";
const XX99Mark2 = () => {
  return (
    <>
      <Navbar />
      <Product>
        <ProductHero
          img={img}
          name={"XX59"}
          category={"HEADPHONES"}
          description={
            "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
          }
          price={"899"}
        />
        <Features
          featureDescription1={
            "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos."
          }
          featureDescription2={
            "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
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
