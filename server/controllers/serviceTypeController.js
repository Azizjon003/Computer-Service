const Services = require("../models/servicesModel");
const ServiseTypes = require("../models/serviseTypesModel");
const Workers = require("../models/workersModel");
const ServiceTypeReview = require("../models/reviewForServiceType");
const catchErrAsync = require("../utility/catchErrAsync");

const getAll = catchErrAsync(async (req, res, next) => {
  const serviceType = await ServiseTypes.findAll({
    include: [
      {
        model: Services,
      },
      {
        model: Workers,
      },
      {
        model: ServiceTypeReview,
      },
    ],
  });

  res.status(200).json({
    data: serviceType,
  });
});

const add = catchErrAsync(async (req, res, next) => {
  const serviceType = await ServiseTypes.create(req.body);
  res.status(200).json({
    data: serviceType,
  });
});

const delete1 = catchErrAsync(async (req, res, next) => {
  await ServiseTypes.destroy({ where: { id: req.params.id } });
  res.status(200).json({
    data: "success",
  });
});
const getOne = catchErrAsync(async (req, res, next) => {
  const serviceType = await ServiseTypes.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Services,
      },
      {
        model: Workers,
      },
    ],
  });
  res.status(200).json({
    data: serviceType,
  });
});
const update = catchErrAsync(async (req, res, next) => {
  const serviceType = await ServiseTypes.findOne({
    where: { id: req.params.id },
  });

  serviceType.name = req.body.name || serviceType.name;
  serviceType.price = req.body.price || serviceType.name;

  const newService = await serviceType.save();

  res.status(200).json({
    data: newService,
  });
});

module.exports = {
  add,
  getAll,
  delete1,
  getOne,
  update,
};
