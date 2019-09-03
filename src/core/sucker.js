const lottery = require('../utils/lottery.js').lottery
const request = require('request')
// const log = require('../utils/log.js')

const URL = require('../config/constant.js').url
const CONFIG = require('./config.js').config

const get_body = () => {
  let lucky_guy = lottery()

  return {
    'msgtype': 'text',
    'text': {
      'content': 'test',
      'mentioned_list': [lucky_guy.name]
    }
  }
}

const send_msg = (callback) => {
  let body = get_body()

  request({
    json: true,
    method: 'POST',
    url: URL,
    body: body
  }, (err, res, body) => {
    typeof callback === 'function' && callback(err, res, body)
  })
}

exports.sucker = {
  on: () => {
    let counter = 1
    let timer = null
    const callback = (err, res, body) => {
      counter += 1
      if (err && counter <= CONFIG.MAX_TIMES) {
        return
      }
      clearInterval(timer)
    }

    timer = setInterval(() => {
      send_msg(callback)
    }, CONFIG.TIME_GAP)

    send_msg(callback)
  }
}