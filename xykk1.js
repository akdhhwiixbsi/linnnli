/*********************************

[rewrite_local]
http:\/\/api\.pollykann\.com\/media url script-response-body xykk.js
[mitm] 
hostname = api.pollykann.com

********************************/

var body = $response.body;

    body = body.replace(/\"isPurchased":false/g,'\"isPurchased":true');
    body = body.replace(/\"freeForVip":false/g,'\"freeForVip":true');
  
$done({body});
