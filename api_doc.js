// 接口文档

// 登录
url: '/login'
method: 'post'
request: {id: String, pw: String}
response: {code: Number, msg: String}
          //code:0, msg: 登录成功
          //code:1, msg: 账号或密码错误
          //code:2, msg: 登录超时或已退出 **后面其它接口登录超时时用到


// 登出
url: '/logout'
method: 'get'
request: {} //无
response: {code: Number, msg: String}
          //code:0, msg: 退出成功
          //code:2, msg: 退出失败



// 首页
url: '/home'
method: 'get'
request: {} //无
response: {code: Number, msg: String, data: Object}
Ex:       {
              "code": 0,
              "msg": "",
              "data": {
                  //　＊＊＊顶部导航
                  // catName: 栏目名称
                  // catPID: 父栏目的ID
                  // catID: 栏目ID
                  // children： 子栏目
                  "menus": [
                      {
                          "catName": "导航一",
                          "catPID": 0,
                          "catID": 1
                      },
                      {
                          "catName": "导航二",
                          "catPID": 0,
                          "catID": 2
                      },
                      {
                          "catName": "导航三",
                          "catPID": 0,
                          "catID": 3
                      },
                      {
                          "catName": "导航四",
                          "catPID": 0,
                          "catID": 4
                      },
                      {
                          "catName": "导航五",
                          "catPID": 0,
                          "catID": 5,
                          "children": [
                              {
                                  "catName": "子导航1",
                                  "catPID": 5,
                                  "catID": 6
                              },
                              {
                                  "catName": "子导航2",
                                  "catPID": 5,
                                  "catID": 7
                              },
                              {
                                  "catName": "子导航3",
                                  "catPID": 5,
                                  "catID": 8
                              },
                              {
                                  "catName": "子导航4",
                                  "catPID": 5,
                                  "catID": 9
                              }
                          ]
                      }
                  ],
                  //　＊＊＊轮播图 (可以链接到“栏目页”或者“音频详情页”)
                  // src：图片地址
                  // "catName": 栏目名称,
                  // "catID": 栏目ID,
                  // "daoName": 音频的名称(如果直接链接到音频详情) - 可选,
                  // "daoJing": 音频出处(如果直接链接到音频详情) - 可选,
                  // "daoDate": 音频日期 - 可选,
                  // "dID": 音频ID - 可选
                  "banners": [
                      {
                          "src": "http://dummyimage.com/1070x320/50B347/000&text=Mock-1.js",
                          "catName": "学周信布术什书史见",
                          "catID": 10,
                          "daoName": "为共接联地石作最据该并务想。",
                          "daoJing": "音频出自某某某",
                          "daoDate": "2017-05-31",
                          "dID": 11
                      },
                      {
                          "src": "http://dummyimage.com/1070x320/ffc107/f00&text=Mock-2.js",
                          "catName": "参半我也系研",
                          "catID": 12,
                          "daoName": "有我联包回出状百级千线团。",
                          "daoJing": "音频出自某某某",
                          "daoDate": "2017-05-31",
                          "dID": 13
                      },
                      {
                          "src": "http://dummyimage.com/1070x320/03a9f4/fff&text=Mock-3.js",
                          "catName": "化次名设取往们",
                          "catID": 14
                      }
                  ],
                  //　＊＊＊轮播图上的导航
                  // "catName": 栏目名称,
                  // "catID": 栏目ＩＤ
                  "sideMenus": [
                      {
                          "catName": "侧栏导航一",
                          "catID": 15
                      },
                      {
                          "catName": "侧栏导航二",
                          "catID": 16
                      },
                      {
                          "catName": "侧栏导航三",
                          "catID": 17
                      },
                      {
                          "catName": "侧栏导航四",
                          "catID": 18
                      },
                      {
                          "catName": "侧栏导航五",
                          "catID": 19
                      },
                      {
                          "catName": "侧栏导航六",
                          "catID": 20
                      }
                  ],
                  //　＊＊＊最近更新
                  "newest": [
                      {
                          "catName": "乡村歌曲",
                          "catID": 21,
                          "daoName": "原位理它处两必写产号活动全第里头象。",
                          "daoJing": "音频出自某某某",
                          "daoDate": "08月06日",
                          "dID": 22
                      },
                      {
                          "catName": "爵士歌曲",
                          "catID": 23,
                          "daoName": "积参须意书史度心每火然管个产现总价。",
                          "daoJing": "音频出自某某某",
                          "daoDate": "01月14日",
                          "dID": 24
                      },
                      {
                          "catName": "爵士歌曲",
                          "catID": 25,
                          "daoName": "当织原这而口备精住元多。",
                          "daoJing": "音频出自某某某",
                          "daoDate": "11月08日",
                          "dID": 26
                      },
                      {
                          "catName": "乡村歌曲",
                          "catID": 27,
                          "daoName": "加点提易然个着半从单因越律那效始便四长。",
                          "daoJing": "音频出自某某某",
                          "daoDate": "04月29日",
                          "dID": 28
                      },
                      {
                          "catName": "流行歌曲",
                          "catID": 29,
                          "daoName": "头题放转类速层形打标共理战百影马验高。",
                          "daoJing": "音频出自某某某",
                          "daoDate": "08月11日",
                          "dID": 30
                      },
                      {
                          "catName": "乡村歌曲",
                          "catID": 31,
                          "daoName": "当易效格事置交据知以及常进话米感证次业。",
                          "daoJing": "音频出自某某某",
                          "daoDate": "08月19日",
                          "dID": 32
                      }
                  ],
                  //　＊＊＊推荐
                  "recommend": [
                      {
                          "catName": "古典歌曲",
                          "catID": 33,
                          "daoName": "整二发非清毛往证龙京快斗委并增周但。",
                          "daoJing": "音频出自某某某",
                          "daoDate": "07月05日",
                          "dID": 34
                      },
                      {
                          "catName": "经典歌曲",
                          "catID": 35,
                          "daoName": "育记发都又则调果决集省结。",
                          "daoJing": "音频出自某某某",
                          "daoDate": "12月23日",
                          "dID": 36
                      },
                      {
                          "catName": "流行歌曲",
                          "catID": 37,
                          "daoName": "派商间年造机却质养将包统特即意名四代。",
                          "daoJing": "音频出自某某某",
                          "daoDate": "11月12日",
                          "dID": 38
                      },
                      {
                          "catName": "古典歌曲",
                          "catID": 39,
                          "daoName": "都说并都山白长候治置之中家设领工。",
                          "daoJing": "音频出自某某某",
                          "daoDate": "12月09日",
                          "dID": 40
                      },
                      {
                          "catName": "流行歌曲",
                          "catID": 41,
                          "daoName": "情头农业酸选价作号所飞志方完准活。",
                          "daoJing": "音频出自某某某",
                          "daoDate": "04月17日",
                          "dID": 42
                      },
                      {
                          "catName": "民谣歌曲",
                          "catID": 43,
                          "daoName": "但适派看命眼放领他音三业要相。",
                          "daoJing": "音频出自某某某",
                          "daoDate": "08月09日",
                          "dID": 44
                      }
                  ],
                  //　＊＊＊热门
                  "hottest": [
                      {
                          "catName": "经典歌曲",
                          "catID": 45,
                          "daoName": "自社里提战包生采走团情众持出规。",
                          "daoJing": "音频出自某某某",
                          "daoDate": "03月26日",
                          "dID": 46
                      },
                      {
                          "catName": "流行歌曲",
                          "catID": 47,
                          "daoName": "但事流志变际织立史下了小。",
                          "daoJing": "音频出自某某某",
                          "daoDate": "11月28日",
                          "dID": 48
                      },
                      {
                          "catName": "古典歌曲",
                          "catID": 49,
                          "daoName": "使风术儿得而从消布只术包了该。",
                          "daoJing": "音频出自某某某",
                          "daoDate": "06月23日",
                          "dID": 50
                      },
                      {
                          "catName": "经典歌曲",
                          "catID": 51,
                          "daoName": "而进为族难群集些第主往广最号最当。",
                          "daoJing": "音频出自某某某",
                          "daoDate": "10月13日",
                          "dID": 52
                      },
                      {
                          "catName": "乡村歌曲",
                          "catID": 53,
                          "daoName": "民火手打动品集本只前那气被因第。",
                          "daoJing": "音频出自某某某",
                          "daoDate": "05月19日",
                          "dID": 54
                      },
                      {
                          "catName": "乡村歌曲",
                          "catID": 55,
                          "daoName": "才示等治千性命史受最验间质在难么制圆。",
                          "daoJing": "音频出自某某某",
                          "daoDate": "08月18日",
                          "dID": 56
                      }
                  ],
                  //　＊＊＊每日更新
                  // catName：栏目名称
                  // catID: 此栏目ID
                  // list: 此栏目下 最新5个音频 （注： 里面的catID 应该都是一样的，也就是上面的catID）
                  "daily": {
                      "catName": "每日更新",
                      "catID": 57,
                      "list": [
                          {
                              "catName": "每日更新",
                              "catID": 57,
                              "daoName": "五面观次音带反里因白参门样至证争八会已照。",
                              "daoJing": "音频出自某某某",
                              "daoDate": "07月09日",
                              "dID": 59
                          },
                          {
                              "catName": "每日更新",
                              "catID": 57,
                              "daoName": "写价属以却回么流本族电或算但东原等美。",
                              "daoJing": "音频出自某某某",
                              "daoDate": "11月12日",
                              "dID": 61
                          },
                          {
                              "catName": "每日更新",
                              "catID": 57,
                              "daoName": "定太眼表统运众以支类处正半其老书。",
                              "daoJing": "音频出自某某某",
                              "daoDate": "10月11日",
                              "dID": 63
                          },
                          {
                              "catName": "每日更新",
                              "catID": 57,
                              "daoName": "完音百率千展收深列每权低论。",
                              "daoJing": "音频出自某某某",
                              "daoDate": "03月15日",
                              "dID": 65
                          }
                      ]
                  },
                  //　＊＊＊每周更新
                  "sunday": {
                      "catName": "每日更新",
                      "catID": 66,
                      "list": [
                          {
                              "catName": "每日更新",
                              "catID": 66,
                              "daoName": "周最两好国持原周证相气例感算如被间做每。",
                              "daoJing": "音频出自某某某",
                              "daoDate": "10月04日",
                              "dID": 68
                          },
                          {
                              "catName": "每日更新",
                              "catID": 66,
                              "daoName": "通律开历联验等她而向毛层极支动权千容。",
                              "daoJing": "音频出自某某某",
                              "daoDate": "11月13日",
                              "dID": 70
                          },
                          {
                              "catName": "每日更新",
                              "catID": 66,
                              "daoName": "难都被在件便持温得织政名场它资值。",
                              "daoJing": "音频出自某某某",
                              "daoDate": "08月25日",
                              "dID": 72
                          },
                          {
                              "catName": "每日更新",
                              "catID": 66,
                              "daoName": "它术加些决积公话先不心果规加其那设。",
                              "daoJing": "音频出自某某某",
                              "daoDate": "01月01日",
                              "dID": 74
                          }
                      ]
                  },
                  //　＊＊＊见证
                  // src： 图片地址
                  "testimony": {
                      "catName": "客户见证",
                      "catID": 75,
                      "src": "http://dummyimage.com/250x80/03a9f4/fff&text=Mock.js"
                  },
                  //　＊＊＊关注微信
                  // src： 图片地址
                  "wechat": {
                      "src": "http://dummyimage.com/250x120/03a9f4/fff&text=Mock.js"
                  }
              }
          }
          //code:2, msg: 登录超时或已退出



