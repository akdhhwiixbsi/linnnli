/*
[rewrite_local]
^https:\/\/api\.revenuecat\.com\/v1\/\.+ url script-request-header https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/refs/heads/main/linea4.js
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