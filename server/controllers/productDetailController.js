const ProductDetails = require("../models/productDetailsModel");
const catchErrAsync = require("../utility/catchErrAsync");

const getAll = catchErrAsync(async (req, res, next) => {
  const productDetails = await ProductDetails.findAll({}); // required:true
  res.status(200).json({
    datas: productDetails.length,
    data: productDetails,
    status: "succes",
  });
});

const add = catchErrAsync(async (req, res, next) => {
  const productDetails = await ProductDetails.create(req.body);
  res.status(200).json({
    data: productDetails,
    status: "succes",
  });
});

const delete1 = catchErrAsync(async (req, res, next) => {
  await ProductDetails.destroy({ where: { id: req.params.id } });
  res.status(200).json({
    data: "success",
  });
});
const getOne = catchErrAsync(async (req, res, next) => {
  const productDetails = await ProductDetails.findOne({
    where: { id: req.params.id },
  });
  res.status(200).json({
    data: productDetails,
  });
});
const update = catchErrAsync(async (req, res, next) => {
  const productDetails = await ProductDetails.findOne({
    where: { id: req.params.id },
  });

  productDetails.colors = req.body.colors || productDetails.colors;
  productDetails.sizes = req.body.sizes || productDetails.sizes;
  productDetails.condition = req.body.condition || productDetails.condition;
  productDetails.images = req.body.images || productDetails.images;

  const newProductDetails = await productDetails.save();

  res.status(200).json({
    data: newProductDetails,
  });
});

module.exports = {
  add,
  getAll,
  delete1,
  getOne,
  update,
};
