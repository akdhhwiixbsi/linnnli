/*************************************

[rewrite_local]
http:\/\/dancefit\.dailyyogac\.com\/dancefit\/user\/common\/info url script-response-body rhwd.js
[mitm] 
hostname = dancefit.dailyyogac.com


*************************************/
var body = $response.body.replace(/"is_first_buy":\w+/g,'"is_first_buy":true').replace(/"end_time":\d/g,'"end_time":2800012345').replace(/"start_time":\d/g,'"start_time":1800012345').replace(/"is_valid":\w+/g,'"is_valid":true')
$done({ body });