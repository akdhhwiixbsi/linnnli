/****

[rewrite_local]
^http:\/\/wfjava\.wfkids\.net\/wfcm-api\/.+ url script-response-body hff.js
[mitm] 
hostname = wfjava.wfkids.net

*******************************/
   var body = $response.body;
    body = body.replace(/\"chaptertype":\d+/g,'\ "chaptertype":1');
    body = body.replace(/\"belongFlag":\d/g,'\ "belongFlag":1');
    body = body.replace(/\"chapterType":\d/g,'\ "chapterType":1');
    body = body.replace(/\"belong":\d/g,'\ "belong":1');
 
 $done({body});