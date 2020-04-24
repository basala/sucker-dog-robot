const lottery = require('../utils/lottery.js').lottery
const praise = require('../utils/praise.js').praise
const request = require('request')

const CONFIG = require('./config.js').config

const get_body = () => {
  let lucky_guy = lottery()
  let praise_text = get_text(lucky_guy)

  return {
    'msgtype': 'text',
    'text': {
      'content': praise_text,
      'mentioned_list': [lucky_guy.name]
    }
  }
}

const get_text = (lucky_guy) => {
  let desc = praise(lucky_guy.gender)
  let content = `${desc.text}\n${lucky_guy.nick_name}`
  if (lucky_guy.gender === 'female') {
    return `${content}, 你今天真美！大家快一起来夸夸她吧(｡･ω･｡)ﾉ♡`
  }
  return `${content}, 你今天真帅！大家快一起来夸夸他吧(｡･ω･｡)ﾉ♡`
}

const send_msg = (callback) => {
  let body = get_body()

  request({
    json: true,
    method: 'POST',
    url: CONFIG.URL,
    body: body
  }, (err, res, body) => {
    typeof callback === 'function' && callback(err, res, body)
  })
}

exports.sucker = {
  on: () => {
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
  }
}