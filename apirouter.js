var express = require('express');
var Mock = require('mockjs');
var bodyParser = require('body-parser');
var multer = require('multer');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var users = require('./datas/users').items;

var findUser = function(name, password){
    return users.find(function(item){
        return item.name === name && item.password === password;
    });
};

var apiRouter = express.Router();

apiRouter.use(bodyParser.json()); // for parsing application/json
apiRouter.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//apiRouter.use(multer({dest:'./'})); // for parsing multipart/form-data
apiRouter.use(cookieParser());

// 该路由使用的中间件
apiRouter.use(function timeLog(req, res, next) {
    console.log('Time: ', Date().toLocaleString());
    console.log('req:'+req.originalUrl);
    next();
});

var identityKey = 'SESSIONID';
apiRouter.use(session({
    name: identityKey,
    secret: 'test',  // 用来对session id相关的cookie进行签名
    store: new FileStore(),  // 本地存储session（文本文件，也可以选择其他store，比如redis的）
    saveUninitialized: false,  // 是否自动保存未初始化的会话，建议false
    resave: false,  // 是否每次都重新保存会话，建议false
    rolling: true,
    cookie: {
        maxAge: 10 * 60 * 1000  // 有效期，单位是毫秒
    }
}));

// login以外的路由 验证登录态
apiRouter.use(function (req, res, next) {
    if (req.url === '/login') {
        next();
    } else {
        var sess = req.session;
        var loginID = sess.loginID;
        var isLogined = !!loginID;
        if(isLogined){
            next();
        } else {
            res.json({code: 3, msg:'登录超时!'});
            return;
        }
    }
});



// *
// 下面是API接口
// *

//登录
apiRouter.post('/login', function (req, res) {
    var sess = req.session,
        user = findUser(req.body.id, req.body.pw);

    if (user) {
        req.session.regenerate(function (err) {
            if (err) {
                return res.json({code:2, msg:'登录失败!'})
            }
            req.session.loginID = user.name
            res.json({code: 0, msg: '登录成功'})
        })
    } else {
        res.json({code:1, msg: '账号或密码错误'})
    }
})
//登出
apiRouter.get('/logout', function (req, res) {
    req.session.destroy(function(err) {
        if(err){
            res.json({code: 2, msg: '退出登录失败'});
            return;
        }
        
        // req.session.loginUser = null;
        res.clearCookie(identityKey);
        res.json({code: 0, msg: '退出成功'});
    });
})

//获取home(首页)数据
apiRouter.get('/home', function (req, res) {
    var sess = req.session;
    var loginID = sess.loginID;
    var isLogined = !!loginID;
    if(!isLogined){
        res.json({code: 2, msg:'登录失败!'})
        return;
    }else{
        var data = require('./datas/home.js');
        res.json({
            code: 0,
            msg: '',
            data: data
        })
    }
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