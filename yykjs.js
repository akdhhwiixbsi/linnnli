/*********************************

[rewrite_local]
^https:\/\/api\.agency\.immusician\.com\/v9\/.+ url script-response-body yykjs.js
[mitm] 
hostname = api.agency.immusician.com

********************************/

var body = $response.body;

    body = body.replace(/\"is_lock": 1/g,'\"is_lock": 0');
    body = body.replace(/\"is_lock": true/g,'\"is_lock": false');
  
$done({body});
