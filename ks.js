/*************************************

[rewrite_local]
^https:\/\/vocal-api\.quthing\.com\/vip\/state url script-response-body ks.js
[mitm] 
hostname = vocal-api.quthing.com



*************************************/

var objc = JSON.parse($response.body);

    objc = {
  "data": {
    "vipType": 4,
    "trialPeriod": true,
    "validVip": true,
    "expireTime": 3695398400000,
    "vipCount": 771519,
    "cnButtonTip": "已开通季会员",
    "vipMessage": "2099-09-09到期"
  }
}
$done({body : JSON.stringify(objc)});