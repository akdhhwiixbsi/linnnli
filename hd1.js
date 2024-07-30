/*********************************

[rewrite_local]
^https:\/\/course\.hundun\.cn\/get_course_meta url script-response-body hd1.js
[mitm] 
hostname = course.hundun.cn


********************************/

var body = $response.body;

    body = body.replace(/"allow_play":3/g,'\"allow_play":1');
    
    body = body.replace(/"is_free":false/g,'\"is_free":true');
    
    body = body.replace(/"is_buy":0/g,'\"is_buy":1');
  
  body = body.replace(/"expire_ts"\s*:\s*)""/g,'\"expire_ts":"2058-01-08"');
  
  body = body.replace(/"end_ts"\s*:\s*)""/g,'\"end_ts":"2058-01-08 12:00:00"');
  
$done({body});