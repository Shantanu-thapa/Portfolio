const express = require("express");

const router = express.Router();

const protect = require("../middleware/authmiddleware");

const{login,signup} = require("../controller/auth");

router.post("/login" , login );
router.post("/signup", signup);

const {
    trackVisitor,
    getVisitorCount
} = require("../controller/count");

const {
    notification
} = require("../controller/notify");


// Public - Track portfolio visitor
router.post("/", trackVisitor);


// Public - Visitor contact / interest
router.post("/contact", notification);


// Protected - Get visitor count
router.get("/stats", protect, getVisitorCount);


module.exports = router;
