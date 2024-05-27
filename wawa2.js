/*********************************

[rewrite_local]
^https:\/\/api\.wawalu\.cn\/wawalu\/.+ url script-response-body wawa2.js
[mitm] 
hostname = api.wawalu.cn

********************************/

var body = $response.body;

    body = body.replace(/\"isFree":\d/g,'\"isFree":1');
   
    

$done({body});
