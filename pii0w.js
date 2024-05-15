/*******************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1 url script-response-body pii0w.js
[mitm] 
hostname = api.revenuecat.com



*******************************/

var objc = JSON.parse($response.body);

    objc = {
  "request_date_ms": 1689553318370,
  "request_date": "2023-07-17T00:21:58Z",
  "subscriber": {
    "non_subscriptions": {},
    "first_seen": "2023-07-17T00:20:49Z",
    "original_application_version": "708",
    "other_purchases": {},
    "management_url": "https://apps.apple.com/account/subscriptions",
    "subscriptions": {
      "com.neybox.pillow.premium.year": {
        "original_purchase_date": "2023-07-17T00:21:55Z",
        "expires_date": "2099-12-29T00:21:53Z",
        "is_sandbox": false,
        "refunded_at": null,
        "unsubscribe_detected_at": null,
        "grace_period_expires_date": null,
        "period_type": "trial",
        "purchase_date": "2023-07-17T00:21:53Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "auto_resume_date": null
      }
    },
    "entitlements": {
      "premium": {
        "grace_period_expires_date": null,
        "purchase_date": "2023-07-17T00:21:53Z",
        "product_identifier": "com.neybox.pillow.premium.year",
        "expires_date": "2099-12-29T00:21:53Z"
      }
    },
    "original_purchase_date": "2023-07-17T00:16:34Z",
    "original_app_user_id": "$RCAnonymousID:f0286de4077e4ab1b7b1882d8da1e591",
    "last_seen": "2023-07-17T00:20:49Z"
  }
}
$done({body : JSON.stringify(objc)});
