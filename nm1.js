/*

[rewrite_local]
^https:\/\/fast\.lmfasting\.cn\/api\/User\/loginUserInfo url script-response-body nm1.js
[mitm] 
hostname = fast.lmfasting.cn

*/
body = $response.body.replace(/\"cause\":\".*?\"/g, '\"cause\":"减肥","vip_expire":"2099-12-31 18:10:32","flag":"permanent"')

$done({body});




