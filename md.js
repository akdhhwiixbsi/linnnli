/****
[rewrite_local]
^https:\/\/md-game\.cnhsqk\.com\/api\/qbank\/packs\/\.+ url script-response-body https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/refs/heads/main/md.js
^https:\/\/md-game\.cnhsqk\.com\/api\/qbank\/(packs/ttl/history/practice|.+/list) url script-request-header https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/refs/heads/main/md.js

[mitm] 
hostname = md-game.cnhsqk.com

***/

// 判断当前是请求还是响应
if ($request) {
    // 请求阶段：修改请求头
    var modifiedHeaders = $request.headers;
    modifiedHeaders['Token'] = '3791809ea101b939c180112b5e19fc9f14696b02401f45dcab40cd93fc56caab';
    $done({headers: modifiedHeaders});
} 
else if ($response) {
    // 响应阶段：修改响应体
    try {
        var body = $response.body;
        
        // 修正正则表达式
        body = body.replace(/"isFree":\w+/g, '"isFree":true');
        body = body.replace(/"available":\w+/g, '"available":true');
        
        $done({body: body});
    } catch (error) {
        // 出错时不修改
        $done({});
    }
} 
else {
    $done({});
}