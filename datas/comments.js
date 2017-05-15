var Mock = require('mockjs');

var data = Mock.mock({
	"total": 26,
	"currentPage": 1,
	"list|5": [{
		"uName": "@cname",
		"cDate": "@datetime('MM月dd日')",
		"cTexts": "@csentence(10, 500)"
	}]
})

module.exports = data;