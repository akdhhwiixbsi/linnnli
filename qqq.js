/*


[rewrite_local]
^https:\/\/partner-ai-api\.quthing\.com\/ai\/vip\/state url script-response-body qqq.js
[mitm] 
hostname = partner-ai-api.quthing.com
*/


var obj = JSON.parse($response.body);

obj.data.expireTime = 2800012345000;
obj.data.seniorVip = true;
obj.data.validVip = true;
obj.data.vipCount = 180783;
obj.data.goodsId = 8888;

$done({body : JSON.stringify(obj)});