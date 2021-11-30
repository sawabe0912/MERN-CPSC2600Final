const express = require("express");

const WebsiteController = require("../controllers/website-controller");

const router = express.Router();

router.post("/website", WebsiteController.createWebsite);

module.exports = router;
