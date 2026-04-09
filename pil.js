/******
[rewrite_local]
#修改
^https:\/\/(api\.rc-backup\.com|api\.rc-backup\.com)\/.+\/(receipts$|subscribers\/[^/]+$) url script-response-body https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/refs/heads/main/pil.js
#清理
^https:\/\/(api\.rc-backup\.com|api\.rc-backup\.com)\/.+\/(receipts$|subscribers\/[^/]+$) url script-request-header https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/refs/heads/main/pil.js

[mitm] 
hostname = api.rc-backup.com

**/

// 合并原 HTTP Catcher 所有功能：
// 1. 删除请求头 X-RevenueCat-ETag 和 X-Apple-Device-Identifier
// 2. 强制返回 200 状态码
// 3. 删除响应头 x-revenuecat-etag 和 x-request-id
// 4. 伪造完整的订阅和 entitlements 数据

if (typeof $response == "undefined") {
    // ========== 请求阶段 ==========
    if ($request.headers) {
        // 删除 RevenueCat 缓存标签
        delete $request.headers["X-RevenueCat-ETag"];
        delete $request.headers["x-revenuecat-etag"];
        // 删除 Apple 设备标识（避免追踪）
        delete $request.headers["X-Apple-Device-Identifier"];
    }
    $done({ request: $request });
} else {
    // ========== 响应阶段 ==========
    // 构造伪造的响应体（完全替代原始响应）
    var fakeBody = {
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

    // 删除响应头中可能存在的缓存标识和请求ID
    var fakeHeaders = {};
    if ($response.headers) {
        // 复制原始响应头，但排除需要删除的字段
        for (var key in $response.headers) {
            var lowerKey = key.toLowerCase();
            if (lowerKey !== "x-revenuecat-etag" && lowerKey !== "x-request-id") {
                fakeHeaders[key] = $response.headers[key];
            }
        }
    }

    // 返回 200 状态码、伪造的 body、清理后的 headers
    $done({
        status: 200,
        body: JSON.stringify(fakeBody),
        headers: fakeHeaders
    });
}