\*******************************

[rewrite_local]

^https:\/\/app\.3dbody\.cn\/api\/(system\/register\/switch|course\/detail|content|common|resource|resource\/category\/list|body\/category\/list|system\/video\/watermark|body\/home\/body|content\/screen) url script-request-header 3d.js

[mitm] 
hostname = app.3dbody.cn

*******************************/

var modifiedHeaders = $request.headers;

modifiedHeaders['authorization'] = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNzU2ODAyOTExOCIsImNyZWF0ZWQiOjE3MTA4MzcyOTkyODYsImV4cCI6MTcxODYxMzI5OX0.OnnIF2O2FhIryv6nsGhKn3JVsD146miS7D-pQ-zc_VUZUNxKtjJQHTeHncJlsJUNG-GPmIH6H8yIBIWNYmN3PQ';

$done({headers : modifiedHeaders});