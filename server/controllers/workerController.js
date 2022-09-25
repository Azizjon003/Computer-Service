const Worker = require("../models/workersModel");
const ServiceType = require("../models/serviseTypesModel");
const ReviewForWorkers = require("../models/reviewForWorkersModel");

const getAll = async (req, res) => {
  try {
    const worker = await Worker.findAll({
      include: [
        {
          model: ServiceType,
        },
        {
          model: ReviewForWorkers,
        },
      ],
    });

    res.status(200).json({
      datas: worker.length,
      data: worker,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const add = async (req, res) => {
  try {
    const worker = await Worker.create(req.body);
    res.status(200).json({
      data: worker,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const delete1 = async (req, res) => {
  try {
    await Worker.destroy({ where: { id: req.params.id } });
    res.status(200).json({
      data: "success",
    });
  } catch (error) {
    console.log(error.message);
  }
};
const getOne = async (req, res) => {
  try {
    const worker = await Worker.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: ServiceType,
        },
        {
          model: ReviewForWorkers,
        },
      ],
    });
    res.status(200).json({
      data: worker,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const update = async (req, res) => {
  try {
    const worker = await Worker.findOne({
      where: { id: req.params.id },
    });

    worker.status = req.body.status || worker.status;

    const newWorker = await worker.save();

    res.status(200).json({
      data: newWorker,
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
