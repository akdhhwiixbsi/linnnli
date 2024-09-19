/*******************************

[rewrite_local]
^https:\/\/api-chn\.rthdo\.com\/api\/rest\/u\/vipVerifyReceipt url script-response-body xy.js
[mitm] 
hostname = api-chn.rthdo.com





*******************************/

var objc = JSON.parse($response.body);

    objc = {
  "autoRenewStatus": 0,
  "originalTransactionId": "440001467929084",
  "duidDgest": "DIfwagdm",
  "hasIntroOfferProds": [],
  "iosDeviceProductVo": {
    "newVipMonthly": 3,
    "premiumVipWeekly": 3,
    "premiumPlatinumQuarterly": 3,
    "premiumGoldMonthly": 3,
    "premiumPlatinumMonthly": 3,
    "newVipYearly": 3,
    "premiumVipYearly": 3,
    "newVipWeekly": 3,
    "nonOrganicVipMonthly": 3,
    "premiumPlatinumHalfYearly": 3,
    "nonOrganicVipWeekly": 3,
    "premiumGoldYearly": 3,
    "nonOrganicVipYearly": 3,
    "premiumPlatinumYearly": 2
  },
  "platform": 2,
  "endTime": 5686761108000,
  "systemDate": 1693433652983,
  "productList": [
    {
      "isRenew": true,
      "vipType": "premium_platinum_yearly"
    }
  ],
  "hasFreedTrialProds": [
    "premium_platinum_yearly"
  ],
  "isTrialPeriod": true,
  "transactionId": "440001467929084",
  "startTime": 1686501908000,
  "vipType": "premium_platinum_yearly",
  "sign": "ea6f4dc65a57bac86d474699b0563e7f"
}
$done({body : JSON.stringify(objc)});