// 栏目页 
// id 是栏目ID
url: '/category/:id'
method: 'get'
request: {} //无
response: {code: Number, msg: String, data: Object}
Ex:       {
              "code": 0,
              "msg": "",
              "data": {
                  // src： 栏目图片地址
                  // "duration": 音频时长， 单位秒,
                  // "speaker": 演讲人
                  "catName": "原难织已运根起你",
                  "catPID": 3,
                  "catID": 76,
                  "list": [
                      {
                          "daoName": "儿面美许还七厂但满道代且土且部术条如。",
                          "daoJing": "音频出自某某某",
                          "daoDate": "09月30日",
                          "dID": 77,
                          "duration": 240,
                          "speaker": "通我资"
                      },
                      {
                          "daoName": "决我着等感图克话代运亲认决手便声前水直引。",
                          "daoJing": "音频出自某某某",
                          "daoDate": "12月13日",
                          "dID": 78,
                          "duration": 240,
                          "speaker": "严报完"
                      },
                      {
                          "daoName": "专近级办受市想置你公论正议。",
                          "daoJing": "音频出自某某某",
                          "daoDate": "09月12日",
                          "dID": 79,
                          "duration": 240,
                          "speaker": "子却设"
                      }
                  ]
              }
          }
          //code:2, msg: 登录超时或已退出



