/*******************************

[rewrite_local]
#修改
^https:\/\/(api\.revenuecat\.com|api\.rc-backup\.com)\/.+\/(receipts$|subscribers\/[^/]+$) url script-response-body https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/refs/heads/main/pillow.js
#清理
^https:\/\/(api\.revenuecat\.com|api\.rc-backup\.com)\/.+\/(receipts$|subscribers\/[^/]+$) url script-request-header https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/refs/heads/main/pillow.js
 *********************************/

if ($script.type === "request") {
    // ---------- 请求阶段：删除缓存校验头 ----------
    if ($request.headers) {
        delete $request.headers["X-RevenueCat-ETag"];
        // 可选：同时删除其他可能引起 304 的头部
        // delete $request.headers["If-None-Match"];
        // delete $request.headers["If-Modified-Since"];
    }
    $done({ request: $request });
    
} else if ($script.type === "response") {
    // ---------- 响应阶段：伪造订阅数据 ----------
    // 直接构造伪造的响应体（不依赖原始 $response.body）
    var fakeResponse = {
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
    };
    
    $done({ body: JSON.stringify(fakeResponse) });
}
