*************************************/

[rewrite_local]

https:\/\/(partner-ai-api\.quthing\.com\/ai\/vip\/state|partner-ai-api\.quthing\.com\/student\/info\/h5)  url script-response-body  lyzn .js

[mitm] 

hostname = partner-ai-api.quthing.com
*************************************/

var user = JSON.parse($response.body);
       user =
{   "data" : {     "dayCardBalance" : 0,     "nextAutoRenewTime" : 0,     "serverTime" : 1695081521561,     "goodsId" : 8888,     "seniorVip" : true,     "showText" : "会员尊享高级特权",     "validVip" : true,     "expireTime" : 2800012345000,     "vipCount" : 180783,     "autoRenew" : false,     "lastBuySkuName" : ""   } } 

var vip = JSON.parse($response.body);
       vip =
{   "data" : {     "frequency" : 0,     "kol" : false,     "vipInfo" : {       "dayCardBalance" : 0,       "nextAutoRenewTime" : 0,       "serverTime" : 1691317650620,       "goodsId" : 53,       "seniorVip" : false,       "showText" : "2099.09.09到期",       "validVip" : true,       "expireTime" : 3801234567890,       "vipCount" : 163769,       "autoRenew" : false,       "lastBuySkuName" : "partnertrainingai_one_day_vip"     },     "mobile" : "18663071972",     "secure" : false,     "instrumentId" : "oj2p1z",     "instrumentName" : "钢琴",     "learnTimes" : "0",     "avatar" : "https:\/\/cdn.quthing.com\/290723a6-9eb8-4926-983f-d5fadb768740",     "tourist" : false,     "canReceiveVipDays" : 0,     "complete" : true,     "platformTeacher" : false,     "auditor" : false,     "studentId" : "woijdp",     "gender" : 0   } }

$done({body : JSON.stringify(objc)});