const Brands = require("../models/brandsModel");

const getAll = async (req, res) => {
  try {
    const brands = await Brands.findAll(); // required:true
    res.status(200).json({
      datas: brands.length,
      data: brands,
      status: "succes",
    });
  } catch (error) {
    console.log(error.message);
  }
};

const add = async (req, res) => {
  try {
    const brands = await Brands.create(req.body);
    res.status(200).json({
      data: brands,
      status: "succes",
    });
  } catch (error) {
    console.log(error.message);
  }
};

const delete1 = async (req, res) => {
  try {
    await Brands.destroy({ where: { id: req.params.id } });
    res.status(200).json({
      data: "success",
    });
  } catch (error) {
    console.log(error.message);
  }
};
const getOne = async (req, res) => {
  try {
    const brand = await Brands.findOne({ where: { id: req.params.id } });
    res.status(200).json({
      data: brand,
    });
  } catch (error) {
    console.log(error.message);
  }
};
const update = async (req, res) => {
  try {
    const brands = await Brands.findOne({ where: { id: req.params.id } });

    brands.name = req.body.name || brands.name;

    const newBrands = await brands.save();

    res.status(200).json({
      data: newBrands,
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
