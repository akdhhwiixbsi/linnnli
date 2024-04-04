/******************************


[rewrite_local]
^https:\/\/partner-ai-api\.quthing\.com\/ai\/vip\/state url script-response-body ly.js
[mitm] 
hostname = partner-ai-api.quthing.com




*******************************/


var obj = JSON.parse($response.body);

       obj = {
  "data": {
    "dayCardBalance": 0,
    "nextAutoRenewTime": 0,
    "serverTime": 1695081521561,
    "goodsId": 8888,
    "seniorVip": true,
    "showText": "会员尊享高级特权",
    "validVip": true,
    "expireTime": 2800012345000,
    "vipCount": 180783,
    "autoRenew": false,
    "lastBuySkuName": ""
  }
}

$done({body:JSON.stringify(obj)});
