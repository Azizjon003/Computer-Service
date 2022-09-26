const ProductCategory = require("../models/productCategoriesModel");

const getAll = async (req, res) => {
  try {
    const productCategory = await ProductCategory.findAll(); // required:true
    res.status(200).json({
      datas: productCategory.length,
      data: productCategory,
      status: "succes",
    });
  } catch (error) {
    console.log(error.message);
  }
};

const add = async (req, res) => {
  try {
    const productCategory = await ProductCategory.create(req.body);
    res.status(200).json({
      data: productCategory,
      status: "succes",
    });
  } catch (error) {
    console.log(error.message);
  }
};

const delete1 = async (req, res) => {
  try {
    await ProductCategory.destroy({ where: { id: req.params.id } });
    res.status(200).json({
      data: "success",
    });
  } catch (error) {
    console.log(error.message);
  }
};
const getOne = async (req, res) => {
  try {
    const productCategory = await ProductCategory.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json({
      data: productCategory,
    });
  } catch (error) {
    console.log(error.message);
  }
};
const update = async (req, res) => {
  try {
    const productCategory = await ProductCategory.findOne({
      where: { id: req.params.id },
    });

    productCategory.name = req.body.name || productCategory.name;

    const newProductCategory = await productCategory.save();

    res.status(200).json({
      data: newProductCategory,
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
