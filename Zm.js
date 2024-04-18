/*************************************


[rewrite_local]
^https:\/\/app\.zomoplan\.com\/zhaoMuPlan\/user\/info url script-response-body Zm.js
[mitm] 
hostname = app.zomoplan.com



*************************************/
var body = JSON.parse($response.body);

body.data.vipStatus = 1;
body.data.aliPaySubscribeInfo.vipType = 1;
body.data.aliPaySubscribeInfo.vipExpiresDate = "2800012345"; 

$done({ body: JSON.stringify(body) });