/*

[rewrite_local]
^https:\/\/api\.yingyutingting\.com \/1\.1\/\.+ url script-response-body url script-response-body xiaoying.js
^https?://buy\.itunes\.apple\.com/verifyReceipt url script-request-response xiaoying.js
*/
// xiaoying.js - 小鹦看看 破解脚本
// 功能：修改 api.yingyutingting.com 响应 + Mock App Store 收据验证

let url = $request.url;

// 场景1：响应体修改 (由 script-response-body 触发)
if (typeof $response !== 'undefined') {
    if (url.includes('api.yingyutingting.com') && /\/1\.1\//.test(url)) {
        let body = $response.body;
        if (body) {
            // 注入 Pro IAP 信息
            body = body.replace(/"clientType":"ios"/g, 
                '"clientType":"ios", "pollykannProIAP":"vip.quarterly.pollykann\\n[2024-07-22 22:28:28-->2088-03-09 02:01:47]","pollykannIAPProPurchasedDate":{"__type":"Date","iso":"2024-07-22T14:28:28.000Z"}');
            // 固定 updatedAt
            body = body.replace(/"updatedAt":".*?"/g, 
                '"updatedAt":"2025-11-14T16:55:49.784Z"');
            // 固定 createdAt
            body = body.replace(/"createdAt":".*?"/g, 
                '"createdAt":"2025-11-13T17:11:29.089Z"');
            // 修改 UserProfile
            body = body.replace(/"UserProfile":"[^}]+"/g, 
                '"UserProfile":"{\\"ModifyDate\\":\\"2025-11-14 18:30:09\\",\\"Nickname\\":\\"考虑\\""');
            $done({ body });
        } else {
            $done({});
        }
    } else {
        $done({});
    }
}
// 场景2：请求 Mock (由 script-request-response 触发)
else {
    if (url.includes('buy.itunes.apple.com') && url.includes('/verifyReceipt')) {
        let mockFile = $file.read('08997709.txt');
        if (mockFile) {
            $done({
                response: {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' },
                    body: mockFile
                }
            });
        } else {
            // 文件不存在则继续原始请求
            $done({});
        }
    } else {
        $done({});
    }
}