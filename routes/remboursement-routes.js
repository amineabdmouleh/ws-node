const express = require("express");
const router = express.Router();
const {
  getRemboursement,
  setRemboursement,
  getRemboursementById,
  updateRemboursement,
  removeRemboursement,
} = require("../controller/remboursement-controller");

router.get("", getRemboursement);
router.get("/:id", getRemboursementById);
router.post("", setRemboursement);
router.patch("/:id", updateRemboursement);
router.delete("/:id", removeRemboursement);

module.exports = router;
