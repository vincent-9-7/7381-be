const productionController = require ('../../controllers/api/v1/production_controller');
const router = require("./");

router.get("/productions",productionController.index); //postman 里面 get localhost：8000/productions，可看到回复结果
router.get("/production/:id",productionController.show); //postman 里面 get localhost：8000/productions/2131，可看到回复结果
router.post("/production",productionController.store); //postman 里面 get localhost：8000/productions，可看到回复结果
router.put("/production/:id",productionController.updateId); //postman 里面 get localhost：8000/productions/2131，可看到回复结果

module.exports = router;