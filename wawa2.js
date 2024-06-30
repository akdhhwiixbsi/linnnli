/*********************************

[rewrite_local]
^https:\/\/api\.wawalu\.cn\/wawalu\/.+ url script-response-body wawa.js
[mitm] 
hostname = api.wawalu.cn

********************************/

var body = $response.body;

    body = body.replace(/\"isFree":\d/g,'\"isFree":1');
    body = body.replace(/\"price":1/g,'\"price":0');
    body = body.replace(/\"data":false/g,'\"data":true');

$done({body});
