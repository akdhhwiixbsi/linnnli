/**
[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/refs/heads/main/dja.js

^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/refs/heads/main/dja.js

[mitm] 

hostname = api.revenuecat.com

*******************************/

const py996 = {};
let py997 = null;

try {
  py997 = JSON.parse(
    (typeof $response !== "undefined" && $response.body) || "null"
  );
} catch (e) {
  py997 = null;
}

const name = "pro";
const appid = "com.algoriddim.djay_iphone_free.pro.yearly";

if (typeof $response === "undefined") {
  // 请求阶段：删 ETag
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  py996.headers = $request.headers;
  $done(py996);
} else if (py997 && py997.subscriber) {
  const data = {
    "expires_date": "9999-09-09T09:09:09Z",
    "original_purchase_date": "2023-02-23T02:33:33Z",
    "purchase_date": "2023-02-23T02:33:33Z",
    "ownership_type": "PURCHASED",
    "store": "app_store",
    "product_identifier": appid,
    "is_sandbox": false,
    "billing_issues_detected_at": null,
    "grace_period_expires_date": null,
    "unsubscribe_detected_at": null,
    "refunded_at": null,
    "auto_resume_date": null,
    "period_type": "normal",
    "price": { "amount": 0, "currency": "CNY" },
    "store_transaction_id": "730001101774953"
  };

  py997.subscriber.entitlements = py997.subscriber.entitlements || {};
  py997.subscriber.subscriptions = py997.subscriber.subscriptions || {};
  py997.subscriber.entitlements[name] = data;
  py997.subscriber.subscriptions[appid] = data;

  // 清理响应头
  const headers = {};
  const oldHeaders = $response.headers || {};
  for (const key in oldHeaders) {
    const k = key.toLowerCase();
    if (k !== "x-revenuecat-etag" && k !== "etag" && k !== "content-length") {
      headers[key] = oldHeaders[key];
    }
  }
  headers["Content-Type"] = "application/json";

  $done({
    status: "HTTP/1.1 200 OK",
    headers: headers,
    body: JSON.stringify(py997)
  });
} else {
  
  $done({});
}
