/*******

[rewrite_local]
# 处理请求头修改
^https:\/\/md-game\.cnhsqk\.com\/api\/qbank\/packs\/ttl\/history\/practice url script-request-header https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/refs/heads/main/md.js
^https:\/\/md-game\.cnhsqk\.com\/api\/qbank\/.*\/list url script-request-header https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/refs/heads/main/md.js

# 处理响应体修改
^https:\/\/md-game\.cnhsqk\.com\/api\/qbank\/.* url script-response-body https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/refs/heads/main/md.js

[mitm]
hostname = md-game.cnhsqk.com

***/
// ============================================
// 秒懂生物 - Quantumult X 重写脚本
// 功能：
// 1. 修改 /api/qbank/* 下的 isFree 和 available 字段
// 2. 修改特定路径的请求头 Token
// 版本: 1.0
// ============================================

// 固定 Token
const FIXED_TOKEN = "3791809ea101b939c180112b5e19fc9f14696b02401f45dcab40cd93fc56caab";

// 主函数
(function() {
    'use strict';
    
    const url = $request ? $request.url : ($response ? $response.url : '');
    
    // 只处理目标域名
    if (!url || !url.includes("md-game.cnhsqk.com")) {
        $done({});
        return;
    }
    
    // 请求阶段处理
    if ($request) {
        handleRequest();
    }
    // 响应阶段处理
    else if ($response) {
        handleResponse();
    }
    else {
        $done({});
    }
})();

// ============================================
// 请求处理函数 - 修改请求头Token
// ============================================
function handleRequest() {
    const url = $request.url;
    const headers = Object.assign({}, $request.headers);
    let modified = false;
    
    // 规则1: /api/qbank/packs/ttl/history/practice - 修改Token
    if (url.includes("/api/qbank/packs/ttl/history/practice")) {
        headers["Token"] = FIXED_TOKEN;
        modified = true;
        console.log(`[请求] 为历史练习接口修改Token: ${FIXED_TOKEN.substring(0, 10)}...`);
    }
    
    // 规则2: /api/qbank/*/list - 修改Token
    if (url.includes("/api/qbank/") && url.includes("/list")) {
        headers["Token"] = FIXED_TOKEN;
        modified = true;
        console.log(`[请求] 为列表接口修改Token: ${FIXED_TOKEN.substring(0, 10)}...`);
    }
    
    // 如果有修改，返回修改后的请求头
    if (modified) {
        // 添加修改标记
        headers["X-Modified-By"] = "QuantumultX Script";
        
        $done({ headers: headers });
    } else {
        $done({});
    }
}

// ============================================
// 响应处理函数 - 修改响应体字段
// ============================================
function handleResponse() {
    const url = $response.url;
    
    // 只处理成功响应
    if ($response.status < 200 || $response.status >= 300) {
        $done({});
        return;
    }
    
    // 只处理 /api/qbank/* 下的响应
    if (!url.includes("/api/qbank/")) {
        $done({});
        return;
    }
    
    try {
        let body = $response.body;
        const headers = Object.assign({}, $response.headers);
        let modified = false;
        
        // 使用正则表达式修改字段
        // 1. 修改 "isFree":\w+ 为 "isFree":true
        const isFreeRegex = /"isFree":\s*\w+/g;
        if (isFreeRegex.test(body)) {
            body = body.replace(isFreeRegex, '"isFree":true');
            modified = true;
            console.log(`[响应] 已修改 isFree 字段`);
        }
        
        // 2. 修改 "available":\w+ 为 "available":true
        const availableRegex = /"available":\s*\w+/g;
        if (availableRegex.test(body)) {
            body = body.replace(availableRegex, '"available":true');
            modified = true;
            console.log(`[响应] 已修改 available 字段`);
        }
        
        // 如果有修改，返回修改后的响应
        if (modified) {
            // 添加修改标记到响应头
            headers["X-Modified-By"] = "QuantumultX Script";
            headers["X-Modify-Time"] = new Date().toISOString();
            
            $done({
                status: $response.status,
                headers: headers,
                body: body
            });
        } else {
            $done({});
        }
        
    } catch (error) {
        console.error(`[错误] 处理响应时出错: ${error}`);
        $done({});
    }
}