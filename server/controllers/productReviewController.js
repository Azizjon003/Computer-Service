const Products = require("../models/productsModel");
const ReviewForProducts = require("../models/reviewForProducts");
const User = require("../models/userModel");
const catchErrAsync = require("../utility/catchErrAsync");

const getAll = catchErrAsync(async (req, res, next) => {
  const reviewProducts = await ReviewForProducts.findAll({
    include: [
      {
        model: Products,
      },
      {
        model: User,
      },
    ],
  });

  res.status(200).json({
    datas: reviewProducts.length,
    data: reviewProducts,
  });
});

const add = catchErrAsync(async (req, res, next) => {
  const reviewProducts = await ReviewForProducts.create(req.body);
  res.status(200).json({
    data: reviewProducts,
  });
});

const delete1 = catchErrAsync(async (req, res, next) => {
  await ReviewForProducts.destroy({ where: { id: req.params.id } });
  res.status(200).json({
    data: "success",
  });
});
const getOne = catchErrAsync(async (req, res, next) => {
  const reviewProducts = await ReviewForProducts.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Products,
      },
      {
        model: User,
      },
    ],
  });
  res.status(200).json({
    data: reviewProducts,
  });
});

module.exports = {
  add,
  getAll,
  delete1,
  getOne,
};
