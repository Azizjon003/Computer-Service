import { Route, Routes } from "react-router-dom";
import ProductList from "../containers/ProductList/ProductList";
import ProductDetails from "../containers/ProductDetails/ProductDetails";
import NotFound from "../containers/NotFound/NotFound";

const Routess = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Routess;
