let members = require('../config/constant.js').members

exports.lottery = function () {
  let length = members.length
  let lucky_number = Math.floor(Math.random() * length)
  return members[lucky_number]
}