const orderController = require ('../../controllers/api/v1/order_controller');
const router = require("./");

router.get("/orders",orderController.index); //postman 里面 get localhost：8000/orders，可看到回复结果
router.get("/order/:id",orderController.show); //postman 里面 get localhost：8000/orders/2131，可看到回复结果
router.post("/order",orderController.store); //postman 里面 get localhost：8000/orders，可看到回复结果
router.put("/order/:id",orderController.updateId); //postman 里面 get localhost：8000/orders/2131，可看到回复结果

module.exports = router;