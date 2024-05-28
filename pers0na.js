/*************************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1 url script-response-body persona.js
[mitm] 
hostname = api.revenuecat.com


*************************************/

var objc = JSON.parse($response.body);

    objc = {
  "request_date": "2023-12-01T15:38:15Z",
  "request_date_ms": 1701445095314,
  "subscriber": {
    "non_subscriptions": {},
    "first_seen": "2023-12-01T05:51:08Z",
    "original_application_version": "1573",
    "other_purchases": {},
    "management_url": "https://apps.apple.com/account/subscriptions",
    "subscriptions": {
      "com.tickettothemoon.video.persona.unlimited.monthly.9.new": {
        "original_purchase_date": "2023-12-01T15:35:53Z",
        "expires_date": "2025-01-01T15:35:49Z",
        "is_sandbox": false,
        "refunded_at": null,
        "store_transaction_id": "440001641400692",
        "unsubscribe_detected_at": null,
        "grace_period_expires_date": null,
        "period_type": "normal",
        "purchase_date": "2023-12-01T15:35:49Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "auto_resume_date": null
      }
    },
    "entitlements": {
      "unlimited": {
        "grace_period_expires_date": null,
        "purchase_date": "2023-12-01T15:35:49Z",
        "product_identifier": "com.tickettothemoon.video.persona.unlimited.monthly.9.new",
        "expires_date": "2025-01-01T15:35:49Z"
      }
    },
    "original_purchase_date": "2023-10-22T04:29:44Z",
    "original_app_user_id": "A5CE5756-29AB-42FE-8DA7-B6581996CA66",
    "last_seen": "2023-12-01T05:51:08Z"
  },
  "attributes_error_response": {
    "code": 7263,
    "message": "Some subscriber attributes keys were unable to be saved.",
    "attribute_errors": [
      {
        "message": "Facebook Anonymous ID cannot be modified.",
        "key_name": "$fbAnonId"
      },
      {
        "message": "IDFV cannot be modified.",
        "key_name": "$idfv"
      },
      {
        "message": "AppsFlyer ID cannot be modified.",
        "key_name": "$appsflyerId"
      }
    ]
  }
}
$done({body : JSON.stringify(objc)});