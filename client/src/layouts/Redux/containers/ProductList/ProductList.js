import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductComponent from "../ProductComponent/ProductComponent";
import { setProduct } from "../../redux/action/productAction";
import { Wrapper } from "./styleProductList";

const ProductList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    const response = await axios
      .get("https://api.escuelajs.co/api/v1/products")
      .catch((err) => console.log(err));
    dispatch(setProduct(response.data));
  };

  console.log("products", products);

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <Wrapper>
      <ProductComponent />
    </Wrapper>
  );
};

export default ProductList;
