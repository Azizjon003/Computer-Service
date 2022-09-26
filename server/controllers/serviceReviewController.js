const Worker = require("../models/workersModel");
const ReviewForServiceType = require("../models/reviewForServiceType");

const User = require("../models/userModel");
const ServiceType = require("../models/serviseTypesModel");

const getAll = async (req, res) => {
  try {
    const reviewForServiceType = await ReviewForServiceType.findAll({
      include: [
        {
          model: ServiceType,
        },
        {
          model: User,
        },
      ],
    });

    res.status(200).json({
      datas: reviewForServiceType.length,
      data: reviewForServiceType,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const add = async (req, res) => {
  try {
    const reviewForServiceType = await ReviewForServiceType.create(req.body);
    res.status(200).json({
      data: reviewForServiceType,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const delete1 = async (req, res) => {
  try {
    await ReviewForServiceType.destroy({ where: { id: req.params.id } });
    res.status(200).json({
      data: "success",
    });
  } catch (error) {
    console.log(error.message);
  }
};
const getOne = async (req, res) => {
  try {
    const reviewForServiceType = await ReviewForServiceType.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: ServiceType,
        },
        {
          model: User,
        },
      ],
    });
    res.status(200).json({
      data: reviewForServiceType,
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
};
