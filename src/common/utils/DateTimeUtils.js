//获取当前时间，格式YYYY-MM-DD
export function getNowFormatDate() {
  var date = new Date();
  var seperator1 = '-';
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = '0' + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate;
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
}

//将毫秒格式化为YYYY-MM-DD
export function getMyDate(str) {
  var oDate = new Date(str);
  var oYear = oDate.getFullYear();
  var oMonth = oDate.getMonth() + 1;
  var oDay = oDate.getDate();
  var oHour = oDate.getHours();
  var oMin = oDate.getMinutes();
  var oSen = oDate.getSeconds();
  // oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay) +' '+ getzf(oHour) +':'+ getzf(oMin) +':'+getzf(oSen);//最后拼接时间 年月日时分秒
  var oTime = oYear + '-' + getzf(oMonth) + '-' + getzf(oDay); //最后拼接时间 年月日
  return oTime;
}

// 将毫秒格式化为YYYY-MM-DD hh:mm:ss
export function formatDate(time) {
  var oDate = new Date(time);
  var oYear = oDate.getFullYear();
  var oMonth = oDate.getMonth() + 1;
  var oDay = oDate.getDate();
  var oHour = oDate.getHours();
  var oMin = oDate.getMinutes();
  var oSen = oDate.getSeconds();
  var oTime =
    oYear +
    '-' +
    getzf(oMonth) +
    '-' +
    getzf(oDay) +
    ' ' +
    getzf(oHour) +
    ':' +
    getzf(oMin) +
    ':' +
    getzf(oSen); //最后拼接时间 年月日时分秒
  return oTime;
}

//补0操作
function getzf(num) {
  if (parseInt(num) < 10) {
    num = '0' + num;
  }
  return num;
}
