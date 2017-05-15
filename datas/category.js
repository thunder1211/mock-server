var Mock = require('mockjs');

var data = Mock.mock({
	"catName": "@cword(3,12)",
	"catID": "@increment",
	"src": "@image('1070x120', '#50B347', '#000', 'Mock-category.js')",
	"list|12": [{
		"daoName": "@csentence(10, 20)",
		"daoJing": "音频出自某某某",
		"daoDate": "@datetime('MM月dd日')",
		"dID": "@increment",
		"duration": 2400000,
		"speaker": "@cword(3)"
	}]
})

module.exports = data;