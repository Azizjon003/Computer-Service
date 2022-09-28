const Vacancy = require("../models/vacancyModel");
const VacancyCategory = require("../models/vacancyCategoryModel");
const SubmitVacancy = require("../models/submitVacancyModel");
const catchErrAsync = require("../utility/catchErrAsync");

const getAll = catchErrAsync(async (req, res, next) => {
  const vacancies = await Vacancy.findAll({
    include: [
      {
        model: VacancyCategory,
      },
      {
        model: SubmitVacancy,
      },
    ],
  }); // required:true

  res.status(200).json({
    data: vacancies,
  });
});

const add = catchErrAsync(async (req, res, next) => {
  const vacancy = await Vacancy.create(req.body);
  res.status(200).json({
    data: vacancy,
  });
});

const delete1 = catchErrAsync(async (req, res, next) => {
  await Vacancy.destroy({ where: { id: req.params.id } });
  res.status(200).json({
    data: "success",
  });
});
const getOne = catchErrAsync(async (req, res, next) => {
  const vacancy = await Vacancy.findOne({
    where: { id: req.params.id },
    include: { model: VacancyCategory },
  });
  res.status(200).json({
    data: vacancy,
  });
});
const update = catchErrAsync(async (req, res, next) => {
  const vacancy = await Vacancy.findOne({ where: { id: req.params.id } });

  vacancy.title = req.body.title || vacancy.title;
  vacancy.description = req.body.description || vacancy.description;
  vacancy.vacancyCategoryId =
    req.body.vacancyCategoryId || vacancy.vacancyCategoryId;

  const newVacancy = await vacancy.save();

  res.status(200).json({
    data: newVacancy,
  });
});

module.exports = {
  add,
  getAll,
  delete1,
  getOne,
  update,
};
