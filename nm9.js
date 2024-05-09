/*********************************

[rewrite_local]
^https:\/\/fast\.lmfasting\.cn\/api\/User\/loginUserInfo url script-response-body nm9.js
[mitm] 
hostname = fast.lmfasting.cn



********************************/

var body = $response.body;

body = body.replace(/\"cause":"\w+"/g, '\"cause":"减肥","vip_expire":"2099-12-31 18:10:32","flag":"permanent"');

$done({body});