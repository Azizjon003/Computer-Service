const Products = require("../models/productsModel");
const ServiceType = require("../models/serviseTypesModel");
const catchErrAsync = require("../utility/catchErrAsync");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

const search = catchErrAsync(async (req, res, next) => {
  const searchName = req.params.name;
  console.log(searchName);

  let sum = [];

  const dataProduct = await Products.findAll({
    where: {
      name: { [Op.iLike]: `%${searchName}%` },
    },
  });

  const dataService = await ServiceType.findAll({
    where: {
      name: { [Op.iLike]: `%${searchName}%` },
    },
  });

  sum.push(dataProduct);
  sum.push(dataService);

  res.status(200).json({
    length: sum.length,
    data: sum,
    status: "success",
  });
});

module.exports = { search };
