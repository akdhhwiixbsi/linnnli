/*************************************


[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1\/subscribers url script-response-body moze.js
[mitm] 
hostname = api.revenuecat.com



*************************************/

var objc = JSON.parse($response.body);

    objc = {
  "subscriber": {
    "non_subscriptions": {},
    "first_seen": "2024-05-04T04:25:53Z",
    "original_application_version": "8",
    "other_purchases": {},
    "management_url": "https://apps.apple.com/account/subscriptions",
    "subscriptions": {
      "MOZE_PRO_SUBSCRIPTION_YEARLY_BASIC": {
        "original_purchase_date": "2024-05-04T04:26:34Z",
        "expires_date": "2099-05-18T04:26:33Z",
        "is_sandbox": false,
        "refunded_at": null,
        "store_transaction_id": "270001751469347",
        "unsubscribe_detected_at": "2024-05-04T04:28:50Z",
        "grace_period_expires_date": null,
        "period_type": "trial",
        "purchase_date": "2024-05-04T04:26:33Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "auto_resume_date": null
      }
    },
    "entitlements": {
      "MOZE_PREMIUM_SUBSCRIPTION": {
        "grace_period_expires_date": null,
        "purchase_date": "2024-05-04T04:26:33Z",
        "product_identifier": "MOZE_PRO_SUBSCRIPTION_YEARLY_BASIC",
        "expires_date": "2099-05-18T04:26:33Z"
      }
    },
    "original_purchase_date": "2024-05-04T04:26:34Z",
    "original_app_user_id": "$RCAnonymousID:45d5d6af13f24e39bb560163e151165c",
    "last_seen": "2024-05-04T04:25:53Z"
  },
  "request_date_ms": 1714796930899,
  "request_date": "2024-05-04T04:28:50Z"
}

$done({body : JSON.stringify(objc)});