/*************************************
项目名称：DLabelybq
下载地址：https://too.st/7qH
更新日期：2024-01-13
脚本作者：@anyeyey
使用声明：⚠️仅供参考，🈲转载与售卖！
解锁功能不显示有会员解锁功能不显示有会员
解锁功能不显示有会员解锁功能不显示有会员
解锁功能不显示有会员解锁功能不显示有会员
解锁功能不显示有会员解锁功能不显示有会员
解锁功能不显示有会员解锁功能不显示有会员
**************************************

[rewrite_local]
^https:\/\/xy\.jingcle\.com\/api\/user url script-response-body youzi.js
[mitm]
hostname = xy.jingcle.com
*************************************/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/info';

 if (url.indexOf(vip) != -1) {
    obj.data.vip_expire_date = 28001234500;
    obj.data.is_vip = true;

 body = JSON.stringify(obj);
}


 $done({body});