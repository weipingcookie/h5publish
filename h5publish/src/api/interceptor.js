import axios from 'axios'

let instance = axios.create({
  headers: {
    'content-type': 'application/json'
  }
})

// http request 拦截器
instance.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem('token')
    if (!token ) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.authorization = 'JSESSIONID=DBB6AC2C1DB1C1DA9F59E9DC0E5C5234;Cms_userId=USIF1570850391147527;Cms_Jsession=DBB6AC2C1DB1C1DA9F59E9DC0E5C5234'  //请求头加上token
	  console.log('添加cookie')
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })
  
  // http response 拦截器
  instance.interceptors.response.use(
    response => {
      //拦截响应，做统一处理 
      if (response.data.code==200) {
			console.log('响应成功')
      }
      return response
    },
    //接口错误状态处理，也就是说无响应时的处理
    error => {
      return Promise.reject(error.response.status) // 返回接口返回的错误信息
    })
	
	export default instance