const mongoose = require("mongoose");

const remboursementSchema = mongoose.Schema(
  {
    clientId: String,
    montant: Number,
    date: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Remboursement", remboursementSchema);
