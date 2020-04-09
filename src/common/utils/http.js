// 引用axios
import axios from 'axios'
import router from '../../router/index'

let proxy = "";
console.log('打印', process.env.VUE_APP_baseURL)
// if (process.env.NODE_ENV == "production") {
//   axios.defaults.baseURL = "../";
//   proxy = "../"
// } else {
//   axios.defaults.baseURL = "/api";
//   proxy = "/api"
// }
let buildType = process.env.VUE_APP_baseURL
if (buildType == 'dev') {
  axios.defaults.baseURL = "http://dev.tadu.com/"
  proxy = "http://dev.tadu.com/"
} else if (buildType == 'test') {
  axios.defaults.baseURL = "http://test.tadu.com/"
  proxy = "http://test.tadu.com/"
} else {
  axios.defaults.baseURL = "/api";
  proxy = "/api"
}
// 默认渠道号4-微信H5
// axios.defaults.headers.common['channel'] = "4"

// http request 拦截器，通过这个，我们就可以把Cookie传到后台
axios.interceptors.request.use(
  (config) => {
    const token = '1234567899'; //获取Cookie
    // 包装请求参数
    let requestData = warpRequestData(config.data);
    config.data = JSON.stringify(requestData);
    config.headers = { 'Content-Type': 'application/json; charset=UTF-8' };
    if (token) {
      config.headers.token = token //后台接收的参数，后面我们将说明后台如何接收
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// http response 拦截器
axios.interceptors.response.use(
  response => {
    // console.log("response data:", response.data)
    //response.data.errCode是我接口返回的值，如果值为10003，说明Cookie丢失，然后跳转到登录页，这里根据大家自己的情况来设定

    if (response.data.code == 10003) {
      // clearStorage();
      router.push('/login')
    }
    return response;
  },
  error => {
    // console.log(JSON.stringify(error.response.data))
    return error.response;
  });

export default axios;

/**
 * 包装请求数据
 * @param data
 * @returns {{channel: string, clinicCode: string, userId: *, version: string, data: *}}
 */
export function warpRequestData(data) {
  let warpData = {
    channel: "",
    userId: "",
    version: '',
    data: data
  }
  return warpData;
}
/**
 * fetch 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
    axios.post(url, data)
        .then(response => {
        resolve(response ? response.data : "");
        }, err => {
        reject(err);
        })
    })
}

/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
  })
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
  })
}

/**
 * 获取url中参数的值
 * @param name
 * @returns {*}
 */
export function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}

/**
 * @returns {Object}
 */
export function getRequest() {
  var url = location.href; // 获取url中"?"符后的字串
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.split("?")[1];
    var strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
    }
  }
  return theRequest;
}

/**
 * 原生ajajx封装的请求，应对form表单提交
 * postForm 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function postForm(url, data = {}) {
    return new Promise(function (resolve, reject) {
        var XHR = XMLHttpRequest ? new XMLHttpRequest() : new window.ActiveXObject('Microsoft.XMLHTTP');
        XHR.onreadystatechange = function () {
            //readyState属性表示请求/响应过程的当前活动阶段。
            if (XHR.readyState == 4) {
                if ((XHR.status >= 200 && XHR.status < 300) || XHR.status == 304) {
                    try {
                        //获取数据
                        var response = JSON.parse(XHR.responseText);
                        resolve(response);
                    } catch (e) {
                        reject(e);
                    }
                } else {
                    reject(new Error("Request was unsuccessful: " + XHR.statusText));
                }
            }
        }
        XHR.open("POST", proxy + '/' + url, true)
        XHR.send(data);
    })
  }
