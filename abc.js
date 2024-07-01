/*********************************

[rewrite_local]
^https:\/\/ios\.abc-learning\.net\/api url script-response-body  abc.js
[mitm] 
hostname = ios.abc-learning.net



********************************/

var body = $response.body;

    body = body.replace(/\"open":false/g,'\"open":true');
    body = body.replace(/\"is_free":\d/g,'\"is_free":1');
    body = body.replace(/\"validity_date":.\d+/g,'\"validity_date":2800012345');
    body = body.replace(/\"levels":\w+/g,'\"levels":["AllLevel"]');
$done({body});
