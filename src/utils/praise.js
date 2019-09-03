const quotations = require('../constant/quotations.js').quotations

exports.praise = () => {
  let length = quotations.length
  let lucky_number = Math.floor(Math.random() * length)
  return quotations[lucky_number]
}