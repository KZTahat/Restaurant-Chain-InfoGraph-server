const express = require('express');

const restaurantController = require('../controllers/restaurantController.js');
const router = express.Router();

router.route("/getallrestaurants").get(restaurantController.getAllRestaurants);
router.route("/getlandmarks/:restaurantId").get(restaurantController.getLandmarksForRestaurant);
router.route("/addnewrestaurant").post(restaurantController.addNewRestaurant);

module.exports = router;
