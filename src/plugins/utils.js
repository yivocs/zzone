var log = function () {
    console.log(...arguments)
}

var ajax = function(method, path, data, callback) {
  // 发送登录数据
  // 创建 AJAX 对象
  var r = new XMLHttpRequest()
  // 设置请求方法和请求地址
  r.open(method, path, true)
  // 设置发送的数据的格式
  // r.withCredentials = true
  r.setRequestHeader('Content-Type', 'application/json')
  // 注册响应函数
  r.onreadystatechange = function() {
      if (r.readyState === 4) {
          callback(r)
      }
  }
  r.send(data)
}

export default ajax