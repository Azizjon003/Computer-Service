const Vacancy = require("../models/vacancyModel");
const VacancyCategory = require("../models/vacancyCategoryModel");
const catchErrAsync = require("../utility/catchErrAsync");

const getAll = catchErrAsync(async (req, res, next) => {
  const vacancyCategory = await VacancyCategory.findAll({ include: Vacancy }); // required:true
  res.status(200).json({
    data: vacancyCategory,
  });
});

const add = catchErrAsync(async (req, res, next) => {
  const vacancyCategory = await VacancyCategory.create(req.body);
  res.status(200).json({
    data: vacancyCategory,
  });
});

const delete1 = catchErrAsync(async (req, res, next) => {
  await VacancyCategory.destroy({ where: { id: req.params.id } });
  res.status(200).json({
    data: "success",
  });
});
const getOne = catchErrAsync(async (req, res, next) => {
  const vacancyCategory = await VacancyCategory.findOne({
    where: { id: req.params.id },
    include: { model: Vacancy },
  });
  res.status(200).json({
    data: vacancyCategory,
  });
});
const update = catchErrAsync(async (req, res, next) => {
  const vacancyCategory = await VacancyCategory.findOne({
    where: { id: req.params.id },
  });

  console.log(vacancyCategory);

  vacancyCategory.name = req.body.name || vacancyCategory.name;

  const newVacancyCategory = await vacancyCategory.save();

  res.status(200).json({
    data: newVacancyCategory,
  });
});

module.exports = {
  add,
  getAll,
  delete1,
  getOne,
  update,
};
