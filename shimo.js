/*********************************

[rewrite_local]
^https:\/\/shimo\.im\/lizard-api\/users\/me url script-response-body shimo.js
[mitm] 
hostname = shimo.im


********************************/

var body = $response.body;

    body = body.replace(/\"isEnterprise":false/g,'\"isEnterprise":true');
    body = body.replace(/\"isFreeEnterprise":false/g,'\"isFreeEnterprise":true');
    body = body.replace(/\"isDingtalk":false/g,'\"isDingtalk":true');
body = body.replace(/\"isWework":false/g,'\"isWework":true');
    body = body.replace(/\"isTrial":false/g,'\"isTrial":true');
    body = body.replace(/\"isPersonalPremium":false/g,'\"isPersonalPremium":true');
    body = body.replace(/\"isEnterprisePremium":false/g,'\"isEnterprisePremium":true');
    
    
$done({body});
