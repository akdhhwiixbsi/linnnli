/*
[rewrite_local]
^https:\/\/proxy\.linearity\.io\/v1\/subscribers\/\.+ url script-request-header https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/refs/heads/main/linea3.js
*/

// 获取请求头副本
let headers = $request.headers || {};

// 删除目标请求头（不区分大小写）
delete headers['X-RevenueCat-ETag'];
delete headers['x-revenuecat-etag'];
for (let key in headers) {
  if (key.toLowerCase() === 'x-revenuecat-etag') {
    delete headers[key];
  }
}

// 回传修改后的请求头
$done({ headers: headers });