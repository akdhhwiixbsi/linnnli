let body = $response.body
if (!body) return $done({})

const u = $request.url

if (/kegel3\.lmfasting\.cn\/api\/user\/getUserInfo/.test(u)) {
  body = body.replace(/"hadVip":\w+/g,
    '"hadVip":true,"vipType":"lifetime","lastVipType":"永久会员","vipDays":36244')
} else if (/api\/v2\/lesson\/get/.test(u)) {
  body = body
    .replace(/"need_buy":\w+/g, '"need_buy":false')
    .replace(/"dialog":\d/g, '"dialog":0')
    .replace(/"workout_flags":\[\[.*?\]\]999/g, '"workout_flags":[[1],[1]]')
}

$done({ body })
