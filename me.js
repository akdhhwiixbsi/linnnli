// ============================================
// me.js - 秒懂生物重写脚本
// GitHub: https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/refs/heads/main/me.js
// 功能：
// 1. 修改特定接口的请求头Token
// 2. 修改所有qbank接口的响应体字段（isFree和available）
// ============================================

const CONFIG = {
    FIXED_TOKEN: "3791809ea101b939c180112b5e19fc9f14696b02401f45dcab40cd93fc56caab",
    DEBUG: false,
    VERSION: "1.0"
};

// 主入口函数
(function() {
    'use strict';
    
    // 获取当前URL
    const currentUrl = $request ? $request.url : ($response ? $response.url : '');
    
    // 检查是否为目标域名
    if (!currentUrl || !currentUrl.includes("md-game.cnhsqk.com")) {
        if (CONFIG.DEBUG) console.log(`[me.js] 跳过: 非目标域名`);
        $done({});
        return;
    }
    
    if (CONFIG.DEBUG) {
        console.log(`[me.js v${CONFIG.VERSION}] 开始处理: ${currentUrl}`);
        console.log(`阶段: ${$request ? '请求' : '响应'}`);
    }
    
    // 分派处理
    if ($request) {
        handleRequest();
    } else if ($response) {
        handleResponse();
    } else {
        $done({});
    }
})();

// ============================================
// 处理请求 - 修改Token
// ============================================
function handleRequest() {
    try {
        const url = $request.url;
        
        // 精确匹配目标接口
        const isTargetRequest = (
            url.includes("/api/qbank/packs/ttl/history/practice") ||
            (url.includes("/api/qbank/") && url.endsWith("/list"))
        );
        
        if (!isTargetRequest) {
            if (CONFIG.DEBUG) console.log(`[请求] 跳过: 非目标接口`);
            $done({});
            return;
        }
        
        // 复制并修改请求头
        const newHeaders = Object.assign({}, $request.headers);
        newHeaders["Token"] = CONFIG.FIXED_TOKEN;
        
        // 添加修改标记
        newHeaders["X-Modified-By"] = `me.js v${CONFIG.VERSION}`;
        
        if (CONFIG.DEBUG) {
            console.log(`[请求] 已添加Token到: ${getPathName(url)}`);
            console.log(`Token前10位: ${CONFIG.FIXED_TOKEN.substring(0, 10)}...`);
        }
        
        $done({headers: newHeaders});
        
    } catch (error) {
        console.error(`[me.js请求错误] ${error}`);
        $done({});
    }
}

// ============================================
// 处理响应 - 修改字段
// ============================================
function handleResponse() {
    try {
        // 检查响应状态
        if ($response.status < 200 || $response.status >= 300) {
            if (CONFIG.DEBUG) console.log(`[响应] 跳过: 状态码 ${$response.status}`);
            $done({});
            return;
        }
        
        const url = $response.url;
        
        // 只处理 /api/qbank/ 下的响应
        if (!url.includes("/api/qbank/")) {
            if (CONFIG.DEBUG) console.log(`[响应] 跳过: 非qbank接口`);
            $done({});
            return;
        }
        
        // 检查Content-Type，确保是JSON
        const contentType = $response.headers["Content-Type"] || $response.headers["content-type"];
        if (contentType && !contentType.includes("application/json")) {
            if (CONFIG.DEBUG) console.log(`[响应] 跳过: 非JSON响应 (${contentType})`);
            $done({});
            return;
        }
        
        let body = $response.body;
        let modified = false;
        
        // 更安全的正则表达式
        const patterns = [
            // 处理布尔值 false
            { 
                regex: /"available"\s*:\s*false/gi, 
                replacement: '"available":true',
                name: "available(false->true)"
            },
            { 
                regex: /"isFree"\s*:\s*false/gi, 
                replacement: '"isFree":true',
                name: "isFree(false->true)"
            },
            // 处理数字 0
            { 
                regex: /"available"\s*:\s*0/gi, 
                replacement: '"available":1',
                name: "available(0->1)"
            },
            { 
                regex: /"isFree"\s*:\s*0/gi, 
                replacement: '"isFree":1',
                name: "isFree(0->1)"
            },
            // 处理字符串 "false"
            { 
                regex: /"available"\s*:\s*"false"/gi, 
                replacement: '"available":"true"',
                name: "available(\"false\"->\"true\")"
            },
            { 
                regex: /"isFree"\s*:\s*"false"/gi, 
                replacement: '"isFree":"true"',
                name: "isFree(\"false\"->\"true\")"
            }
        ];
        
        // 应用正则替换
        patterns.forEach(pattern => {
            if (pattern.regex.test(body)) {
                body = body.replace(pattern.regex, pattern.replacement);
                modified = true;
                if (CONFIG.DEBUG) console.log(`[响应] 应用规则: ${pattern.name}`);
            }
        });
        
        // 如果没有修改，直接返回
        if (!modified) {
            if (CONFIG.DEBUG) console.log(`[响应] 未找到需要修改的字段`);
            $done({});
            return;
        }
        
        // 如果有修改，返回修改后的响应
        const headers = Object.assign({}, $response.headers);
        headers["X-Modified-By"] = `me.js v${CONFIG.VERSION}`;
        headers["X-Modify-Time"] = new Date().toISOString();
        
        if (CONFIG.DEBUG) {
            console.log(`[响应] 成功修改: ${getPathName(url)}`);
            console.log(`[响应] 原始长度: ${$response.body.length}, 修改后: ${body.length}`);
        }
        
        $done({
            status: $response.status,
            headers: headers,
            body: body
        });
        
    } catch (error) {
        console.error(`[me.js响应错误] ${error}`);
        $done({});
    }
}

// ============================================
// 工具函数
// ============================================
function getPathName(url) {
    try {
        const urlObj = new URL(url);
        return urlObj.pathname.split('/').pop() || urlObj.pathname;
    } catch (e) {
        return url.split('/').pop() || url;
    }
}

// 检查是否为有效的JSON
function isValidJSON(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
}