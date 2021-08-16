// const cors = require('cors');
// const config = require('../../src/config/app');
const apiRouter = require('../routes/v1/');
const fs = require('fs');


module.exports = async (app) => {
    //app.use(cors());
    // const a = require("./")

    app.use(apiRouter.routes());
    // app.use(apiRouter1.routes());
    const url = './src/routes/v1';
    const dir = fs.readdirSync(url);
    dir.forEach((filename) => {
    if (filename.includes('.js')) {
        const apiRouter = require('../routes/v1/' + filename);
        app.use(apiRouter.routes());
    }
})
 
    return app;
};


// module.exports = async (app) => {
//     //app.use(cors());
//     app.use(apiRouter.routes());
//     return app;
// };