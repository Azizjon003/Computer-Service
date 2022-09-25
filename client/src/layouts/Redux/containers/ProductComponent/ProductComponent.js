import { Box, Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import {
  ButtonsContainer,
  CardItemText,
  CardItemWrapper,
  CardStatus,
  CartItem,
  Wrapper,
} from "./styleProductComponent";
import {
  AddShoppingCartRounded,
  StarBorderRounded,
  AddCardRounded,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.product);
  const renderList = products.map((product) => {
    const { id, title, images, price, description } = product;
    return (
      <Wrapper key={id}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3} lg={2}>
            <Link to={`/product/${id  }`}>
              <CartItem>
                <CardItemWrapper>
                  <img src={images} alt={title} />
                  <CardStatus>
                    <Box className="status">
                      3.4
                      <StarBorderRounded style={{ fontSize: "18px" }} />
                    </Box>
                    <Box>${price}</Box>
                  </CardStatus>
                  <CardItemText>
                    <Typography>{title}</Typography>
                    <Typography className="description">
                      Lorem Ipsum is simply dummy text
                    </Typography>
                  </CardItemText>
                </CardItemWrapper>
                <ButtonsContainer>
                  <Button className="button1" variant="contained">
                    <AddShoppingCartRounded sx={{ fontSize: "20px" }} />
                    <Typography className="Text">Shop</Typography>
                  </Button>
                  <Button className="button2" variant="contained">
                    <AddCardRounded sx={{ fontSize: "20px" }} />
                    <Typography className="Text">ADD TO CART</Typography>
                  </Button>
                </ButtonsContainer>
              </CartItem>
            </Link>
          </Grid>
        </Grid>
      </Wrapper>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
