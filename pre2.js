/*
[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/main/pre2.js
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/main/pre2.js

[MITM]
hostname = api.revenuecat.com

*/
const guding = {};
const guding6 = JSON.parse(typeof $response != "undefined" && $response.body || null);
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  guding.headers = $request.headers;
} 
  const guding = {
  "request_date": "2024-07-03T09:57:04Z",
  "request_date_ms": 1720000624144,
  "subscriber": {
    "non_subscriptions": {},
    "first_seen": "2024-07-03T09:50:16Z",
    "original_application_version": "354",
    "other_purchases": {},
    "management_url": "https://apps.apple.com/account/subscriptions",
    "subscriptions": {
      "com.previsshot.previsshot.continuous_subscribe_12month_vip": {
        "original_purchase_date": "2024-07-03T09:53:54Z",
        "expires_date": "2099-07-06T09:53:53Z",
        "is_sandbox": false,
        "refunded_at": null,
        "store_transaction_id": "170002236286982",
        "unsubscribe_detected_at": "2024-07-03T09:57:04Z",
        "grace_period_expires_date": null,
        "period_type": "trial",
        "purchase_date": "2024-07-03T09:53:53Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "auto_resume_date": null
      }
    },
    "entitlements": {
      "VIP": {
        "grace_period_expires_date": null,
        "purchase_date": "2024-07-03T09:53:53Z",
        "product_identifier": "com.previsshot.previsshot.continuous_subscribe_12month_vip",
        "expires_date": "2099-07-06T09:53:53Z"
      }
    },
    "original_purchase_date": "2024-07-03T09:48:13Z",
    "original_app_user_id": "$RCAnonymousID:5c04b048124d43db8ddebc9cff33cc06",
    "last_seen": "2024-07-03T09:50:16Z"
  }
}

    guding.body = JSON.stringify(guding6);
}
$done(guding);