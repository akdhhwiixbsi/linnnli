/*

[rewrite_local]
^https:\/\/api\.flicker\.cool\/api\/v1\/sync\/batch\/pull url script-response-body shandian.js

[mitm] 
hostname = api.flicker.cool

**/

var obj = JSON.parse($response.body);
      obj ={
  "error": 0,
  "data": {
    "member": {
      "userId": "1b11f397423d70cc3dc484353461d508",
      "isContract": false,
      "isLife": false,
      "id": "7b5f24600a153c3d3f895b2362f191dc",
      "expiredTime": 3814841849231,
      "memberType": "todo_member",
      "createdTime": 1712249849229,
      "updatedTime": 1712249849229
    },
    "latestSyncTime": 1712249790727,
    "notifyMessage": {
      "unreadCount": 2,
      "undealCount": 0
    },
    "members": [
      {
        "userId": "1b11f397423d70cc3dc484353461d508",
        "isContract": false,
        "isLife": false,
        "id": "7b5f24600a153c3d3f895b2362f191dc",
        "expiredTime": 3814841849231,
        "memberType": "todo_member",
        "createdTime": 1712249849229,
        "updatedTime": 1712249849229
      }
    ]
  }
}

$done({body : JSON.stringify(obj)});