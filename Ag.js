/*************************************


[rewrite_local]
^https:\/\/accounts\.agenda\.com\/users\/\.+\/license url script-response-body https://raw.githubusercontent.com/akdhhwiixbsi/linnnli/main/Ag.js
[mitm] 
hostname = accounts.agenda.com



*************************************/



var objc = JSON.parse($response.body);

    objc = {
  "licenseStatusMobile": 2,
  "unlockExpiryMobile": 721550422,
  "licenseStatus": 2,
  "informUserOfPendingBonus": false,
  "hasLifetimeUnlock": false,
  "isSubscribed": true,
  "freeTrialStatus": 1,
  "isSubscribedMobile": true,
  "error": 0,
  "unlockExpiry": 721550422,
  "universalPurchaseAvailable": false
}

$done({body : JSON.stringify(objc)});
