/*******************************

[rewrite_local]

[rewrite_local]
^https:\/\/api\.apphud\.com\/v1 url script-response-body atcx.js
[mitm] 
hostname = api.apphud.com


*******************************/

var objc = JSON.parse($response.body);

    objc = {
  "errors": null,
  "data": {
    "results": {
      "locale": "zh_CN",
      "id": "e7175026-801e-4769-8867-7152ce7f709c",
      "created_at": "2024-04-02T10:37:44.561Z",
      "subscriptions": [
        {
          "status": "trial",
          "group_id": "961a2d33",
          "autorenew_enabled": false,
          "introductory_activated": true,
          "cancelled_at": null,
          "kind": "autorenewable",
          "id": "73fd6c0e-5cee-4372-9fe6-34e58e93189c",
          "next_check_at": "209-04-05T11:03:28.000Z",
          "product_id": "member.month",
          "platform": "ios",
          "environment": "production",
          "local": false,
          "retries_count": 0,
          "units_count": 1,
          "unit": "month",
          "in_retry_billing": false,
          "started_at": "2024-04-02T10:56:28.000Z",
          "original_transaction_id": "1150000008172796",
          "expires_at": "2099-04-05T10:56:28.000Z",
          "is_consumable": null
        }
      ],
      "user_id": "18888668888",
      "currency": {
        "code": "CNY",
        "id": "a5604c08-9833-4d8b-a677-f31e7717d8e5",
        "country_code": "CN",
        "country_code_alpha3": "CHN"
      },
      "devices": []
    },
    "meta": null
  }
}

$done({body : JSON.stringify(objc)});
