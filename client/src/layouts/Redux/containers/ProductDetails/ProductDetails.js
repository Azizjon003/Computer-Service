// import { useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// <<<<<<< HEAD
// import {
//   countDecProduct,
//   countIncProduct,
//   selectedProduct,
// } from "../../redux/action/productAction";
// import { Button, Container, Typography } from "@mui/material";
// =======
// import { selectedProduct } from "../../redux/action/productAction";
// import { Button, Card, Container, Typography } from "@mui/material";
// import { settings } from "./sliderSettings";
// import Slider from "react-slick";

// >>>>>>> da16cb32e023618ec38fde708ba7687bc92bded6
// import {
//   Percent,
//   ProductDescription,
//   ProductImg,
//   Wrapper,
// } from "./styleProductDetails";
// import { Box } from "@mui/system";
// import {
//   AirportShuttleSharp,
//   ScheduleSharp,
//   Inventory2,
//   FavoriteBorderRounded,
// } from "@mui/icons-material";
// import ModalContainer from "../../Modal/Modal";
// import { countProductReducer } from "../../redux/reducer/productReducer";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const ProductDetails = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   const product = useSelector((state) => state.product);
//   const count = useSelector((state) => state.count.count);
//   console.log(count);
//   const { id, images, title, price, description, category } = product;
//   const { productId } = useParams();
//   const dispatch = useDispatch();

//   const fetchProduct = async () => {
//     const response = await axios
//       .get(`https://api.escuelajs.co/api/v1/products/${productId}`)
//       .catch((err) => console.log(err));
//     dispatch(selectedProduct(response.data));
//     console.log(response);
//   };

//   const increment = () => {
//     dispatch(countIncProduct());
//   };
//   const decrement = () => {
//     dispatch(countDecProduct());
//   };

//   useEffect(() => {
//     if (product && product !== "") fetchProduct();
//   }, [productId]);

//   return (
//     <div>
//       <Container maxWidth="lg">
//         <Wrapper mt={4}>
//           <ProductImg>
//             <FavoriteBorderRounded
//               style={{
//                 position: "absolute",
//                 right: "10",
//                 top: "10",
//                 fontSize: "30px",
//                 cursor: "pointer",
//                 color: "#2d3092",
//               }}
//             />
//             <img
//               style={{ width: "100%", height: "350px", borderRadius: "10px" }}
//               src={images}
//               alt="title"
//             />
//             <Box mt={1} display="flex" gap={1}>
//               {/* <Slider {...settings}> */}
//               {images &&
//                 images.map((image) => {
//                   return (
//                     <img
//                       style={{
//                         width: "85px",
//                         height: "85px",
//                         border: "1px solid #2D3092",
//                         borderRadius: "5px",
//                       }}
//                       src={image}
//                       alt={title}
//                     />
//                   );
//                 })}
//               {/* </Slider> */}
//             </Box>
//           </ProductImg>
//           <ProductDescription>
//             <Typography sx={{ fontWeight: 500, color: "#4a4b4f" }}>
//               {title}
//             </Typography>
//             <Box display="flex" alignItems="center">
//               <Typography
//                 mb={2}
//                 mt={2}
//                 fontSize={20}
//                 sx={{ fontWeight: 700, color: "#4a4b4f" }}
//               >
//                 UZS {price}
//               </Typography>
//               <Box display="flex">
//                 <Typography ml={2} color="#FFD20D">
//                   <del>UZS {price + 12}</del>
//                 </Typography>
//                 <Box
//                   bgcolor="#FFD200"
//                   width={30}
//                   height={24}
//                   ml={1}
//                   borderRadius={0.5}
//                   fontWeight={500}
//                   color="#4A4B4F"
//                   display="flex"
//                   justifyContent="center"
//                 >
//                   -9%
//                 </Box>
//               </Box>
//             </Box>
//             <Typography mb={1} mt={2} sx={{ fontWeight: 400, fontSize: 14 }}>
//               Baholar va fikrlar:
//             </Typography>
//             <Typography fontSize={15} color="#2469d2" mb={1} fontWeight={700}>
//               Tezkor va yetkazib berish O'zbekiston
//             </Typography>
//             <Box display="flex" flexDirection="column" gap={0.8}>
//               <Box display="flex" sx={{ fontWeight: 200, fontSize: 12 }}>
//                 <AirportShuttleSharp
//                   sx={{ fontSize: 20, marginRight: "5px" }}
//                 />
//                 <Typography fontSize={14} color="#B5A6A1">
//                   Yetkazib berish narxi
//                 </Typography>
//               </Box>
//               <Box display="flex" sx={{ fontWeight: 200, fontSize: 12 }}>
//                 <ScheduleSharp sx={{ fontSize: 20, marginRight: "5px" }} />
//                 <Typography fontSize={14} color="#B5A6A1">
//                   Taxminiy yetkzib berish{" "}
//                 </Typography>
//               </Box>
//               <Box display="flex" sx={{ fontWeight: 200, fontSize: 12 }}>
//                 <Inventory2 sx={{ fontSize: 20, marginRight: "5px" }} />
//                 <Typography fontSize={14} color="#B5A6A1">
//                   Eshikkacha{" "}
//                 </Typography>
//               </Box>
//             </Box>
//             <Box mb={3} mt={3} display="flex" alignItems="center">
//               <Typography>Miqdor :</Typography>
//               <Box ml={2} display="flex" bgcolor="#dddddd" borderRadius={2}>
//                 <Button
//                   sx={{ background: "#F5F7FA" }}
//                   variant="outlined"
//                   onClick={() => increment()}
//                 >
//                   +
//                 </Button>
//                 <Typography
//                   pt={1}
//                   display="flex"
//                   alignItems="center"
//                   justifyContent="center"
//                   color="#4A4B4F"
//                   width={70}
//                   height={30}
//                 >
//                   {count}
//                 </Typography>
//                 <Button
//                   sx={{ background: "#F5F7FA" }}
//                   variant="outlined"
//                   onClick={() => decrement()}
//                 >
//                   -
//                 </Button>
//               </Box>
//             </Box>
//             <Box>
//               <Button
//                 variant="outlined"
//                 sx={{
//                   background: "#ffd200",
//                   // color: "#fff",
//                   height: "45px",
//                   fontWeight: "500",
//                 }}
//               >
//                 Savatga qo'shish
//               </Button>
//               <Button
//                 variant="outlined"
//                 sx={{
//                   background: "#00AD27",
//                   color: "#ffd200",
//                   marginLeft: "8px",
//                   height: "45px",
//                   fontWeight: "500",
//                 }}
//               >
//                 Hoziroq harid qilish / UZC {price}
//               </Button>
//             </Box>
//             <Box
//               mt={2}
//               mb={2}
//               width={220}
//               bgcolor="#fff"
//               display="flex"
//               justifyContent="center"
//               alignItems="center"
//               borderRadius={1}
//             >
//               <ModalContainer />
//             </Box>
//             <Box width={400} display="flex" gap={2}>
//               <Typography>Izoh:</Typography>
//               <Box>
//                 <textarea rows={7} cols={65}>
//                   Assalomu aleykum!
//                 </textarea>
//                 <Button
//                   style={{ background: "#DDDDDD" }}
//                   width={5}
//                   variant="outlined"
//                 >
//                   Yuborish
//                 </Button>
//               </Box>
//             </Box>
//             {/* <Percent mt={2}></Percent> */}
//           </ProductDescription>
//         </Wrapper>
//       </Container>
//     </div>
//   );
// };

// export default ProductDetails;
