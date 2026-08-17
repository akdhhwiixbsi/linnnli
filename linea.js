/*

[rewrite_local]
^https:\/\/proxy\.linearity\.io\/v1\/\.+ url script-response-body https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/refs/heads/main/linea.js
[mitm] 
hostname = proxy.linearity.io

**/
let body = {
  "request_date": "2025-08-04T03:43:19Z",
  "request_date_ms": 1754278999628,
  "subscriber": {
    "entitlements": {
      "pro": {
        "expires_date": "2099-02-28T04:22:09Z",
        "grace_period_expires_date": null,
        "product_identifier": "linearity_curve_pro_monthly_2",
        "purchase_date": "2024-10-31T12:13:19Z"
      }
    },
    "first_seen": "2024-09-17T18:43:12Z",
    "last_seen": "2025-08-04T03:42:32Z",
    "management_url": null,
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:7f53b639037d462fb264213d9dee6223",
    "original_application_version": "1906",
    "original_purchase_date": "2024-09-17T18:39:01Z",
    "other_purchases": {},
    "subscriptions": {
      "linearity_curve_pro_monthly_2": {
        "auto_resume_date": null,
        "billing_issues_detected_at": null,
        "display_name": null,
        "expires_date": "2099-03-16T08:52:29Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2025-03-09T09:52:30Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "price": {
          "amount": 0,
          "currency": "CNY"
        },
        "purchase_date": "2024-10-31T12:13:19Z",
        "refunded_at": null,
        "store": "app_store",
        "store_transaction_id": "500001926893406",
        "unsubscribe_detected_at": "2024-10-31T12:13:51Z"
      }
    }
  }
}
$done({ body: JSON.stringify(body) });
