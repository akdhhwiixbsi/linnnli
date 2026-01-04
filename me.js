/*
[rewrite_local]

^https:\/\/md-game\.cnhsqk\.com\/api\/qbank\/(packs\/ttl\/history\/practice|.+\/list) url script-request-header https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/refs/heads/main/me.js

^https:\/\/md-game\.cnhsqk\.com\/api\/qbank\/.+ url script-response-body https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/refs/heads/main/me.js

[mitm] 
hostname = md-game.cnhsqk.com
*/
// ============================================
// md-combined.js - 秒懂生物优化版
// ============================================

const TOKEN = "3791809ea101b939c180112b5e19fc9f14696b02401f45dcab40cd93fc56caab";
const DEBUG = false;

(function() {
    // 获取当前处理的URL
    const currentUrl = $request ? $request.url : ($response ? $response.url : '');
    
    if (!currentUrl || !currentUrl.includes("md-game.cnhsqk.com")) {
        if (DEBUG) console.log(`[调试] 跳过: 非目标域名`);
        $done({});
        return;
    }
    
    if (DEBUG) {
        console.log(`[调试] 处理URL: ${currentUrl}`);
        console.log(`[调试] 阶段: ${$request ? '请求' : '响应'}`);
    }
    
    // 请求阶段处理
    if ($request) {
        processRequest();
    }
    // 响应阶段处理
    else if ($response) {
        processResponse();
    }
    else {
        $done({});
    }
})();

function processRequest() {
    const url = $request.url;
    
    // 检查是否需要修改Token
    const needToken = url.includes("/api/qbank/packs/ttl/history/practice") ||
                     (url.includes("/api/qbank/") && url.includes("/list"));
    
    if (!needToken) {
        if (DEBUG) console.log(`[请求] 跳过: 非目标接口`);
        $done({});
        return;
    }
    
    // 复制请求头并添加Token
    const newHeaders = Object.assign({}, $request.headers);
    newHeaders["Token"] = TOKEN;
    
    if (DEBUG) {
        console.log(`[请求] 已添加Token到接口: ${url.split('/').pop()}`);
    }
    
    $done({headers: newHeaders});
}

function processResponse() {
    // 检查响应状态
    if ($response.status < 200 || $response.status >= 300) {
        if (DEBUG) console.log(`[响应] 跳过: 状态码 ${$response.status}`);
        $done({});
        return;
    }
    
    const url = $response.url;
    
    // 只处理 qbank 接口
    if (!url.includes("/api/qbank/")) {
        $done({});
        return;
    }
    
    let body = $response.body;
    let modified = false;
    
    // 更精确的正则表达式
    const patterns = [
        // 匹配 "available":值（支持多种格式）
        { 
            regex: /"available"\s*:\s*(false|0|"false")/gi, 
            replacement: '"available":true' 
        },
        { 
            regex: /"isFree"\s*:\s*(false|0|"false")/gi, 
            replacement: '"isFree":true' 
        },
        // 处理简单的布尔值
        { 
            regex: /"available":\s*false/gi, 
            replacement: '"available":true' 
        },
        { 
            regex: /"isFree":\s*false/gi, 
            replacement: '"isFree":true' 
        }
    ];
    
    // 应用所有正则替换
    patterns.forEach(pattern => {
        if (pattern.regex.test(body)) {
            body = body.replace(pattern.regex, pattern.replacement);
            modified = true;
        }
    });
    
    if (modified) {
        if (DEBUG) {
            console.log(`[响应] 已修改: ${url.split('/').pop()}`);
            console.log(`[响应] 修改后长度: ${body.length} 字节`);
        }
        
        $done({body: body});
    } else {
        if (DEBUG) console.log(`[响应] 未找到需要修改的字段`);
        $done({});
    }
}