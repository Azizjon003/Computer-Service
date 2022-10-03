const ProductCategory = require("../models/productCategoriesModel");
const catchErrAsync = require("../utility/catchErrAsync");

const getAll = catchErrAsync(async (req, res, next) => {
  const productCategory = await ProductCategory.findAll(); // required:true
  res.status(200).json({
    datas: productCategory.length,
    data: productCategory,
    status: "succes",
  });
});

const add = catchErrAsync(async (req, res, next) => {
  const productCategory = await ProductCategory.create(req.body);
  res.status(200).json({
    data: productCategory,
    status: "succes",
  });
});

const delete1 = catchErrAsync(async (req, res, next) => {
  await ProductCategory.destroy({ where: { id: req.params.id } });
  res.status(200).json({
    data: "success",
  });
});
const getOne = catchErrAsync(async (req, res, next) => {
  const productCategory = await ProductCategory.findOne({
    where: { id: req.params.id },
  });
  res.status(200).json({
    data: productCategory,
  });
});
const update = catchErrAsync(async (req, res, next) => {
  const productCategory = await ProductCategory.findOne({
    where: { id: req.params.id },
  });

  productCategory.name = req.body.name || productCategory.name;

  const newProductCategory = await productCategory.save();

  res.status(200).json({
    data: newProductCategory,
  });
});

module.exports = {
  add,
  getAll,
  delete1,
  getOne,
  update,
};
