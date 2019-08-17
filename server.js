//1.加载http核心模块
var http = require("http")

//2.使用http.createServer()方法创建一个web服务器
var server = http.createServer()

//3.服务器要干嘛？
//提供服务：对 数据的服务
//发请求
//接收请求
//给个反馈（发送响应）
//注册request请求事件
//当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数：回调处理函数
server.on('request',function(req,res){
	console.log('收到客户端的请求'+ req.url)
	res.end("hello node.js")
})

//4.绑定端口号，启动服务器
server.listen(3000,function(){
	console.log('服务器启动成功了')
})