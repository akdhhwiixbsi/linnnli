/******************************

[rewrite_local]
^https:\/\/www\.zhixi\.com url script-response-body xn.js
[mitm] 
hostname = www.zhixi.com



*******************************/

var modifiedHeaders = $request.headers;

modifiedHeaders['Authorization'] = 'Bearer e9b9e786a94db1b77254a780f92e3e40';


$done({headers : modifiedHeaders});
