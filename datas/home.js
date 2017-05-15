var Mock = require('mockjs');

var data = Mock.mock({
	"menus": [{
		"catName": "导航一",
		"catID": "@increment"
	}, {
		"catName": "导航二",
		"catID": "@increment"
	}, {
		"catName": "导航三",
		"catID": "@increment"
	}, {
		"catName": "导航四",
		"catID": "@increment"
	}, {
		"catName": "导航五",
		"catID": "@increment",
		"children": [{
			"catName": "子导航1",
			"catID": "@increment"
		}, {
			"catName": "子导航2",
			"catID": "@increment"
		}, {
			"catName": "子导航3",
			"catID": "@increment"
		}, {
			"catName": "子导航4",
			"catID": "@increment"
		}]
	}],
	"banners": [{
		"src": "@image('1070x320', '#50B347', '#000', 'Mock-1.js')",
		"catName": "@cword(3,12)",
		"catID": "@increment",
		"daoName": "@csentence(10, 20)",
		"daoJing": "音频出自某某某",
		"daoDate": "@now('yyyy-MM-dd')",
		"dID": "@increment"
	}, {
		"src": "@image('1070x320', '#ffc107', '#f00', 'Mock-2.js')",
		"catName": "@cword(3,12)",
		"catID": "@increment",
		"daoName": "@csentence(10, 20)",
		"daoJing": "音频出自某某某",
		"daoDate": "@now('yyyy-MM-dd')",
		"dID": "@increment"
	}, {
		"src": "@image('1070x320', '#03a9f4', '#fff', 'Mock-3.js')",
		"catName": "@cword(3,12)",
		"catID": "@increment"
	}],
	"sideMenus": [{
		"catName": "侧栏导航一",
		"catID": "@increment"
	}, {
		"catName": "侧栏导航二",
		"catID": "@increment"
	}, {
		"catName": "侧栏导航三",
		"catID": "@increment"
	}, {
		"catName": "侧栏导航四",
		"catID": "@increment"
	}, {
		"catName": "侧栏导航五",
		"catID": "@increment"
	}, {
		"catName": "侧栏导航六",
		"catID": "@increment"
	}],
	"newest|6": [{
		"catName": "@pick(['说唱音乐', '古典歌曲', '爵士歌曲', '经典歌曲', '流行歌曲', '乡村歌曲', '民谣歌曲'])",
		"catID": "@increment",
		"daoName": "@csentence(10, 20)",
		"daoJing": "音频出自某某某",
		"daoDate": "@datetime('MM月dd日')",
		"dID": "@increment"
	}],
	"recommend|6": [{
		"catName": "@pick(['说唱音乐', '古典歌曲', '爵士歌曲', '经典歌曲', '流行歌曲', '乡村歌曲', '民谣歌曲'])",
		"catID": "@increment",
		"daoName": "@csentence(10, 20)",
		"daoJing": "音频出自某某某",
		"daoDate": "@datetime('MM月dd日')",
		"dID": "@increment"
	}],
	"hottest|6": [{
		"catName": "@pick(['说唱音乐', '古典歌曲', '爵士歌曲', '经典歌曲', '流行歌曲', '乡村歌曲', '民谣歌曲'])",
		"catID": "@increment",
		"daoName": "@csentence(10, 20)",
		"daoJing": "音频出自某某某",
		"daoDate": "@datetime('MM月dd日')",
		"dID": "@increment"
	}],
	"daily": {
		"catName": "每日更新",
		"catID": "@increment",
		"list|4": [{
			"catName": "每日更新",
			"catID": "@increment",
			"daoName": "@csentence(10, 20)",
			"daoJing": "音频出自某某某",
			"daoDate": "@datetime('MM月dd日')",
			"dID": "@increment"
		}]
	},
	"sunday": {
		"catName": "每日更新",
		"catID": "@increment",
		"list|4": [{
			"catName": "每日更新",
			"catID": "@increment",
			"daoName": "@csentence(10, 20)",
			"daoJing": "音频出自某某某",
			"daoDate": "@datetime('MM月dd日')",
			"dID": "@increment"
		}]
	},
	"testimony": {
		"catName": "客户见证",
		"catID": "@increment",
		"src": "@image('250x80', '#03a9f4', '#fff', 'Mock.js')"
	},
	"wechat": {
		"src": "@image('250x120', '#03a9f4', '#fff', 'Mock.js')"
	}
})

module.exports = data;