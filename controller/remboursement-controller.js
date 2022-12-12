const asyncHandler = require("express-async-handler");
const Remboursement = require("../model/remboursement");

const getRemboursement = asyncHandler(async (req, res) => {
  const remboursementList = await Remboursement.find();

  res.status(200).json({
    description: "Successfully fetched all data!",
    result: remboursementList,
  });
});

const getRemboursementById = asyncHandler(async (req, res) => {
  const remboursement = await Remboursement.findById(req.params.id);
  res.status(200).json({
    description: "Successfully fetched data by id",
    result: remboursement,
  });
});

const setRemboursement = asyncHandler(async (req, res) => {
  await Remboursement.create({
    clientId: req.body.clientId,
    montant: req.body.montant,
    date: req.body.date,
  });
  res.status(200).json({
    description: "Successfully saved data!",
  });
});

const updateRemboursement = asyncHandler(async (req, res) => {
  await Remboursement.findByIdAndUpdate(req.params.id, req.body, { new: true });

  res.status(200).json({
    description: "Successfully updated remboursement data!",
  });
});

const removeRemboursement = asyncHandler(async (req, res) => {
  const remboursement = await Remboursement.findById(req.params.id);
  if (!remboursement) {
    res.status(400);
    throw new Error("Remboursement not found");
  }
  await remboursement.remove();
  res.status(200).json({
    description: "Successfully removed remboursement data!",
  });
});

module.exports = {
  getRemboursement,
  setRemboursement,
  getRemboursementById,
  updateRemboursement,
  removeRemboursement,
};
