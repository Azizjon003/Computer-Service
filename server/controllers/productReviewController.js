const Products = require("../models/productsModel");
const ReviewForProducts = require("../models/reviewForProducts");
const User = require("../models/userModel");

const getAll = async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error.message);
  }
};

const add = async (req, res) => {
  try {
    const reviewProducts = await ReviewForProducts.create(req.body);
    res.status(200).json({
      data: reviewProducts,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const delete1 = async (req, res) => {
  try {
    await ReviewForProducts.destroy({ where: { id: req.params.id } });
    res.status(200).json({
      data: "success",
    });
  } catch (error) {
    console.log(error.message);
  }
};
const getOne = async (req, res) => {
  try {
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
