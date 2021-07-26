const express = require("express");
const router = express.Router();
const BusService = require("../controllers/busservice");

router.post("/v1/api/busservice", BusService.postBusDetails);
router.get("/v1/api/busservice/:id", BusService.eachBusDetail);

module.exports = router;
