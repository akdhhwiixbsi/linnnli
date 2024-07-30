/*********************************

[rewrite_local]
^https:\/\/course\.hundun\.cn url script-response-body hd1.js
[mitm] 
hostname = course.hundun.cn


********************************/

var body = $response.body;

    body = body.replace(/"allow_play":\d/g,'\"allow_play":1');
    
    body = body.replace(/"is_free":\w+/g,'\"is_free":false');
    
    body = body.replace(/"is_buy":0/g,'\"is_buy":1');
  
   body = body.replace(/"expire_ts":"\d+/g,'\"expire_ts":"2058');
  
 body = body.replace(/"end_ts":"\d+/g,'\"end_ts":"2058');
  
  body = body.replace(/"free_trial":\d/g,'\"free_trial":1');
  
$done({body});