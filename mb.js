/*

[rewrite_local]
^https:\/\/api2\.mubu\.com\/v3\/api\/user\/current_user url script-response-body mb.js
[mitm] 
hostname = api2.mubu.com

*/

var body = $response.body.replace(/vipEndDate":"\d+"/g,'vipEndDate":"99991111"')
.replace(/level":\d+/g,'level":2')

$done({ body });