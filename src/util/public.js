// import MD from './md5';

// 显示加群码弹窗
export function showGroupCode(obj){
    obj.show= true;
    obj.hide = false;
}

// 显示加群码弹窗
export function closeGroupCode(obj){
    obj.show = false;
    obj.hide = true;
}
//打开邀请好友弹窗
export function showFriend(obj){
    obj.showFriend = true;
    obj.hideFriend = false;
  }
  // 关闭邀请好友弹窗
export function closeFriend(obj){
    obj.showFriend = false;
    obj.hideFriend = true;
}

/* 
**时间戳转时间 
* timestamp  param 时间戳
* Symbol     param 年月日拼接符号
* hasSecond  param 是否要秒
*/
export function timestampToTime(timestamp,Symbol,hasSecond) {
    var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear();
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) ;
    var D = date.getDate();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    return {
        Y,
        M,
        D,
        h,
        m,
        s
    };
}


export function downLoadFiles(obj) {
    // console.info("准备下载。。。");
    let that = this;
    let success = obj.success; //下载成功
    let fail = obj.fail; //下载失败
    let urls = obj.urls;  //下载地址 数组，支持多个 url下载 [url1,url2]
    console.log(urls)
    // var urlsLength = obj.urls.length;  // 有几个url需要下载
    let savedFilePaths = [];
    console.log(obj.urls.length)
    for (let i = 0; i < obj.urls.length; i++) {
        downLoadFiles({
            url: urls[i],
            success: function (res) {
                console.dir(res);
                //一个文件下载保存成功
                let savedFilePath = res.savedFilePath;

                savedFilePath.push(savedFilePath);
                
                if (savedFilePaths.length == obj.urls.length) { //如果所有的url 才算成功
                    if (success){
                        success(savedFilePaths)
                    }

                }
            },
            fail: function (e) {
                console.info("下载失败");
                if (fail) {
                    fail(e);
                }

            }
        })

    }


}