/**
[rewrite_local]
^https:\/\/cap\.baicizhan\.com\/api\/v1\/entitlement\/user\/query url script-response-body https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/refs/heads/main/bcx.js
^https:\/\/cap\.baicizhan\.com\/api\/.+ url script-response-body https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/refs/heads/main/bcx.js

[mitm]
hostname = cap.baicizhan.com
*/
const url = $request.url || "";
let body = $response.body || "";

// 如果是权益查询接口，直接返回固定 JSON
if (url.includes("/api/v1/entitlement/user/query")) {
  const fakeBody = {
    code: 0,
    msg: "success",
    data: {
      uid: 218805157,
      key: "cake-freemium-with-L0",
      name: "蛋糕拓展包权益",
      description: "",
      constraints: [
        {
          type: "duration",
          endTime: -1
        }
      ]
    }
  };

  $done({ body: JSON.stringify(fakeBody) });
} else {
  // 其他 /api/ 接口，替换 canAccess / unlock
  if (!body) {
    $done({});
  } else {
    try {
      body = body
        .replace(/"canAccess"\s*:\s*false/g, '"canAccess":true')
        .replace(/"unlock"\s*:\s*(?:false|0|null)/g, '"unlock":true');

      $done({ body });
    } catch (e) {
      console.log("bc.js error: " + e);
      $done({});
    }
  }
}
