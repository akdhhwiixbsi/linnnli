/*************************************


[rewrite_local]
^https:\/\/app\.zomoplan\.com\/zhaoMuPlan\/user\/info url script-response-body Zm.js
[mitm] 
hostname = app.zomoplan.com



*************************************/
body = $response.body.replace(/\"vipExpiresDate":\".*?\"/g, '\"vipExpiresDate":"2800000000"').replace(/\"vipStatus":\d/g, '\"vipStatus":1').replace(/\"vipType":\d/g, '\"vipType":1')

$done({body});
