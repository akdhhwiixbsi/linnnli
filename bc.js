/**

[rewrite_local]
^https:\/\/cap\.baicizhan\.com\/api\/.+ url script-response-body https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/refs/heads/main/bc.js
[mitm] 
hostname = cap.baicizhan.com

**/

var body = $response.body;

body = body.replace(/"canAccess"\s*:\s*\w+/g, '"canAccess":true');
body = body.replace(/"unlock"\s*:\s*\w+/g, '"unlock":true');

$done({body: body});
