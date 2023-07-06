import React from "react";
import Navbar from "../UI/Navbar";
import ProductHero from "../components/Product/ProductHero";
import Features from "../components/Product/Features";
import Gallery from "../components/Product/Gallery";
import Like from "../components/Product/Like";
import { Category } from "../components/Category/Category";
import Best from "../components/Best/Best";
import Footer from "../UI/Footer";
import img from "../Images/category-speakers/desktop/image-zx7.jpg";
import galleryImage1 from "../Images/product-zx7-speaker/desktop/image-gallery-1.jpg";
import galleryImage2 from "../Images/product-zx7-speaker/desktop/image-gallery-2.jpg";
import galleryImage3 from "../Images/product-zx7-speaker/desktop/image-gallery-3.jpg";
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
          name={"ZX7"}
          category={"SPEAKER"}
          description={
            "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
          }
          price={"3,500"}
        />
        <Features
          featureDescription1={
            "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage."
          }
          featureDescription2={
            "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
          }
          featureListQuantity={[2, 2, 1, 1]}
          featureList={[
            "Speaker unit",
            "Speaker Cloth",
            "User Manual",
            "7.5m Optical Cable",
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
