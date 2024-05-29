/*************************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1 url script-response-body meizhuang.js
[mitm] 
hostname = api.revenuecat.com


*************************************/

var objc = JSON.parse($response.body);

    objc = {
  "request_date_ms": 1697344025592,
  "request_date": "2023-10-15T04:27:05Z",
  "subscriber": {
    "non_subscriptions": {},
    "first_seen": "2023-10-13T08:35:44Z",
    "original_application_version": "3838",
    "other_purchases": {},
    "management_url": "https://apps.apple.com/account/subscriptions",
    "subscriptions": {
      "mp_1y_usd30_3d0": {
        "original_purchase_date": "2023-10-13T08:46:34Z",
        "expires_date": "2099-10-20T08:46:33Z",
        "is_sandbox": false,
        "refunded_at": null,
        "store_transaction_id": "440001590103622",
        "unsubscribe_detected_at": "2023-10-13T11:32:22Z",
        "grace_period_expires_date": null,
        "period_type": "trial",
        "purchase_date": "2023-10-13T08:46:33Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "auto_resume_date": null
      }
    },
    "entitlements": {
      "vip": {
        "grace_period_expires_date": null,
        "purchase_date": "2023-10-13T08:46:33Z",
        "product_identifier": "mp_1y_usd30_3d0",
        "expires_date": "2099-10-20T08:46:33Z"
      }
    },
    "original_purchase_date": "2023-10-13T08:11:00Z",
    "original_app_user_id": "$RCAnonymousID:319a851847204ad2956887c688b7ab0e",
    "last_seen": "2023-10-15T04:26:33Z"
  }
}
$done({body : JSON.stringify(objc)});