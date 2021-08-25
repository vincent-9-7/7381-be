const buyerController = require ('../../controllers/api/v1/buyer_controller');
const router = require("./");


router.get("/buyers",buyerController.index); //postman 里面 get localhost：8000/buyers，可看到回复结果
router.get("/buyer/:id",buyerController.show); //postman 里面 get localhost：8000/buyers/2131，可看到回复结果
router.post("/buyer",buyerController.store); //postman 里面 get localhost：8000/buyers，可看到回复结果
router.put("/buyer/:id",buyerController.updateId); //postman 里面 get localhost：8000/buyers/2131，可看到回复结果
router.post("/buyer/registration",buyerController.registration); //postman 里面 get localhost：8000/buyers，可看到回复结果
router.post("/buyer/login",buyerController.login);
// router.delete("/buyers/:id",buyerController.delete); //postman 里面 get localhost：8000/buyers/2131，可看到回复结果
// router.delete("/buyers_id/:_id",buyerController.deleteId); //postman 里面 get localhost：8000/buyers/2131，可看到回复结果
// router.put("/buyers/:id",buyerController.update); //postman 里面 get localhost：8000/buyers/2131，可看到回复结果






module.exports = router;