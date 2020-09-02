exports.config = {
  URL: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=99168bb4-2bba-4c68-9d95-6e137ca3b7e5',
  MAX_TIMES: 10, // 重试次数
  TIME_GAP: 1000 * 60 // 重试间隔
}