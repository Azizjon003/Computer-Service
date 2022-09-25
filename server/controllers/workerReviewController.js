const Worker = require("../models/workersModel");
const WorkerReview = require("../models/reviewForWorkersModel");

const getAll = async (req, res) => {
  try {
    const workerReview = await WorkerReview.findAll({
      include: [
        {
          model: Worker,
        },
      ],
    });

    res.status(200).json({
      datas: workerReview.length,
      data: workerReview,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const add = async (req, res) => {
  try {
    const workerReview = await WorkerReview.create(req.body);
    res.status(200).json({
      data: workerReview,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const delete1 = async (req, res) => {
  try {
    await WorkerReview.destroy({ where: { id: req.params.id } });
    res.status(200).json({
      data: "success",
    });
  } catch (error) {
    console.log(error.message);
  }
};
const getOne = async (req, res) => {
  try {
    const workerReview = await WorkerReview.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Worker,
        },
      ],
    });
    res.status(200).json({
      data: workerReview,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const update = async (req, res) => {
  try {
    const workerReview = await WorkerReview.findOne({
      where: { id: req.params.id },
    });

    workerReview.body = req.body.body || workerReview.body;
    workerReview.rating = req.body.rating || workerReview.rating;

    const newWorkerReview = await workerReview.save();

    res.status(200).json({
      data: newWorkerReview,
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
