/*******************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1 url script-response-body grmb.js
[mitm] 
hostname = api.revenuecat.com



*******************************/

var objc = JSON.parse($response.body);

    objc = {
  "request_date_ms": 1692389514264,
  "request_date": "2023-08-18T20:11:54Z",
  "subscriber": {
    "last_seen": "2023-08-18T15:16:30Z",
    "first_seen": "2023-08-18T15:16:30Z",
    "original_application_version": "230803.0920",
    "other_purchases": {},
    "management_url": "https://apps.apple.com/account/subscriptions",
    "subscriptions": {
      "pixelmator_photo_yearly_v1": {
        "store_transaction_id": "150001492449586",
        "expires_date": "2099-08-25T15:16:58Z",
        "is_sandbox": false,
        "refunded_at": null,
        "unsubscribe_detected_at": "2023-08-18T15:46:57Z",
        "auto_resume_date": null,
        "grace_period_expires_date": null,
        "period_type": "trial",
        "purchase_date": "2023-08-18T15:16:58Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "original_purchase_date": "2023-08-18T15:16:59Z"
      }
    },
    "entitlements": {
      "pixelmator_photo_pro_access": {
        "expires_date": "2099-08-25T15:16:58Z",
        "purchase_date": "2023-08-18T15:16:58Z",
        "product_identifier": "pixelmator_photo_yearly_v1",
        "grace_period_expires_date": null
      }
    },
    "original_purchase_date": "2023-08-18T15:14:10Z",
    "original_app_user_id": "$RCAnonymousID:8f22b9bedbc148d8b65e219a8a927532",
    "non_subscriptions": {}
  }
}

$done({body : JSON.stringify(objc)});
