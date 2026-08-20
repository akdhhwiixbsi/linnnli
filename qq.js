/***

[rewrite_local]
^https:\/\/cdnapi\.qianmaschool\.com\/\.+ url script-response-body https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/refs/heads/main/qq.js
[mitm] 
hostname = cdnapi.qianmaschool.com


***/

var body = $response.body;

body = body.replace(/"hasVip"\s*:\s*false/g, '"hasVip":true');
body = body.replace(/"flipFree"\s*:\s*false/g, '"flipFree":true');
body = body.replace(/"isFlipVip"\s*:\s*false/g, '"isFlipVip":true');
body = body.replace(/"isTrial"\s*:\s*false/g, '"isTrial":true');
body = body.replace(/"accessible"\s*:\s*false/g, '"accessible":true');
$done({body: body});
