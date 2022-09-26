const Service = require("../models/servicesModel");
const ServiseTypes = require("../models/serviseTypesModel");

const getAll = async (req, res) => {
  try {
    const service = await Service.findAll({
      include: ServiseTypes,
    });

    res.status(200).json({
      data: service,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const add = async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(200).json({
      data: service,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const delete1 = async (req, res) => {
  try {
    await Service.destroy({ where: { id: req.params.id } });
    res.status(200).json({
      data: "success",
    });
  } catch (error) {
    console.log(error.message);
  }
};
const getOne = async (req, res) => {
  try {
    const service = await Service.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json({
      data: service,
    });
  } catch (error) {
    console.log(error.message);
  }
};
const update = async (req, res) => {
  try {
    const service = await Service.findOne({
      where: { id: req.params.id },
    });

    service.name = req.body.name || service.name;

    const newService = await service.save();

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
