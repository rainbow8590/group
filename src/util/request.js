import wepy from 'wepy'
function wxRequest(params,url,loading=true){
    // let htp = 'https://api.gaosiedu.com/happyplan'
    let htp = 'http://faq_dev.gaosiedu.com/api'
    return new Promise((resolve,reject)=>{
        if(loading){
            wx.showLoading({
                title:'加载中',
                mask: true ,
            })
        }
        wepy.request({
            url: htp + url,
            method:params.method||'GET',
            data: params.data||{},
            header: {
                'Content-Type': params.method == 'post' ? 'application/x-www-form-urlencoded' : 'application/json',
                'XX-Token': wx.getStorageSync('token')
            },
            success: res=>{
                
                if(res.statusCode == 200){
                    // 登录成功
                    if(res.data.code == 1){
                        resolve(res)
                    }else{
                        wx.showToast({
                            title:res.data.msg,
                            icon:'none',
                        })
                    }
                  }else{
                    wx.showToast({
                       title:'请求出现错误',
                       icon:'none',
                     })
                  }
                  setTimeout(()=>{
                    wx.hideLoading();
                  },500)
                  
                
            },
            fail: err =>{
                console.log(err)
                wx.showToast({
                    title:'网络或服务器出错',
                    icon:'none',
                })
                reject(new Error('Network request failed'))
            }
        })
    })
}
export default wxRequest;




