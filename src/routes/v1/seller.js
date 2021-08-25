const sellerController = require ('../../controllers/api/v1/seller_controller');
const router = require("./");


router.get("/sellers",sellerController.index); //postman 里面 get localhost：8000/sellers，可看到回复结果
router.get("/seller/:id",sellerController.show); //postman 里面 get localhost：8000/sellers/2131，可看到回复结果
router.post("/seller",sellerController.store); //postman 里面 get localhost：8000/sellers，可看到回复结果
router.put("/seller/:id",sellerController.updateId); 
router.post("/seller/registration",sellerController.registration); //postman 里面 get localhost：8000/buyers，可看到回复结果
router.post("/seller/login",sellerController.login);
module.exports = router;