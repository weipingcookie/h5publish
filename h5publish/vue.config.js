module.exports = {
	publicPath: './',
	assetsDir:'assets',
	devServer: {
		open: false, //浏览器自动打开页面
		host: "localhost", //如果是真机测试，就使用这个IP
		port: 8089,
		https: false,
		hotOnly: false, //热更新（webpack已实现了，这里false即可）
		proxy: {
			//配置跨域
			'/api': {
				target: "http://172.20.169.24:8080/CMS/h5page/h5Page",  //后端本地接口地址,IP需要每次重新填写
				ws: true,
				changOrigin: true,
				pathRewrite: {
					'^/api': '/'
				}
			}
		}
	}
}
