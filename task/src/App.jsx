import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Chips from "./components/leftPages/Chips";
import Sardines from "./components/leftPages/Sardines";
import Soda from "./components/leftPages/Soda";
import Contact from "./components/rightPages/Contact";
import About from "./components/rightPages/About/About"
import Blog from "./components/rightPages/Blog/Blog"
import Product from "./components/rightPages/Product"
import ProductDetails from "./components/rightPages/ProductDetails"
import { ROUTER } from "./constant/Router";

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTER.Home} element={<Home />} />
        <Route path={ROUTER.Chips} element={<Chips />} />
        <Route path={ROUTER.Soda} element={<Soda />} />
        <Route path={ROUTER.Sardines} element={<Sardines />} />
        <Route path={ROUTER.Contact} element={<Contact />} />
        <Route path={ROUTER.Product} element={<Product />} />
        <Route path={ROUTER.ProductDetails + "/:id"} element={<ProductDetails />} />
        <Route path={`${ROUTER.About}/*`} element={<About />} />
        <Route path={`${ROUTER.Blog}/*`} element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
