/*******************************

[rewrite_local]
^https:\/\/api\.rc-backup\.com\/v1\/\.+ url script-response-body https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/refs/heads/main/pill.js
[mitm] 
hostname = api.rc-backup.com


*******************************/

var objc = JSON.parse($response.body);

    objc = {
  "request_date": "2026-04-09T15:21:51Z",
  "request_date_ms": 1775748111140,
  "subscriber": {
    "entitlements": {
      "premium": {
        "expires_date": "2099-03-29T09:29:59Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.neybox.pillow.premium.year",
        "purchase_date": "2023-03-22T09:29:59Z"
      }
    },
    "first_seen": "2025-04-18T05:29:04Z",
    "last_seen": "2025-11-16T04:14:44Z",
    "management_url": null,
    "non_subscriptions": {},
    "original_app_user_id": "$PLAnonymousID:818B8758-3321-4A84-80E4-46AA9BBACEAD",
    "original_application_version": null,
    "original_purchase_date": null,
    "other_purchases": {},
    "subscriptions": {
      "com.neybox.pillow.premium.year": {
        "auto_resume_date": null,
        "billing_issues_detected_at": null,
        "display_name": null,
        "expires_date": "2099-03-29T09:29:59Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2023-03-22T09:30:00Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "price": {
          "amount": 0,
          "currency": "CNY"
        },
        "purchase_date": "2023-03-22T09:29:59Z",
        "refunded_at": null,
        "store": "app_store",
        "store_transaction_id": "730001101774953",
        "unsubscribe_detected_at": "2023-03-22T09:48:28Z"
      }
    }
  }
}

$done({body : JSON.stringify(objc)});