// 音频详情页 
url: '/detail'
method: 'get'
request: {dID: Number}
response: {code: Number, msg: String, data: Object}
Ex:       {
            "code": 0,
            "msg": "",
            "data": {
              // url: 音频地址
              // daoHtml: 文字内容 （带html标签）
              "catID": 89,
              "catName": "车断治些",
              "daoName": "点正三整己交家么了处白",
              "daoJing": "音频出自某某某",
              "daoDate": "12月14日",
              "dID": 90,
              "duration": 244,
              "speaker": "场合究",
              "url": "http://api.zanmeishi.com/song/p/27853.mp3",
              "daoHtml": "南具圆平器米正型而音路持从格战毛。层火号十前么从等快提他提文。人标世音主新造装单我规则入权查。养代深约海影果从白己具住性声连。<br>际起六专由证老样过养民要道给本题。采成强权又张适等参况便观照器七。<br>历片片制太真备处与易省条色线非种。置它五红示和角状手取该白到。军度红种就全步省义变识维边。"
            }
          }
          //code:2, msg: 登录超时或已退出



// 分享 （属于 音频详情页） 
url: '/comments'
method: 'get'
request: {dID: Number}
response: {code: Number, msg: String, data: Object}
Ex:       {
            "code": 0,
            "msg": "",
            "data": {
                // total: 总分享数
                // currentPage: 当前页 （每页显示5条, 写死）
                // list：分享内容
                "total": 26,
                "currentPage": 1,
                "list": [
                    // uName：分享人名字
                    // cDate：分享时间
                    // cTexts： 分享文字内容
                    {
                        "uName": "邱军",
                        "cDate": "01月19日",
                        "cTexts": "还按料线制收社状主件市料眼片众开成为利极们学持民速造程会线增型争号总美争民律比社阶你难变社斗使意须列共命没之代听提思题利南对满细治入近五。"
                    },
                    {
                        "uName": "曾洋",
                        "cDate": "01月23日",
                        "cTexts": "第路约回改设毛商细四派系结目入家派金已些定转号被采化么或什群色于点么且别性都千易参局节较养及具法连况矿山活管定动养求车进报常。"
                    },
                    {
                        "uName": "曾明",
                        "cDate": "12月29日",
                        "cTexts": "人标思山状志原专用用权养党县命只小先政现维提集育示和条相带规火龙家件群备力产容深体而代制料体阶往整县着也无五百感真压十济众叫造部象值如那省或率提儿万最上选件商只达际表立京该由几总月收织候观办权界群也论长又律理水生战据比只安立油比比织工提打车且理再大变电油老包大住期走平六已史天变总代接场家拉参分东该论干车己利周子线统而外论称战回年五济层风大走。"
                    },
                    {
                        "uName": "韩桂英",
                        "cDate": "03月15日",
                        "cTexts": "质便律需青结保是往教层又比定温划它队计查种思号点当二思米院群观取展层说选例调小采起结权算该达做际六队的白织月越象须治便属成律清且放果使文回几作太精第所各查商华离花通区千天象水者信容增办者科口知四质了布任过和目重海市族约体命装品现利质增候包日被这再点林适看员界品步术统需三美科二同严内局来花矿交民外张前列之消开任成特后些从音列重分我将集等边感研切成动了满统形龙现型置身九达条省深了日化合美至准理信准它较严下亲应断内得存志己确关商中九眼区经该处光满属产参本林部被加成业算构山机头族图道战青单山管县红市矿集是清学主断些六表任里交被规号科实建长群教思准转条间连几得件消划油历半斗代土同广至家革共据是史局立准影达理安土越物江只史者各山根色好技高最队七解面动根物型道次么况利速很通组两动争众今写议得况上土象领性形能实律着采更队合称土类连例较律林义安治她起术大建平天己越目安理信队资复三身响建图况市命育处间安身众生受主身解层己治业月装低政进百门然图合无两种三都各持八。"
                    },
                    {
                        "uName": "乔军",
                        "cDate": "09月24日",
                        "cTexts": "立回具马火如具养离引下易时形根说层过儿府世县最成革变己认为识如该在先须形铁被以受王间地电组至光连片选很直开团南成任每受后油传他听者素革而产容二结解究什花素细设高并拉出四形活放制状往格资外务江名加信光百族式难格革子标当展大五低较共消何史属领张满代应战严空何开极定构照九把军元知织米头把响值步斗认使消飞千流。"
                    }
                ]
            }
        }
          //code:2, msg: 登录超时或已退出