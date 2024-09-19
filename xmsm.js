/*******************************

[rewrite_local]
^https:\/\/sleep\.navolove\.com\/api\/refresh_user_info url script-response-body xmsm.js
[mitm] 
hostname = sleep.navolove.com


*******************************/

var objc = JSON.parse($response.body);

    objc = {
  "message": "success",
  "data": {
    "login_type": "phone",
    "source": "",
    "birthday": "",
    "invite_code": "69311750",
    "range_age": "",
    "sleep_total_time": 0,
    "nickname": "Panda186972",
    "wx_openid": "",
    "default_group_banner": "https://hwcdn.navoinfo.cn/resource/Now/love_planet/default_group_banner.png",
    "sleep_average_time": 0,
    "sleep_remind": 0,
    "course_ob_jump": {
      "template_id_429": 3
    },
    "reg_days": 1,
    "sleep_average_quality": 0,
    "sleep_remind_status": {
      "status": 1,
      "remind_time": ""
    },
    "is_svip": true,
    "id": 422252,
    "unionid": "",
    "platform": "ios",
    "gender": "other",
    "is_vip": true,
    "wx_new_openid": "",
    "avatar": "https://hwcdn.navoinfo.cn/resource/Now/love_planet/default_avatar.png",
    "continue_day_count": 0,
    "app_version_code": "2023081601",
    "is_wx_reg": 0,
    "created_at": "2023-09-07T16:17:12.000000Z",
    "expiration": "2099-09-07T16:17:12.000000Z",
    "expiration_time": "2099-09-07T16:17:12.000000Z",
    "username": "1888866666"
  },
  "code": 200
}
$done({body : JSON.stringify(objc)});
