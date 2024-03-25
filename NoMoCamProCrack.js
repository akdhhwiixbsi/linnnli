/******************************

脚本功能：NoMo Cam 解锁订阅
软件版本：1.5.131
下载地址：http://t.cn/A6xIUPmm
脚本作者：Hausd0rff
更新时间：2022-09-26
脚本发布：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > NoMo Cam 解锁订阅
^https?:\/\/fast\.lmfasting\.cn\/api\/User\/loginUserInfo url script-request-body https://github.com/akdhhwiixbsi/linnnli/blob/main/NoMoCamProCrack.js

[mitm] 
hostname = fast.lmfasting.cn

*******************************/

var Hausd0rff = $request.body;
Hausd0rff = '{
  "code" : 200,
  "t" : "2024-03-25 10:40:18",
  "data" : {
    "sport_id" : 8,
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
    "head" : "http:\/\/d.lmfasting.cn\/fast\/images\/3a0579c074710e01717b2faccfc16e81.png",
    "height" : 160,
    "gold" : 0,
    "recommend_plan_id" : 15,
    "is_attempt" : "我是新手"
  },
  "msg" : "ok"
}
$done({
    body : Hausd0rff
});
