/*
[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1\/\.+ url script-request-header https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/refs/heads/main/dj.js
^https:\/\/api\.revenuecat\.com\/v1\/\.+ url script-response-body https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/refs/heads/main/dj.js

[mitm]
hostname = api.revenuecat.com
*/
let fakeBody = {
  "request_date": "2026-08-22T09:51:18Z",
  "request_date_ms": 1787392278189,
  "subscriber": {
    "entitlements": {
      "pro": {
        "expires_date": "2099-02-28T04:22:09Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.algoriddim.djay_iphone_free.pro.yearly",
        "purchase_date": "2023-03-22T09:29:59Z"
      }
    },
    "first_seen": "2026-08-13T16:58:59Z",
    "last_seen": "2026-08-22T09:46:11Z",
    "management_url": null,
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:6e951c1264114ad38a7613cd555f412e",
    "original_application_version": "66493",
    "original_purchase_date": "2026-08-13T16:58:59Z",
    "other_purchases": {},
    "subscriptions": {
      "com.algoriddim.djay_iphone_free.pro.yearly": {
        "auto_resume_date": null,
        "billing_issues_detected_at": null,
        "display_name": "Readle DE Yearly",
        "expires_date": "2099-03-16T08:52:29Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2023-03-22T09:30:00Z",
        "ownership_type": "PURCHASED",
        "period_type": null,
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
};

if (typeof $response === 'undefined') {
  // 请求阶段：删除请求头 X-RevenueCat-ETag
  let reqHeaders = $request.headers || {};
  for (let key in reqHeaders) {
    if (key.toLowerCase() === 'x-revenuecat-etag') {
      delete reqHeaders[key];
    }
  }
  $done({ headers: reqHeaders });
} else {
  // 响应阶段：删除响应头 x-revenuecat-etag，修改状态码为 200，并替换 body
  let respHeaders = {};
  let oldRespHeaders = $response.headers || {};

  for (let key in oldRespHeaders) {
    let lowerKey = key.toLowerCase();

    // 删除 x-revenuecat-etag，顺便删掉 content-length，避免 body 变化后长度不一致
    if (lowerKey !== 'x-revenuecat-etag' && lowerKey !== 'content-length') {
      respHeaders[key] = oldRespHeaders[key];
    }
  }

  $done({
    status: "HTTP/1.1 200 OK",
    headers: respHeaders,
    body: JSON.stringify(fakeBody)
  });
}