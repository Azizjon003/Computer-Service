const Sales = require("../models/salesModel");

const getAll = async (req, res) => {
  try {
    const sales = await Sales.findAll(); // required:true
    res.status(200).json({
      datas: sales.length,
      data: sales,
      status: "succes",
    });
  } catch (error) {
    console.log(error.message);
  }
};

const add = async (req, res) => {
  try {
    const sale = await Sales.create(req.body);
    res.status(200).json({
      data: sale,
      status: "succes",
    });
  } catch (error) {
    console.log(error.message);
  }
};

const delete1 = async (req, res) => {
  try {
    await Sales.destroy({ where: { id: req.params.id } });
    res.status(200).json({
      data: "success",
    });
  } catch (error) {
    console.log(error.message);
  }
};
const getOne = async (req, res) => {
  try {
    const brand = await Sales.findOne({ where: { id: req.params.id } });
    res.status(200).json({
      data: brand,
    });
  } catch (error) {
    console.log(error.message);
  }
};
const update = async (req, res) => {
  try {
    const sale = await Sales.findOne({ where: { id: req.params.id } });

    sale.discount = req.body.discount || sale.discount;

    const newsale = await sale.save();

    res.status(200).json({
      data: newsale,
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
