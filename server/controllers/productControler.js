const Brands = require("../models/brandsModel");
const ProductCategory = require("../models/productCategoriesModel");
const ProductDetails = require("../models/productDetailsModel");
const Products = require("../models/productsModel");
const Sales = require("../models/salesModel");
const ProductReview = require("../models/reviewForProducts");
const Locations = require("../models/locationsModel");

const getAll = async (req, res) => {
  try {
    const products = await Products.findAll({
      include: [
        {
          model: Brands,
        },
        {
          model: ProductCategory,
        },
        {
          model: ProductDetails,
        },
        {
          model: Sales,
        },
        {
          model: ProductReview,
        },
        {
          model: Locations,
        },
      ],
    }); // required:true
    res.status(200).json({
      datas: products.length,
      data: products,
      status: "succes",
    });
  } catch (error) {
    console.log(error.message);
  }
};

const add = async (req, res) => {
  try {
    const products = await Products.create(req.body);
    res.status(200).json({
      data: products,
      status: "succes",
    });
  } catch (error) {
    console.log(error.message);
  }
};

const delete1 = async (req, res) => {
  try {
    await Products.destroy({ where: { id: req.params.id } });
    res.status(200).json({
      data: "success",
    });
  } catch (error) {
    console.log(error.message);
  }
};
const getOne = async (req, res) => {
  try {
    const products = await Products.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Brands,
        },
        {
          model: ProductCategory,
        },
        {
          model: ProductDetails,
        },
        {
          model: Sales,
        },
        {
          model: ProductReview,
        },
        {
          model: Locations,
        },
      ],
    });
    res.status(200).json({
      data: products,
    });
  } catch (error) {
    console.log(error.message);
  }
};
const update = async (req, res) => {
  try {
    const products = await Products.findOne({ where: { id: req.params.id } });

    products.name = req.body.name || products.name;

    const newProducts = await products.save();

    res.status(200).json({
      data: newProducts,
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
