import Home from "./pages/Home";
import data from "./Data/products.json";
import Cart from "./components/Modals/Cart";
import Category from "./pages/Category";
import Checkout from "./components/Checkout/Checkout";
import ProductPage from "./pages/Product";
import "./App.css";
import Footer from "./UI/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./UI/Navbar";
function App() {
  console.log(data.categories);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {data.categories.map((i) => (
          <Route path={`/${i}`} element={<Category name={i} />} />
        ))}
        {data.products.map((prod) => {
          let quantity = [];
          let item = [];
          prod.includedItems.forEach((i) => {
            quantity.push(i.quantity);
            item.push(i.item);
          });
          return (
            <Route
              path={`/${prod.url}`}
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
                  likeUrl={[
                    prod.others[0].url,
                    prod.others[1].url,
                    prod.others[2].url,
                  ]}
                  quantity={quantity}
                  items={item}
                />
              }
            />
          );
        })}
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
