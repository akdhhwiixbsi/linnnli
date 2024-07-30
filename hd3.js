/*********************************

[rewrite_local]
^https:\/\/course\.hundun\.cn\/get_course_meta url script-response-body hd3.js
[mitm] 
hostname = course.hundun.cn


********************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

if (url.indexOf('/get_course_detail') != -1) {
    obj.data.course_meta.allow_play_title = "";
    obj.data.course_meta.end_ts = "2058-10-20 08:00:00";
    obj.data.course_meta.allow_download = 1;
    obj.data.course_meta.allow_play = 1;
    obj.data.course_meta.expire_time = "2058-10-20";
    obj.data.free_trial_info = "";
    body = JSON.stringify(obj);
    }
    
    $done({body});