/******************************

[rewrite_local]

^https?:\/\/.*\.oracle\.bendingspoonsapps\.com\/v\d\/(users\/.+|purchases\/verify) url script-response-body rem1n1.js

[mitm]

hostname = *.oracle.bendingspoonsapps.com

*************************************/


if ($response.body != 'undefined'){
var ojbk = JSON.parse($response.body);
const url = $request.url;


if (url.indexOf('remini') != -1) { ids = "com.bigwinepot.nwdn.international.1y_p99_99_ft_pro";}

ojbk["me"]["active_subscriptions_ids"] = [(ids)];
ojbk["me"]["active_bundle_subscriptions"] = [{
   "expiry" : "2099-09-09T09:09:09+00:00",
   "product_id" : (ids),
   "features" : ["unlock"]
  }];
ojbk["settings"]["__identity__"]["expiration"] = "2099-09-09T09:09:09+00:00";
$done({body : JSON.stringify(ojbk)});
}