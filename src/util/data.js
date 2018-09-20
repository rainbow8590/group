// import Mock from 'mockjs';
// let API_HOST = "http://bh.com";
/* function ajax(router,fn){
    var res;
    if(router == '/index'){
        res = Mock.mock({
            'data|2': [{
                'id|+1':0,
                'activityCode':'@string(7)',
                "activityTitle": "@ctitle(6,9)", // 活动名称
                "activityDate": "@date(MM-dd)", // 活动日期
                "activityBeginTime": "@time(HH:mm)", // 活动开始时间
                "activityEndTime": "@time(HH:mm)", // 活动结束时间
                "activityNowPrice": "@natural(0,10)", // 优惠价
                "activityOldPrice": "@natural(10,100)", // 原价
                "activityGroupNum": "@natural(3,10)", // 满团人数
                "activityBuyNum": "@natural(500,2000)" // 已买人数
            }]
        })
    }else if(router == '/detail'){
        res = Mock.mock({
            'data': {
                'activityTitle': '@ctitle(6,9)',          // 活动标题
                'activityDate': '@date(yyyy-MM-dd)',     // 活动开始日期
                'activityBeginTime': '@time(HH:mm)',    // 活动开始时间
                'activityEndTime': '@time(HH:mm)',      // 活动结束时间
                'activityNowPrice': '@natural(0,10)',   // 优惠价
                'activityOldPrice': '@natural(10,100)',  // 原价
                'activityGroupNum': '@natural(3,10)',   // 团满人数
                'activityNowGroupNum': '@natural(3,5)', // 参团人数
                'activityBuyNum': '@natural(500,2000)', // 已买人数
                'activityBuyStatus':'@boolean(1, 2, true)', // 是否已买
                'activityBuyTime':'@date(yyyy-MM-dd HH:mm:ss)', // 购买时间
                'activityOver': '@boolean(1, 2, true)',  // 活动是否结束
                'activityPay':'@boolean(1, 2, true)', // 是否买过
                'activityType':0  // 0拼团+直接  1 拼团  2 直接
            }
        })
    }

    fn(res)
}
 */


// // 获取活动列表的数据



/* let DEBUG = true;//切换数据入口


function ajax(data = '', fn, method = "get", header = {},router='') {
    if (!DEBUG) {

        wx.request({
            url: config.API_HOST +router + data,
            method: method ? method : 'get',
            data: {},
            header: header ? header : { "Content-Type": "application/json" },
            success: function (res) {
                console.log(API_HOST)
                fn(res);
            }
        });
    } else {

        // 模拟数据
        var res = Mock.mock({
            'error_code': '',
            'error_msg': '',
            'data|10': [{
                'id|+1': 1,
                'img': "@image('200x100', '#4A7BF7','#fff','pic')",
                'title': '@ctitle(3,8)',
                'city': "@county(true)",
                'stock_num': '@integer(0,100)',//库存数量  
                'marketing_start': '@datetime()',
                'marketing_stop': '@now()',
                'price': '@integer(100,2000)',//现价，单位：分  
                'original_price': '@integer(100,3000)'
            }]  
        })
        // 输出结果
       // console.log(JSON.stringify(res, null, 2))
        fn(res);
    }
} */
/* module.exports = {
    ajax: ajax
} */