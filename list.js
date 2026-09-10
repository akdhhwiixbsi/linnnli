/**
[rewrite_local]
^https:\/\/api\.listenleap\.com\/front-api\/user\/getUserInfoByUserToken url script-response-body https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/refs/heads/main/list.js
[mitm] 
hostname = api.listenleap.com
**/
var body = $response.body;

body = body.replace(/"vipType"\s*:\s*"\w+"/g, '"vipType":"高级用户"');
body = body.replace(/"vipExpireTime"\s*:\s*\w+/g, '"vipExpireTime":"2099-09-09"');
body = body.replace(/"vip"\s*:\s*\w+/g, '"vip":true');
body = body.replace(/"vipStartTime"\s*:\s*\w+/g, '"vipStartTime":1700012345');

$done({body: body});