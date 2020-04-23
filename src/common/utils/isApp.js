// 获取页面所在的终端环境
function GetMobelType() {
  var browser = {
    versions: (function() {
      var u = window.navigator.userAgent;
      return {
        trident: u.indexOf('Trident') > -1, //IE内核
        presto: u.indexOf('Presto') > -1, //opera内核
        Alipay: u.indexOf('Alipay') > -1, //支付宝
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
        iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者安卓QQ浏览器
        //iPhone: u.match(/iphone|ipod|ipad/),//
        iPad: u.indexOf('iPad') > -1, //是否为iPad
        webApp: u.indexOf('Safari') == -1, //是否为web应用程序，没有头部与底部
        weixin: u.indexOf('MicroMessenger') > -1, //是否为微信浏览器
        qq: u.match(/\sQQ/i) !== null, //是否QQ
        Safari: u.indexOf('Safari') > -1,
        ///Safari浏览器,
      };
    })(),
  };
  return browser.versions;
}

// 判断客户是Android还是IOS系统
export function isPhoneSystem() {
  let u = navigator.userAgent;
  let app = navigator.appVersion;
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (isAndroid) {
    //这个是安卓操作系统
    return 'android';
  } else if (isIOS) {
    return 'ios';
  } else {
    return null;
  }
}

// 判断是否在公司内部app内打开
export function isAppTadu() {
  let isApp = false;
  let userAgent = navigator.userAgent.toLowerCase(); //获取userAgent
  if (userAgent.match(/tadu/i) == 'tadu') {
    isApp = true;
  } else {
    isApp = false;
  }
  return isApp;
}

/**
 * 判断是否微信打开
 * @returns {boolean}
 */
export function isFromWechat() {
  //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
  var ua = window.navigator.userAgent.toLowerCase();
  //通过正则表达式匹配ua中是否含有MicroMessenger字符串
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true;
  } else {
    return false;
  }
}
