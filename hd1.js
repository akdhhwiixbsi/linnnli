/*********************************

[rewrite_local]
^https:\/\/course\.hundun\.cn\/get_course_meta url script-response-body hd1.js
[mitm] 
hostname = course.hundun.cn


********************************/

var body = $response.body;

    body = body.replace(/"allow_play":3/g,'\"allow_play":1');
    
    body = body.replace(/"is_free":false/g,'\"is_free":true');

$done({body});
