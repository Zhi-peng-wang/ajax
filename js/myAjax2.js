function obj2str(obj) {
    /*
               "userName": "wanzghipeng",
                "userPwd": "123"
                "t": "121354654864"
     */
    // obj.t = new Date().getTime();
    var res = [];
    for (var key in obj){
        res.push(encodeURIComponent(key)+"="+encodeURIComponent(obj[key]));//[userName=wanzghipeng, userPwd=123]
    }
    // 通过此方法将，转换成&
    return res.join("&");//userName=wanzghipeng&userPwd=123
}
function ajax(type, url, obj, timeout, sucess, error) {
    //0.将传过来的obj转换成字符串
    var str = obj2str(obj);//key=value&key2=value2
    //1.创建一个异步对象
    var xmlhttp, timer;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    //2.设置请求方式和请求地址
    /*
        method：请求的类型；GET 或 POST
        url：文件在服务器上的位置
        async：true（异步）或 false（同步）
     */
    if (type === "GET"){
        xmlhttp.open(type, url+"?"+str, true);
        //3.发送请求
        xmlhttp.send();
    } else {
        xmlhttp.open(type, url, true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        //3.发送请求
        xmlhttp.send(str);
    }

    //4.监听状态的变化
    xmlhttp.onreadystatechange = function () {
        /*
            0: 请求未初始化
            1: 服务器连接已建立
            2: 请求已接收
            3: 请求处理中
            4: 请求已完成，且响应已就绪
        */
        if (xmlhttp.readyState === 4){
            clearInterval(timer);
            //判断状态码即请求是否成功
            if (xmlhttp.status >= 200&&xmlhttp.status <300 || xmlhttp.status ===304){
                //5.处理返回的结果
                // console.log("接收到服务器返回的数据");
                sucess(xmlhttp);
            } else {
                // console.log("对不起");
                error(xmlhttp);
            }

        }
    }
    //判断外界是否传入了超时时间
    if (timeout){
        timer = setInterval(function () {
            console.log("中断请求");
            //中断请求
            xmlhttp.abort();
            //关闭计时器
            clearInterval(timer);
        }, timeout)
    }
}