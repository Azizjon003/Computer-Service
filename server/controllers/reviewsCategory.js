const ReviewCategory = require("../models/reviewsCategory");
const User = require("../models/userModel");

const getAll = async (req, res) => {
  try {
    const reviewsCategory = await ReviewCategory.findAll({
      include: [
        {
          model: User,
        },
      ],
    });

    res.status(200).json({
      datas: reviewsCategory.length,
      data: reviewsCategory,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const add = async (req, res) => {
  try {
    const reviewsCategory = await ReviewCategory.create(req.body);
    res.status(200).json({
      data: reviewsCategory,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const delete1 = async (req, res) => {
  try {
    await ReviewCategory.destroy({ where: { id: req.params.id } });
    res.status(200).json({
      data: "success",
    });
  } catch (error) {
    console.log(error.message);
  }
};
const getOne = async (req, res) => {
  try {
    const reviewsCategory = await ReviewCategory.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: User,
        },
      ],
    });
    res.status(200).json({
      data: reviewsCategory,
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
