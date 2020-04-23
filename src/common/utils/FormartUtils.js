/**
 * 格式化为两位小数
 * @param x
 * @returns {string}
 */
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

/**
 * 千分位
 * @param number
 * @returns {string}
 */
export function thousandsFormat(number) {
  var num = (number || 0).toString();
  var result = '';
  var point = '';
  let pointIndex = num.indexOf('.');
  if (pointIndex > -1) {
    point = num.slice(pointIndex + 1, num.length);
    num = num.slice(0, pointIndex);
  }
  while (num.length > 3) {
    result = ',' + num.slice(-3) + result;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  if (point) {
    result = result + '.' + point;
  }
  return result;
}
