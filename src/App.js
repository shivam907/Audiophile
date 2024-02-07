import Home from "./pages/Home";
import data from "./Data/products.json";
import XX99Mark2 from "./pages/XX99Mark2";
import XX99Mark1 from "./pages/XX99Mark1";
import ZX7 from "./pages/ZX7";
import ZX9 from "./pages/ZX9";
import Cart from "./components/Modals/Cart";
import Category from "./pages/Category";
import XX59 from "./pages/XX59";
import YX1 from "./pages/YX1";
import Checkout from "./components/Checkout/Checkout";
import ProductPage from "./pages/Product";
import "./App.css";
import Footer from "./UI/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./UI/Navbar";
function App() {
  console.log(data.categories);
  const prod = data.products[0];
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {data.categories.map((i) => (
          <Route path={`/${i}`} element={<Category name={i} />} />
        ))}
        <Route path="/XX99-Mark-2" element={<XX99Mark2 />} />
        <Route
          path="/product"
          element={
            <ProductPage
              name={prod.name}
              img={prod.image.desktop}
              category={prod.category}
              description={prod.description}
              price={prod.price}
              features={prod.features}
              galleryImage={[
                prod.gallery.first.desktop,
                prod.gallery.second.desktop,
                prod.gallery.third.desktop,
              ]}
              likeImage={[
                prod.others[0].image.desktop,
                prod.others[1].image.desktop,
                prod.others[2].image.desktop,
              ]}
              likeName={[
                prod.others[0].name,
                prod.others[1].name,
                prod.others[2].name,
              ]}
            />
          }
        />
        <Route path="/XX99-Mark-1" element={<XX99Mark1 />} />
        <Route path="/ZX7" element={<ZX7 />} />
        <Route path="/ZX9" element={<ZX9 />} />
        <Route path="/YX1" element={<YX1 />} />
        <Route path="/XX59" element={<XX59 />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/checkout"
          element={
            <>
              <Navbar />
              <Checkout />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
