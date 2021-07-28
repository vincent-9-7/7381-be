const Router = require("koa-router"); //koa-router创建router.get/post...
const userController = require ('../../controllers/api/v1/userController')
const router = new Router();

router.get("/", async (ctx) => {
    ctx.body ="SUCCESSs!";
});

router.get("/users",userController.index); //postman 里面 get localhost：8000/users，可看到回复结果
router.get("/users/:id",userController.show); //postman 里面 get localhost：8000/users/2131，可看到回复结果

router.post("/users",userController.store); //postman 里面 get localhost：8000/users，可看到回复结果

router.delete("/users/:id",userController.delete); //postman 里面 get localhost：8000/users/2131，可看到回复结果
router.delete("/users_id/:_id",userController.deleteId); //postman 里面 get localhost：8000/users/2131，可看到回复结果

router.put("/users/:id",userController.update); //postman 里面 get localhost：8000/users/2131，可看到回复结果
router.put("/users_id/:_id",userController.updateId); //postman 里面 get localhost：8000/users/2131，可看到回复结果





module.exports = router;