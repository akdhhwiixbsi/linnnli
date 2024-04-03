/******************************


[rewrite_local]

^https:\/\/integral2\.zhijiantime\.com\/.+ url script-request-header zj.js

[mitm] 

hostname = integral2.zhijiantime.com



*******************************/

var modifiedHeaders = $request.headers;

modifiedHeaders['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjI2MTI3IiwiYXVkIjoiWmhpamlhbkF1ZGllbmNlIiwibmJmIjoxNzExNjA0NjA4LCJTTlNQbGF0Zm9ybSI6IldYIiwiRGV2aWNlSWQiOiJBM0VFQzQ1NS00NjJCLURBM0UtMjdBRS0zNjdCRUE0NTRCMjUiLCJpc3MiOiJaaGlqaWFuemh1b3l1ZSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiLlk7zlk7zllKfllKciLCJleHAiOjU3OTMxNzMwMTh9.2rPoSGPRWFHSXJDFPYllKUwbvWmCD78XndLwgd-LwSY';


$done({headers : modifiedHeaders});
