/*********************************

[rewrite_local]
^https:\/\/course\.hundun\.cn\/get_course_meta url script-response-body hd3.js
[mitm] 
hostname = course.hundun.cn


********************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

conts  limu = '/get_course_detail';

if (url.indexOf('/get_course_detail') != -1) {
    obj.data.allow_play_title = "";
    obj.data.end_ts = "2058-10-20 08:00:00";
    obj.data.allow_download = 1;
    obj.data.allow_play = 1;
    obj.data.expire_time = "2058-10-20";
    obj.data.free_trial_info = "";
    body = JSON.stringify(obj);
    }
    
    $done({body});