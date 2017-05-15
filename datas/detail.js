var Mock = require('mockjs');

var data = Mock.mock({
	"catID": "@increment",
	"catName": "@cword(3,7)",
	"src": "@image('1070x120', '#50B347', '#000', '.')",
	"daoName": "@cword(10, 20)",
	"daoJing": "音频出自某某某",
	"daoDate": "@datetime('MM月dd日')",
	"dID": "@increment",
	"duration": 244,
	"speaker": "@cword(3)",
	"url": "http://api.zanmeishi.com/song/p/27853.mp3",
	"daoText": "@cparagraph(3, 10)",
	"daoHtml": "@cparagraph(2, 4)<br>@cparagraph(2, 4)<br>@cparagraph(2, 4)"
})

module.exports = data;