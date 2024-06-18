/*********************************

[rewrite_local]
^https:\/\/course\.hundun\.cn\/get_course_detail url script-response-body hd.js
[mitm] 
hostname = course.hundun.cn




********************************/

var body = $response.body;

    body = body.replace(/"free_trial":0/g,'\"free_trial":1');

$done({body});