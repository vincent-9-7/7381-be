const searchController = require ('../../controllers/api/v1/search_controller');
const router = require("./");


router.get("/search",searchController.getItem); 


module.exports = router;