import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  countDecProduct,
  countIncProduct,
  selectedProduct,
} from "../../redux/action/productAction";
import { Container, styled } from "@mui/material";

import { Box } from "@mui/system";
import DetailsImg from "./DetailsImg/DetailsImg";
import ProductAbout from "./ProductAbout/ProductAbout";
import SimilarProducts from "./SimilarProducts/SimilarProducts";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const count = useSelector((state) => state.count.count);
  console.log(count);
  const { images, title, price } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    const response = await axios
      .get(`https://api.escuelajs.co/api/v1/products/${productId}`)
      .catch((err) => console.log(err));
    dispatch(selectedProduct(response.data));
    console.log(response);
  };

  const increment = () => {
    dispatch(countIncProduct());
  };
  const decrement = () => {
    dispatch(countDecProduct());
  };

  useEffect(() => {
    if (product && product !== "") fetchProduct();
  }, [productId]);

  const ContentWrapper = styled(Container)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      
    },
  }));

  const Wrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "30px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "140px",
    },
  }));

  return (
    <ContentWrapper maxWidth="lg">
      <Wrapper mt={4}>
        <DetailsImg images={images} title={title} />
        <ProductAbout
          increment={increment}
          decrement={decrement}
          price={price}
          title={title}
          count={count}
        />
      </Wrapper>
      <Box>
        <SimilarProducts />
      </Box>
    </ContentWrapper>
  );
};

export default ProductDetails;
