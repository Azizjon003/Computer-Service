const Sales = require("../models/salesModel");
const catchErrAsync = require("../utility/catchErrAsync");

const getAll = catchErrAsync(async (req, res, next) => {
  const sales = await Sales.findAll(); // required:true
  res.status(200).json({
    datas: sales.length,
    data: sales,
    status: "succes",
  });
});

const add = catchErrAsync(async (req, res, next) => {
  const sale = await Sales.create(req.body);
  res.status(200).json({
    data: sale,
    status: "succes",
  });
});

const delete1 = catchErrAsync(async (req, res, next) => {
  await Sales.destroy({ where: { id: req.params.id } });
  res.status(200).json({
    data: "success",
  });
});
const getOne = catchErrAsync(async (req, res, next) => {
  const brand = await Sales.findOne({ where: { id: req.params.id } });
  res.status(200).json({
    data: brand,
  });
});
const update = catchErrAsync(async (req, res, next) => {
  const sale = await Sales.findOne({ where: { id: req.params.id } });

  sale.discount = req.body.discount || sale.discount;

  const newsale = await sale.save();

  res.status(200).json({
    data: newsale,
  });
});

module.exports = {
  add,
  getAll,
  delete1,
  getOne,
  update,
};
