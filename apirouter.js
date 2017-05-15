var express = require('express');
var Mock = require('mockjs');
var bodyParser = require('body-parser');
var multer = require('multer');
var cookieParser = require('cookie-parser');

var apiRouter = express.Router();

apiRouter.use(bodyParser.json()); // for parsing application/json
apiRouter.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//apiRouter.use(multer({dest:'./'})); // for parsing multipart/form-data
apiRouter.use(cookieParser());

// 该路由使用的中间件
apiRouter.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    console.log('req:'+req.originalUrl);
    console.log(req.cookies.SESSIONID);
    next();
});

//登录
apiRouter.post('/login', function (req, res) {
    var msg = '', isOk = 0
    var data = {}
    if (req.body.id == 'admin' && req.body.pw =='admin') {
        isOk = 1
        msg = '登录成功'
    } else {
        isOk = 0
        msg = '登录失败!'
    }
    res.cookie('SESSIONID', '1234567890ABVDEFGHI', { expires: new Date(Date.now() + 60 * 60 * 1000)})
    res.json({
        ok: isOk,
        msg: msg,
        data: data
    })
})

//获取home(首页)数据
apiRouter.get('/home', function (req, res) {
		var data = require('./datas/home.js');
    res.json({
        code: 0,
        msg: '',
        data: data
    })
})

//获取category(栏目页)数据
apiRouter.get('/category/:id', function (req, res) {
		var data = require('./datas/category.js');
    res.json({
        code: 0,
        msg: '',
        data: data
    })
})

//获取detail(详情页)数据
apiRouter.get('/detail', function (req, res) {
		var data = require('./datas/detail.js');
    res.json({
        code: 0,
        msg: '',
        data: data
    })
})

//获取comments(评论)数据
apiRouter.get('/comments', function (req, res) {
		var data = require('./datas/comments.js');
    res.json({
        code: 0,
        msg: '',
        data: data
    })
})

module.exports = apiRouter;