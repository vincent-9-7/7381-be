const fruitAndVegController = require ('../../controllers/api/v1/fruit_vegetable_controller');
const router = require("./");

router.get("/allFruits",fruitAndVegController.getAllFruits);

router.get("/allVegetables",fruitAndVegController.getAllVegetables);

router.get("/get/:id",fruitAndVegController.getById);

module.exports = router;