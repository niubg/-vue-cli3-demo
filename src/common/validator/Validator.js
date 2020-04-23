/**
 * 校验手机号码
 * @param str
 * @returns {boolean}
 */
export function checkMobile(mobile) {
  return mobile == null
    ? false
    : /^(((1[3456789][0-9]{1})|(15[0-9]{1}))+\d{8})$/.test(mobile);
}

/**
 * 校验验证码
 * @param verifyCode
 * @returns {boolean}
 */
export function checkVerifyCode(verifyCode) {
  return verifyCode == null ? false : /^[0-9]{4}$/.test(verifyCode);
}

/**
 * 校验密码
 * @param password
 * @returns {boolean}
 */
export function checkPassword(password) {
  return password == null ? false : /^[a-zA-Z0-9]{6,16}$/g.test(password);
}

/**
 * 是否为空
 * @param input
 * @returns {boolean}
 */
export function isBlank(input) {
  return input == null || input == undefined || input == '';
}

/*判断字符串长度，汉字为1*/
export function strLength(str) {
  var len = 0;
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    len++;
  }
  return len;
}

/**
 * 用户名校验
 * @param value
 * @returns {*}
 */
export function checkUserName(value) {
  if (!/[\u4e00-\u9fa5]+$/.test(value)) {
    return { success: false, error: '用户名错误格式，仅支持"汉字"' };
  } else if (strLength(value) < 2 || strLength(value) > 20) {
    return { success: false, error: '用户名请输入2-20位有效字符' };
  } else {
    return { success: true, error: null };
  }
}
