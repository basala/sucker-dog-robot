exports.config = {
  URL: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=03770be8-e341-4938-9c2a-0ccdd4dddd4e',
  MAX_TIMES: 10, // 重试次数
  TIME_GAP: 1000 * 60 // 重试间隔
}