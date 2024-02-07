import React from "react";
import Navbar from "../UI/Navbar";
import ProductHero from "../components/Product/ProductHero";
import Features from "../components/Product/Features";
import Gallery from "../components/Product/Gallery";
import Like from "../components/Product/Like";
import { Category } from "../components/Category/Category";
import Best from "../components/Best/Best";
import Footer from "../UI/Footer";
import img from "../Images/category-speakers/desktop/image-zx9.jpg";
import galleryImage1 from "../Images/product-zx9-speaker/desktop/image-gallery-1.jpg";
import galleryImage2 from "../Images/product-zx9-speaker/desktop/image-gallery-2.jpg";
import galleryImage3 from "../Images/product-zx9-speaker/desktop/image-gallery-3.jpg";
import likeImage1 from "../Images/shared/desktop/image-zx7-speaker.jpg";
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
          name={"ZX9"}
          category={"SPEAKER"}
          description={
            "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          }
          price={"4,500"}
        />
        <Features
          featureDescription1={
            "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m)."
          }
          featureDescription2={
            "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."
          }
          featureListQuantity={[2, 2, 1, 1]}
          featureList={[
            "Speaker unit",
            "Speaker Cloth",
            "User Manual",
            "10m Optical Cable",
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
          likeName1={"ZX7 SPEAKERS"}
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
