const mongoose = require("mongoose");

const assuranceSchema = mongoose.Schema(
  {
    type: String,
    prix: String,
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Assurance", assuranceSchema);
