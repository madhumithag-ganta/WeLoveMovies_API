const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

const reviewsRouter = require("../reviews/reviews.router");
const theatersRouter = require("../theaters/theaters.router");

// nested routing
router.use("/:movieId([0-9]+)/reviews", controller.movieExists, reviewsRouter);
router.use("/:movieId([0-9]+)/theaters", controller.movieExists, theatersRouter);

router.route("/:movieId([0-9]+)").get(controller.read).all(methodNotAllowed);
router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;
