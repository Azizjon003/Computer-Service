import { Button, Card, Container } from "@mui/material";
import { Box, styled } from "@mui/system";

export const Wrapper = styled(Box)({
  width: "280px",
  background: "#fff",
  display: "inline-block",
  justifyContent: "center",
  margin: "50px 0 0 50px",
  transition: "0.3s",
  borderRadius: "none",

  animation: "ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

export const CartItem = styled(Card)({
  width: "280px",
  height: "380px",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  img: {
    width: "230px",
    height: "240px",
    cursor: "pointer",
  },
  borderBottomLeftRadius: "none",
  borderBottomRightRadius: "none",
});

export const CardItemWrapper = styled(Container)({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  flex: "10",
});

export const CardStatus = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  ".status": {
    background: "#6F64F8",
    width: "50px",
    color: "#fff",
    borderRadius: "3px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
  },
});

export const CardItemText = styled(Box)({
  width: "200px",
  ".description": {
    fontSize: "12px",
    fontWeight: "200",
  },
});

export const ButtonsContainer = styled(Box)({
  display: "flex",
  flex: "1",
  borderRadius: "none",
  width: "100%",
  ".button1": {
    flex: "1",
    height: "35px",
    paddingLeft: "5px",
    background: "#EDEDED",
    color: "#111",
    borderRadius: "none",
  },
  ".button2": {
    flex: "1",
    height: "35px",
    fontSize: "12px",
    background: "#6F64F8",
  },
  ".Text": {
    fontSize: "12px",
    marginLeft: "5px",
  },
});
