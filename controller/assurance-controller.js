const asyncHandler = require("express-async-handler");
const Assurance = require("../model/assurance");

const getAssurance = asyncHandler(async (req, res) => {
  const assuranceList = await Assurance.find();

  res.status(200).json({
    description: "Successfully fetched all data!",
    result: assuranceList,
  });
});

const getAssuranceById = asyncHandler(async (req, res) => {
  const assurance = await Assurance.findById(req.params.id);
  res.status(200).json({
    description: "Successfully fetched data by id",
    result: assurance,
  });
});

const setAssurance = asyncHandler(async (req, res) => {
  await Assurance.create({
    type: req.body.type,
    prix: req.body.prix,
    description: req.body.description,
  });
  res.status(200).json({
    description: "Successfully saved data!",
  });
});

const updateAssurance = asyncHandler(async (req, res) => {
  await Assurance.findByIdAndUpdate(req.params.id, req.body, { new: true });

  res.status(200).json({
    description: "Successfully updated assurance data!",
  });
});

const removeAssurance = asyncHandler(async (req, res) => {
  const assurance = await Assurance.findById(req.params.id);
  if (!assurance) {
    res.status(400);
    throw new Error("Assurance not found");
  }
  await assurance.remove();
  res.status(200).json({
    description: "Successfully removed assurance data!",
  });
});

module.exports = {
  getAssurance,
  setAssurance,
  getAssuranceById,
  updateAssurance,
  removeAssurance,
};
