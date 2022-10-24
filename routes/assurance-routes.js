const express = require("express");
const router = express.Router();
const {
  getAssurance,
  setAssurance,
  getAssuranceById,
  updateAssurance,
  removeAssurance,
} = require("../controller/assurance-controller");

router.get("", getAssurance);
router.get("/:id", getAssuranceById);
router.post("", setAssurance);
router.patch("/:id", updateAssurance);
router.delete("/:id", removeAssurance);

module.exports = router;
