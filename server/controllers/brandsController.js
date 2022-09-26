const Brands = require("../models/brandsModel");
const catchErrAsync = require("../utility/catchErrAsync");

const getAll = catchErrAsync(async (req, res, next) => {
  const brands = await Brands.findAll(); // required:true
  res.status(200).json({
    datas: brands.length,
    data: brands,
    status: "succes",
  });
});

const add = catchErrAsync(async (req, res, next) => {
  const brands = await Brands.create(req.body);
  res.status(200).json({
    data: brands,
    status: "succes",
  });
});

const delete1 = catchErrAsync(async (req, res, next) => {
  await Brands.destroy({ where: { id: req.params.id } });
  res.status(200).json({
    data: "success",
  });
});

const getOne = catchErrAsync(async (req, res, next) => {
  const brand = await Brands.findOne({ where: { id: req.params.id } });
  res.status(200).json({
    data: brand,
  });
});

const update = catchErrAsync(async (req, res, next) => {
  const brands = await Brands.findOne({ where: { id: req.params.id } });

  brands.name = req.body.name || brands.name;

  const newBrands = await brands.save();

  res.status(200).json({
    data: newBrands,
  });
});

module.exports = {
  add,
  getAll,
  delete1,
  getOne,
  update,
};
