
/******************************

脚本功能：CEO周课+解锁VIP
下载地址：http://mtw.so/6rDbGg
软件版本：1.7.2
脚本作者：彭于晏
更新时间：2022-9-11
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]
^https:\/\/api\.lianqinba\.com\/client\/v2\/my_info url script-response-body https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/main/yq.js
[mitm] 
hostname = api.lianqinba.com


*******************************/

var body = $response.body;

// 试听
body = body.replace(/("vip_last_day":"\s*:\s*)\d+/g, '$1'"1711261640000"');

