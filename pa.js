/*************************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1 url script-response-body pa.js
[mitm] 
hostname = api.revenuecat.com


*************************************/

var objc = JSON.parse($response.body);

    objc = {
  "request_date_ms": 1716735941389,
  "request_date": "2024-05-26T15:05:41Z",
  "subscriber": {
    "non_subscriptions": {},
    "first_seen": "2024-05-26T15:05:41Z",
    "original_application_version": null,
    "other_purchases": {},
    "management_url": null,
    "subscriptions": {
      "com.fiftythree.paper.credit": {
        "Author": "chxm1023",
        "store": "app_store",
        "ownership_type": "PURCHASED",
        "warning": "仅供学习，禁止转载或售卖",
        "original_purchase_date": "2022-09-09T09:09:09Z",
        "Telegram": "https://t.me/chxm1023",
        "purchase_date": "2022-09-09T09:09:09Z"
      }
    },
    "entitlements": {
      "pro": {
        "Author": "chxm1023",
        "store": "app_store",
        "ownership_type": "PURCHASED",
        "product_identifier": "com.fiftythree.paper.credit",
        "warning": "仅供学习，禁止转载或售卖",
        "original_purchase_date": "2022-09-09T09:09:09Z",
        "Telegram": "https://t.me/chxm1023",
        "purchase_date": "2022-09-09T09:09:09Z"
      }
    },
    "original_purchase_date": null,
    "original_app_user_id": "AA860A9B-3013-488D-8959-AA0FD7FEBEAB",
    "last_seen": "2024-05-26T15:05:41Z"
  }
}
$done({body : JSON.stringify(objc)});