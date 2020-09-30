let API_HOST = "http://xxxx.com";
let DEBUG = true;  // 切换数据入口
var Mock = require('./mock.js')

function ajax(data = '', fn, method = "get", header = {}) {

  if (!DEBUG) {
    wx.request({
      url: config.API_HOST + data,
      method: method ? method : 'get',
      data: {},
      header: header ? header : { "Content-Type": "application/json" },
      success: function (res) {
        fn(res);
      }
    })
  } else {
    // 模拟数据
    var res = Mock.mock({
      'erro_code': '',
      'error_msg': '',
      'data': [
        {
          "id": 346210,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/moviemachine/a448ca6a5f4dafb88067722303ca0cfd96002.jpg",
          "version": "v2d imax",
          "nm": "八佰",
          "preShow": false,
          "sc": 9.2,
          "globalReleased": true,
          "wish": 518898,
          "star": "王千源,张译,姜武",
          "rt": "2020-08-21",
          "showInfo": "今天161家影院放映1189场",
          "showst": 3,
          "wishst": 0
        },
        {
          "id": 1297973,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/moviemachine/40d1e5ac176f1e9258da10a3222dbff7952117.png",
          "version": "v2d imax",
          "nm": "信条",
          "preShow": false,
          "sc": 8.3,
          "globalReleased": true,
          "wish": 61210,
          "star": "约翰·大卫·华盛顿,罗伯特·帕丁森,伊丽莎白·德比茨基",
          "rt": "2020-09-04",
          "showInfo": "今天153家影院放映844场",
          "showst": 3,
          "wishst": 0
        },
        {
          "id": 1217123,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/movie/988ab3d3a50f51f31d090e84da88d5ae3461853.jpg",
          "version": "v2d imax",
          "nm": "夺冠",
          "preShow": false,
          "sc": 0,
          "globalReleased": false,
          "wish": 505917,
          "star": "巩俐,黄渤,吴刚",
          "rt": "2020-09-25",
          "showInfo": "2020-09-25 本周五上映",
          "showst": 4,
          "wishst": 0
        },
        {
          "id": 1211269,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/moviemachine/da8024493c8142c0949f8b72d43934c0351577.jpg",
          "version": "v3d imax",
          "nm": "姜子牙",
          "preShow": false,
          "sc": 0,
          "globalReleased": false,
          "wish": 1305641,
          "star": "郑希,杨凝,图特哈蒙",
          "rt": "2020-10-01",
          "showInfo": "2020-10-01 下周四上映",
          "showst": 4,
          "wishst": 0
        },
        {
          "id": 1210778,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/moviemachine/ca9d0c0268a940d73d62c004d57b957a5241814.jpg",
          "version": "v3d imax",
          "nm": "花木兰",
          "preShow": false,
          "sc": 7.5,
          "globalReleased": true,
          "wish": 216004,
          "star": "刘亦菲,甄子丹,杰森·斯考特·李",
          "rt": "2020-09-11",
          "showInfo": "今天163家影院放映1059场",
          "showst": 3,
          "wishst": 0
        },
        {
          "id": 1328712,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/202ea88abd2abf2aa1964487d61edab64556414.jpg",
          "version": "v2d imax",
          "nm": "我和我的家乡",
          "preShow": false,
          "sc": 0,
          "globalReleased": false,
          "wish": 336639,
          "star": "黄渤,葛优,范伟",
          "rt": "2020-10-01",
          "showInfo": "2020-10-01 下周四上映",
          "showst": 4,
          "wishst": 0
        },
        {
          "id": 1216053,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/d1a953193e001c8dec96c17ea5075ec0788729.jpg",
          "version": "v3d imax",
          "nm": "急先锋",
          "preShow": false,
          "sc": 0,
          "globalReleased": false,
          "wish": 263876,
          "star": "成龙,杨洋,艾伦",
          "rt": "2020-09-30",
          "showInfo": "2020-09-30 下周三上映",
          "showst": 4,
          "wishst": 0
        },
        {
          "id": 1247287,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/movie/9ce80d2aa1aec49b7f999305c237bace2082932.jpg",
          "version": "",
          "nm": "死无对证",
          "preShow": false,
          "sc": 8.2,
          "globalReleased": true,
          "wish": 12851,
          "star": "里卡多·斯卡马乔,米丽娅姆·莱昂内,法布里齐奥·本蒂沃利奥",
          "rt": "2020-09-18",
          "showInfo": "今天158家影院放映644场",
          "showst": 3,
          "wishst": 0
        },
        {
          "id": 1277457,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/374f7addeb978a634b0f5e8665f0bce4357962.jpg",
          "version": "",
          "nm": "麦路人",
          "preShow": false,
          "sc": 8.2,
          "globalReleased": true,
          "wish": 14605,
          "star": "郭富城,杨千嬅,万梓良",
          "rt": "2020-09-17",
          "showInfo": "今天129家影院放映333场",
          "showst": 3,
          "wishst": 0
        },
        {
          "id": 2212,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/0bd752877b95b8eac2d0704c783f372c4625354.jpg",
          "version": "",
          "nm": "菊次郎的夏天",
          "preShow": false,
          "sc": 0,
          "globalReleased": false,
          "wish": 20787,
          "star": "北野武,关口雄介,岸本加世子",
          "rt": "2020-09-25",
          "showInfo": "2020-09-25 本周五上映",
          "showst": 4,
          "wishst": 0
        },
        {
          "id": 1331267,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/moviemachine/cbe423e7511c6ee1b19034550ea782452468297.jpg",
          "version": "",
          "nm": "一点就到家",
          "preShow": true,
          "sc": 0,
          "globalReleased": false,
          "wish": 26226,
          "star": "刘昊然,彭昱畅,尹昉",
          "rt": "2020-10-04",
          "showInfo": "2020-10-04 下周日上映",
          "showst": 4,
          "wishst": 0
        },
        {
          "id": 1207303,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/moviemachine/bbedacda94dde6d1e62379abc1258e9c231479.jpg",
          "version": "",
          "nm": "邻里美好的一天",
          "preShow": false,
          "sc": 8.5,
          "globalReleased": true,
          "wish": 6773,
          "star": "汤姆·汉克斯,马修·瑞斯,苏珊·卡莉奇·沃森",
          "rt": "2020-09-18",
          "showInfo": "今天77家影院放映126场",
          "showst": 3,
          "wishst": 0
        },
        {
          "id": 489894,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/moviemachine/7e6118993dbf0f304ac1dad4667fddda207318.jpg",
          "version": "",
          "nm": "我在时间尽头等你",
          "preShow": false,
          "sc": 7.9,
          "globalReleased": true,
          "wish": 642546,
          "star": "李鸿其,李一桐,范伟",
          "rt": "2020-08-25",
          "showInfo": "今天35家影院放映67场",
          "showst": 3,
          "wishst": 0,
          "comingTitle": "8月25日 周二"
        },
        {
          "id": 1283967,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/movie/7dc973175415282c23bb3e8b9401c15d3903238.jpg",
          "version": "",
          "nm": "蓝色防线",
          "preShow": false,
          "sc": 9.2,
          "globalReleased": true,
          "wish": 13300,
          "rt": "2020-09-18",
          "showInfo": "今天98家影院放映191场",
          "showst": 3,
          "wishst": 0,
          "comingTitle": "9月18日 周五"
        },
        {
          "id": 1263349,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/movie/4dc7bde9dbdbb73ecd9b14d2752d17c43681386.jpg",
          "version": "",
          "nm": "萌宠流浪记",
          "preShow": false,
          "sc": 8.3,
          "globalReleased": true,
          "wish": 4519,
          "star": "比格·肖恩,露西·海尔,帕梅拉·阿德龙",
          "rt": "2020-09-18",
          "showInfo": "今天69家影院放映115场",
          "showst": 3,
          "wishst": 0,
          "comingTitle": "9月18日 周五"
        },
        {
          "id": 1219866,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/4027ab12e2e618d627f761e6433d3c291885261.jpg",
          "version": "",
          "nm": "通往春天的列车",
          "preShow": false,
          "sc": 7.1,
          "globalReleased": true,
          "wish": 21142,
          "star": "李岷城,任素汐,何巍然",
          "rt": "2020-09-17",
          "showInfo": "今天92家影院放映167场",
          "showst": 3,
          "wishst": 0,
          "comingTitle": "9月17日 周四"
        },
        {
          "id": 1215300,
          "haspromotionTag": false,
          "img": "http://p1.meituan.net/w.h/movie/1818ce14669a901792c052caf048475a640420.jpg",
          "version": "",
          "nm": "假面饭店",
          "preShow": false,
          "sc": 7.9,
          "globalReleased": true,
          "wish": 29830,
          "star": "木村拓哉,长泽雅美,小日向文世",
          "rt": "2020-09-04",
          "showInfo": "今天33家影院放映58场",
          "showst": 3,
          "wishst": 0,
          "comingTitle": "9月4日 周五"
        },
        {
          "id": 1298859,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/84a2c5e0959ac2d625039690553c19d1454744.jpg",
          "version": "",
          "nm": "木兰：横空出世",
          "preShow": false,
          "sc": 0,
          "globalReleased": false,
          "wish": 176016,
          "star": "张琦,赵路,邵敏佳",
          "rt": "2020-10-03",
          "showInfo": "2020-10-03 下周六上映",
          "showst": 4,
          "wishst": 0,
          "comingTitle": "10月3日 周六"
        },
        {
          "id": 1230199,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/cdb164c203fc0c2465278ddd165e91c84503798.jpg",
          "version": "",
          "nm": "小妇人",
          "preShow": false,
          "sc": 8.7,
          "globalReleased": true,
          "wish": 134084,
          "star": "西尔莎·罗南,艾玛·沃特森,佛罗伦斯·珀",
          "rt": "2020-08-25",
          "showInfo": "今天17家影院放映25场",
          "showst": 3,
          "wishst": 0,
          "comingTitle": "8月25日 周二"
        },
        {
          "id": 416,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/moviemachine/c2496a7290a72eac6081321898c347693550574.jpg",
          "version": "v2d imax",
          "nm": "盗梦空间",
          "preShow": false,
          "sc": 9,
          "globalReleased": true,
          "wish": 25892,
          "star": "莱昂纳多·迪卡普里奥,渡边谦,约瑟夫·高登-莱维特",
          "rt": "2020-08-28",
          "showInfo": "今天13家影院放映23场",
          "showst": 3,
          "wishst": 0,
          "comingTitle": "8月28日 周五"
        },
        {
          "id": 1262682,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/movie/e9472f71bfde600cbdcfd87b714f96021574748.jpg",
          "version": "",
          "nm": "辉夜大小姐想让我告白",
          "preShow": false,
          "sc": 7.8,
          "globalReleased": true,
          "wish": 23669,
          "star": "平野紫耀,桥本环奈,佐野勇斗",
          "rt": "2020-09-11",
          "showInfo": "今天14家影院放映23场",
          "showst": 3,
          "wishst": 0,
          "comingTitle": "9月11日 周五"
        },
        {
          "id": 1284572,
          "haspromotionTag": false,
          "img": "http://p0.meituan.net/w.h/moviemachine/27e15446e9e4999fa54bbad940b5a8363531802.jpg",
          "version": "v3d imax",
          "nm": "1/2的魔法",
          "preShow": false,
          "sc": 9.1,
          "globalReleased": true,
          "wish": 14583,
          "star": "汤姆·赫兰德,克里斯·帕拉特,茱莉亚·路易斯-德瑞弗斯",
          "rt": "2020-08-19",
          "showInfo": "今天9家影院放映14场",
          "showst": 3,
          "wishst": 0,
          "comingTitle": "8月19日 周三"
        }
      ]
    })
    fn(res);
  }
}

module.exports = {
  ajax: ajax
}
