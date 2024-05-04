/*************************************

[rewrite_local]
^https:\/\/bookapi\.ellabook\.cn url script-response-body ylks.js
[mitm] 
hostname = bookapi.ellabook.cn





*************************************/
var body = $response.body.replace(/"code":"\d+/g,'"code":"0x00000000"').replace(/ip":"VIP_NO"/g,'ip":"VIP_YES"').replace(/ip":"NO"/g,'ip":"YES"').replace(/status":"\d/g,'status":"1')
$done({ body });