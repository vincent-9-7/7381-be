const fruitAndVegController = require ('../../controllers/api/v1/fruit_vegetable_controller');
const router = require("./");

router.get("/allFruits",fruitAndVegController.getAllFruits);

router.get("/allVegetables",fruitAndVegController.getAllVegetables);

module.exports = router;