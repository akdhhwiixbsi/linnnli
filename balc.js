/*************************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1\/subscribers\/\.+ url script-response-body bal.js
[mitm] 
hostname = api.revenuecat.com




*************************************/

var objc = JSON.parse($response.body);

    objc = {
  "request_date_ms": 1718886853387,
  "request_date": "2024-06-20T12:34:13Z",
  "subscriber": {
    "non_subscriptions": {},
    "first_seen": "2024-06-19T05:45:00Z",
    "original_application_version": "2027",
    "other_purchases": {},
    "management_url": "https://apps.apple.com/account/subscriptions",
    "subscriptions": {
      "ios_subscription_annual_intl_intro_free_69.99_2021.12.06": {
        "original_purchase_date": "2024-06-19T05:47:03Z",
        "expires_date": "2026-06-19T05:47:02Z",
        "is_sandbox": false,
        "refunded_at": null,
        "store_transaction_id": "170002214679788",
        "unsubscribe_detected_at": "2024-06-19T05:51:10Z",
        "grace_period_expires_date": null,
        "period_type": "trial",
        "purchase_date": "2024-06-19T05:47:02Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "auto_resume_date": null
      }
    },
    "entitlements": {
      "pro": {
        "grace_period_expires_date": null,
        "purchase_date": "2024-06-19T05:47:02Z",
        "product_identifier": "ios_subscription_annual_intl_intro_free_69.99_2021.12.06",
        "expires_date": "2026-06-19T05:47:02Z"
      }
    },
    "original_purchase_date": "2024-06-19T05:42:06Z",
    "original_app_user_id": "$RCAnonymousID:a1ae14bb22584b39aea7f46f5ded48c6",
    "last_seen": "2024-06-20T12:32:03Z"
  }
}
$done({body : JSON.stringify(objc)});