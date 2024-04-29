/*************************************
[rewrite_local]
^https?://app.3dbody.cn/api/(system/register/switch|course/detail/|content/|common/|resource/|resource/category/list|body/category/list|system/video/watermark|body/home/body|content/screen) url script-request-header 3D.js 
[mitm] 
hostname = app.3dbody.cn


*************************************/

var modifiedHeaders = $request.headers;

modifiedHeaders['authorization'] = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODY2MzM4MDc2OCIsImNyZWF0ZWQiOjE3MTQwMDg3NjE4NDMsImV4cCI6MTcyMTc4NDc2MX0.LhYVLsxTaal4vsPZ_BpouSx7RCQGcq8EQmB6KUUiUmXaFLpTJp_pzqsLzeir3e709ftE8AGZx5NsJ07tYqXbqQ';

$done({headers : modifiedHeaders});