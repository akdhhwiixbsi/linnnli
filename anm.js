
/*************************************

项目名称：Today日记
下载地址：https://t.cn/A6NKldXq
脚本作者：chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/fast\.lmfasting\.cn\/api\/User\/loginUserInfo? url script-response-body  https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/main/anm.js
[mitm] 
hostname = fast.lmfasting.cn

*************************************/


var chxm1023 = JSON.parse($response.body);

  chxm1023 = {
  "code" : 200,
  "data" : {
    "is_attempt" : "我是新手",
    "weight" : 60,
    "birthday" : "1998",
    "openid" : "oMprV5spBL8FJqbgxvAziTqRPCbY",
    "create_time" : "2023-07-27 15:47:17",
    "target_weight" : 53.899999999999999,
    "apple_name" : "·龙跃·",
    "speed" : 0.80000000000000004,
    "vip_expire" : "2099-12-31 18:10:32",
    "flag" : "permanent",
    "cause" : "减肥",
    "name" : "小尼莫",
    "begin_weight" : 60,
    "day" : 53,
    "id" : 4141988,
    "gender" : "女生",
    "head" : "http://d.lmfasting.cn/fast/images/3a0579c074710e01717b2faccfc16e81.png",
    "height" : 160,
    "gold" : 0,
    "recommend_plan_id" : 15,
    "sport_id" : 8
  },
  "msg" : "ok",
  "t" : "2024-03-25 10:40:18"
}

$done({body});