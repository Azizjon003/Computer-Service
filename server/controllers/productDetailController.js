const ProductDetails = require("../models/productDetailsModel");

const getAll = async (req, res) => {
  try {
    const productDetails = await ProductDetails.findAll({}); // required:true
    res.status(200).json({
      datas: productDetails.length,
      data: productDetails,
      status: "succes",
    });
  } catch (error) {
    console.log(error.message);
  }
};

const add = async (req, res) => {
  try {
    const productDetails = await ProductDetails.create(req.body);
    res.status(200).json({
      data: productDetails,
      status: "succes",
    });
  } catch (error) {
    console.log(error.message);
  }
};

const delete1 = async (req, res) => {
  try {
    await ProductDetails.destroy({ where: { id: req.params.id } });
    res.status(200).json({
      data: "success",
    });
  } catch (error) {
    console.log(error.message);
  }
};
const getOne = async (req, res) => {
  try {
    const productDetails = await ProductDetails.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json({
      data: productDetails,
    });
  } catch (error) {
    console.log(error.message);
  }
};
const update = async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  add,
  getAll,
  delete1,
  getOne,
  update,
};
