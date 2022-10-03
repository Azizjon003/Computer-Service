const SubmitVacancy = require("../models/submitVacancyModel");

const User = require("../models/userModel");
const Vacancy = require("../models/vacancyModel");
const vacancyCategories = require("../models/vacancyCategoryModel");
const catchErrAsync = require("../utility/catchErrAsync");

const getAll = catchErrAsync(async (req, res, next) => {
  const submitVacancy = await SubmitVacancy.findAll({
    include: [
      {
        model: User,
      },
      {
        model: Vacancy,
        include: [
          {
            model: vacancyCategories,
          },
        ],
      },
    ],
  });

  res.status(200).json({
    data: submitVacancy,
  });
});

const add = catchErrAsync(async (req, res, next) => {
  const submitVacancy = await SubmitVacancy.create(req.body);
  res.status(200).json({
    data: submitVacancy,
  });
});

const delete1 = catchErrAsync(async (req, res, next) => {
  await SubmitVacancy.destroy({ where: { id: req.params.id } });
  res.status(200).json({
    data: "success",
  });
});
const getOne = catchErrAsync(async (req, res, next) => {
  const submitVacancy = await SubmitVacancy.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: submitVacancy,
      },
      {
        model: Vacancy,
        include: [
          {
            model: vacancyCategories,
          },
        ],
      },
    ],
  });
  res.status(200).json({
    data: submitVacancy,
  });
});

const update = catchErrAsync(async (req, res, next) => {
  const submitVacancy = await SubmitVacancy.findOne({
    where: { id: req.params.id },
  });

  submitVacancy.status = req.body.status || submitVacancy.status;
  submitVacancy.submitVacancyId =
    req.body.submitVacancyId || submitVacancy.submitVacancyId;
  submitVacancy.vacancyId = req.body.vacancyId || submitVacancy.vacancyId;

  const newSubmitVacancy = await submitVacancy.save();

  res.status(200).json({
    data: newSubmitVacancy,
  });
});

module.exports = {
  add,
  getAll,
  delete1,
  getOne,
  update,
};
