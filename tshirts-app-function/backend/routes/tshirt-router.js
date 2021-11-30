const express = require("express");

const TshirtController = require("../controllers/tshirt-controller");

const router = express.Router();

router.post("/tshirt", TshirtController.createTshirt);
router.put("/tshirt/:id", TshirtController.updateTshirt);
router.delete("/tshirt/:id", TshirtController.deleteTshirt);
router.get("/tshirt/:id", TshirtController.getTshirtById);
router.get("/tshirts", TshirtController.getTshirts);

module.exports = router;
