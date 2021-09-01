const multer = require('koa-multer');
const router = require("./");
const fs = require('fs');
const path = require('path');


let storage = multer.diskStorage({
    //设置文件存储的位置
    destination: function(req, file, cb) {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let day = date.getDate();
        let dir = './src/public/images/'+ year + month + day;
        if(!fs.existsSync(dir)) {
            fs.mkdirSync(dir,{
                recursive: true
            });
        }
        cb(null,dir);
    },
    filename: function(req, file, cb) {
        //设置上传文件的名称
        let fileName = file.fieldname + "-" + Date.now() + path.extname(file.originalname);
        cb(null,fileName);
    }

});

var upload = multer({ storage: storage});
//上传接口
router.post('/img', upload.single('images'), async ctx => {
    //这里需要返回地址
    let path = ctx.req.file.path;
    path = ctx.origin + '' + path.replace('src/public','');
    ctx.body = {
        imageAddress:path
    };

});


module.exports = router;