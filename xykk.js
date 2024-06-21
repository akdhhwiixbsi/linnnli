[rewrite_local]

^http[s]?:\/\/api.pollykann.com\/media url script-response-body xykk.js

[mitm] 

hostname = api.pollykann.com

*******************************/

var body = $response.body.replace(/"isPurchased":false/g,'"isPurchased":true')
$done({ body });