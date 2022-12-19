const express = require("express");
const mainControllers = require("../controllers/mainControllers");
const router = express.Router();

router.get("/", mainControllers.home);
router.get("/headphones", mainControllers.headphones);
router.get("/earphones", mainControllers.earphones);
router.get("/speakers", mainControllers.speakers);
router.get("/xx99-mark-one", mainControllers.xx1);
router.get("/xx99-mark-two", mainControllers.xx2);
router.get("/xx59", mainControllers.xx59);
router.get("/zx9", mainControllers.zx9);
router.get("/zx7", mainControllers.zx7);
router.get("/yx1", mainControllers.yx1);

module.exports = router;
