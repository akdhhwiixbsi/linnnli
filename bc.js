/**
[rewrite_local]
^https:\/\/cap\.baicizhan\.com\/api\/.+ url script-response-body https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/refs/heads/main/bc.js

[mitm]
hostname = cap.baicizhan.com

**/


let body = $response.body;

if (!body) {
  $done({});
} else {
  try {
    body = body
      .replace(/"canAccess"\s*:\s*(?:true|false|null|-?\d+(?:\.\d+)?)/g, '"canAccess":true')
      .replace(/"unlock"\s*:\s*(?:true|false|null|-?\d+(?:\.\d+)?)/g, '"unlock":true');

    $done({ body: body });
  } catch (e) {
    console.log("bc.js error: " + e);
    $done({});
  }
}
