const members = require('../constant/members.js').members

exports.lottery = () => {
  let length = members.length
  let lucky_number = Math.floor(Math.random() * length)
  return members[lucky_number]
}