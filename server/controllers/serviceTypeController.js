const Services = require("../models/servicesModel");
const ServiseTypes = require("../models/serviseTypesModel");
const Workers = require("../models/workersModel");

const getAll = async (req, res) => {
  try {
    const serviceType = await ServiseTypes.findAll({
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
  } catch (error) {
    console.log(error.message);
  }
};

const add = async (req, res) => {
  try {
    const serviceType = await ServiseTypes.create(req.body);
    res.status(200).json({
      data: serviceType,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const delete1 = async (req, res) => {
  try {
    await ServiseTypes.destroy({ where: { id: req.params.id } });
    res.status(200).json({
      data: "success",
    });
  } catch (error) {
    console.log(error.message);
  }
};
const getOne = async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error.message);
  }
};
const update = async (req, res) => {
  try {
    const serviceType = await ServiseTypes.findOne({
      where: { id: req.params.id },
    });

    serviceType.name = req.body.name || serviceType.name;
    serviceType.price = req.body.price || serviceType.name;

    const newService = await serviceType.save();

    res.status(200).json({
      data: newService,
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
