const Location = require("../models/locationsModel");
const Products = require("../models/productsModel");
const User = require("../models/userModel");
const catchErrAsync = require("../utility/catchErrAsync");

const getAll = catchErrAsync(async (req, res, next) => {
  const locations = await Location.findAll({
    include: [
      {
        model: User,
      },
      {
        model: Products,
      },
    ],
  }); // required:true
  res.status(200).json({
    data: locations,
    status: "succes",
  });
});

const add = catchErrAsync(async (req, res, next) => {
  console.log(req.body);
  const user = await Location.create(req.body);
  res.status(200).json({
    data: user,
    status: "succes",
  });
});

const delete1 = catchErrAsync(async (req, res, next) => {
  await Location.destroy({ where: { id: req.params.id } });
  res.status(200).json({
    data: "success",
  });
});
const getOne = catchErrAsync(async (req, res, next) => {
  const loc = await Location.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: User,
      },
      {
        model: Products,
      },
    ],
  });
  res.status(200).json({
    data: loc,
  });
});
const update = catchErrAsync(async (req, res, next) => {
  const loc = await Location.findOne({ where: { id: req.params.id } });

  loc.country = req.body.country || loc.country;
  loc.city = req.body.city || loc.city;
  loc.district = req.body.district || loc.district;
  loc.street = req.body.street || loc.street;
  loc.home = req.body.home || loc.home;

  const newLocation = await loc.save();

  console.log(newLocation);

  res.status(200).json({
    data: newLocation,
  });
});

module.exports = {
  add,
  getAll,
  delete1,
  getOne,
  update,
};
