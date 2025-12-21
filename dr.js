/**************************

[rewrite_local]
^https:\/\/draw-accounts\.joytunes\.com\/server\/accounts\/\.+ url script-response-body dr.js
[mitm] 
hostname = draw-accounts.joytunes.com


*******************************/
   var body = $response.body;
    body = body.replace(/\"membershipDescription":".*?"/g,'\ "membershipDescription":"高级会员"');
    body = body.replace(/\"isPremium":\w+/g,'\ "isPremium":true');
    body = body.replace(/\"membershipType":".*?"/g,'\"membershipType":"JOYTUNESBUNDLE"');
    body = body.replace(/\"membershipTier":"\w+"/g,'\ "membershipTier":"premium_home"');
    body = body.replace(/\"profilesAccess":\w+/g,'\ "profilesAccess":"INDIVIDUAL"');
    body = body.replace(/\"planDuration":"\w+"/g,'\ "planDuration":"onemonth"');

$done({body});
