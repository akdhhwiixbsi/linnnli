/*******************************************

[rewrite_local]
^https:\/\/history\.cnhsqk\.com\/v1\/user\/vipInfo url script-request-header=change-token.js

[mitm] 
hostname = history.cnhsqk.com

********************************************/

// 脚本名称：change-token.js
let url = $request.url;

// 检查是否是目标URL
if (url.includes('history.cnhsqk.com/v1/user/vipInfo')) {
    // 创建新的URL，固定token为a23547
    let newUrl = 'https://history.cnhsqk.com/v1/user/vipInfo?token=5593b5fd00597cdb35195f5c428dd40c';
    
    // 如果有其他参数，保留它们
    let urlObj = new URL(url);
    let params = new URLSearchParams(urlObj.search);
    
    // 移除旧的token参数
    params.delete('token');
    // 添加新的token
    params.set('token', '5593b5fd00597cdb35195f5c428dd40c');
    
    // 重建URL
    newUrl = `${urlObj.origin}${urlObj.pathname}?${params.toString()}`;
    
    $done({url: newUrl});
} else {
    $done({});
}
