import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled(Box)({
  display: "flex",
  gap: "30px",
});

export const ProductImg = styled(Box)({
  flex: "2",
  background: "whitesmoke",
  height: "350px",
  borderRadius: "10px",
  position: "relative",
});

export const ProductDescription = styled(Box)({
  flex: "4",
});

export const Percent = styled(Box)({
  background: "#EDEDED",
  width: "400px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "180px",
  border: "1px solid #2D3092",
  borderRadius: "5px",
});
