const request = require('request')

const CONFIG = require('./core/config.js').config

const send_msg = (callback) => {
  request({
    json: true,
    method: 'POST',
    url: CONFIG.URL,
    body: {
        'msgtype': 'text',
        'text': {
            'content': '小哥哥，工作辛苦啦！不要忘了今天的工作日志哦ヾ(◍°∇°◍)ﾉﾞ',
            'mentioned_list': ['@all']
        }
    }
  }, (err, res, body) => {
    typeof callback === 'function' && callback(err, res, body)
  })
}

let counter = 0
let timer = null

const callback = (err, res, body) => {
    counter += 1
    if (err && counter <= CONFIG.MAX_TIMES) {
    if (counter <= CONFIG.MAX_TIMES) {
        console.log('suck failed\nauto retry...')
    } else {
        console.log('suck faied 10 times, please check your network and retry later.')
        clearInterval(timer)
    }
    return
    }
    clearInterval(timer)
    console.log('suck success')
}

timer = setInterval(() => {
    send_msg(callback)
}, CONFIG.TIME_GAP)

send_msg(callback)