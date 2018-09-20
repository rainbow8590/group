/**
 * 单文件下载并且保存，
 * obj params 下载的配置信息
 *     url: 下载资源路径
 *     success: 下载成功的处理函数
 *     fail: 下载失败的处理函数
 */
function downloadSaveFile(obj) {
    let success = obj.success;
    let fail = obj.fail;
    let url = obj.url;
    wx.downloadFile({
        url: url,
        success: function (res) {
            wx.saveFile({
                tempFilePath: res.tempFilePath,
                success: function (result) {
                    if (success) {
                        success(result);
                    }
                },
                fail: function (e) {
                    console.info("保存一个文件失败");
                    if (fail) {
                        fail(e);
                    }
                }
            })

        },
        fail: function (e) {
            console.info("下载一个文件失败");
            if (fail) {
                fail(e);
            }

        }
    })
}


/**
 * 多文件下载并且保存，强制规定，必须所有文件下载成功才算返回成功
 * obj params 下载的配置信息
 *     urls: 下载资源路径集合 Array
 *     success: 全部下载成功的处理函数
 *     fail: 下载失败的处理函数
 */
export default function downloadSaveFiles(obj) {
    let success = obj.success; 
    let fail = obj.fail; 
    let urls = obj.urls;  
    let savedFilePaths = []; //储存下载成功的本地临时路径
    let urlsLength = urls.length;  // 需要下载文件的个数

    for (let i = 0; i < urlsLength; i++) {
        downloadSaveFile({
            url: urls[i],
            success: function (res) {
                let savedFilePath = res.savedFilePath;            
                savedFilePaths.push(savedFilePath);
                 //如果所有的文件都下载下来了 才进行下载完成后的操作
                if (savedFilePaths.length == urlsLength) {
                    if (success){
                        success(savedFilePaths)
                    }
                }
            },
            fail: function (e) {
                if (fail) {
                    fail(e);
                }

            }
        })

    }

}
