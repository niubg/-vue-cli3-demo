//获取url中参数的值
export function getQueryString(name) {
   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}
export function GetRequest() {
  var url = location.href; //获取url中"?"符后的字串
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.split("?")[1];
    var strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}
//格式化为两位小数
export function toDecimal2(x) {
    var f = parseFloat(x);
    if (isNaN(f)) {
        return '0.00';
    }
    f = Math.round(x * 100) / 100;
    var s = f.toString();
    var rs = s.indexOf('.');
    if (rs < 0) {
        rs = s.length;
        s += '.';
    }
    while (s.length <= rs + 2) {
        s += '0';
    }
    return s;
}

//千分位
export function thousandsFormat(number) {
    var num = (number || 0).toString();
        var result = '';
        var point = '';
    let pointIndex = num.indexOf(".");
    if (pointIndex > -1) {
        point = num.slice(pointIndex + 1, num.length)
        num = num.slice(0, pointIndex)
    }
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }
    if (num) { result = num + result; }
    if (point) { result = result + "." + point }
    return result;
}

// 数组去重
export function arrRepeat(arr) {
    let r = arr.filter(function(element, index, self) {
        return self.indexOf(element) === index;
    });
    return r
}