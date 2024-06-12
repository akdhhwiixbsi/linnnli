/*********************************

[rewrite_local]
^https:\/\/fast\.lmfasting\.cn\/api\/User\/loginUserInfo url script-response-body nm1.js
[mitm] 
hostname = fast.lmfasting.cn




********************************/

var body = $response.body;

    body = body.replace(/\"vip_expire":".*?"/g,'\"vip_expire":"2099-09-09 12:08:08","flag":"permanent"');

$done({body});