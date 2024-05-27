/*************************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1 url script-response-body langster.js
[mitm] 
hostname = api.revenuecat.com


*************************************/

var objc = JSON.parse($response.body);

    objc = {
  "request_date": "2024-05-27T14:23:41Z",
  "request_date_ms": 1716819821915,
  "subscriber": {
    "entitlements": {
      "Premium": {
        "expires_date": "2099-06-03T14:22:32Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.langster.universal.yearly",
        "purchase_date": "2024-05-27T14:22:32Z"
      }
    },
    "first_seen": "2024-05-27T14:07:33Z",
    "last_seen": "2024-05-27T14:07:33Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "4880704e-0f4f-42df-8f92-94dfefac3eb2",
    "original_application_version": "533",
    "original_purchase_date": "2024-05-27T12:59:41Z",
    "other_purchases": {},
    "subscriptions": {
      "com.langster.universal.yearly": {
        "auto_resume_date": null,
        "billing_issues_detected_at": null,
        "expires_date": "2099-06-03T14:22:32Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2024-05-27T14:22:34Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2024-05-27T14:22:32Z",
        "refunded_at": null,
        "store": "app_store",
        "store_transaction_id": "500001735741580",
        "unsubscribe_detected_at": "2024-05-27T14:23:26Z"
      }
    }
  }
}
$done({body : JSON.stringify(objc)});