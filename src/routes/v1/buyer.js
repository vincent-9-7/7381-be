const Router = require("koa-router"); 
const buyerController = require ('../../controllers/api/v1/buyerController');
const router = new Router();

router.get("/", async (ctx) => {
    ctx.body ="SUCCESSs!";
});

router.get("/buyers",buyerController.index); //postman 里面 get localhost：8000/buyers，可看到回复结果
router.get("/buyers/:id",buyerController.show); //postman 里面 get localhost：8000/buyers/2131，可看到回复结果
router.post("/buyers",buyerController.store); //postman 里面 get localhost：8000/buyers，可看到回复结果
router.put("/buyers/:id",buyerController.updateId); //postman 里面 get localhost：8000/buyers/2131，可看到回复结果

// router.delete("/buyers/:id",buyerController.delete); //postman 里面 get localhost：8000/buyers/2131，可看到回复结果
// router.delete("/buyers_id/:_id",buyerController.deleteId); //postman 里面 get localhost：8000/buyers/2131，可看到回复结果
// router.put("/buyers/:id",buyerController.update); //postman 里面 get localhost：8000/buyers/2131，可看到回复结果






module.exports = router;