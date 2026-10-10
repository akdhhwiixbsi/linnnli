/*
[rewrite_local]
^https:\/\/cap\.baicizhan\.com\/api\/v1\/entitlement\/user\/query url script-response-body https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/refs/heads/main/bcz.js
[mitm] 
hostname = cap.baicizhan.com
*/
let body ={
  "code": 0,
  "msg": "success",
  "data": {
    "uid": 218805157,
    "key": "cake-freemium-with-L0",
    "name": "蛋糕拓展包权益",
    "description": "",
    "constraints": [
      {
        "type": "duration",
        "endTime": -1
      }
    ]
  }
}
$done({ body: JSON.stringify(body) });
