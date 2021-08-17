const itemController = require ('../../controllers/api/v1/item_controller');
const router = require("./");

router.get("/items",itemController.index); //postman 里面 get localhost：8000/items，可看到回复结果
router.get("/item/:id",itemController.show); //postman 里面 get localhost：8000/items/2131，可看到回复结果
router.post("/item",itemController.store); //postman 里面 get localhost：8000/items，可看到回复结果
router.put("/item/:id",itemController.updateId); //postman 里面 get localhost：8000/items/2131，可看到回复结果

module.exports = router;