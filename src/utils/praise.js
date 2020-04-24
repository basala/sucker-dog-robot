const quotations = require('../constant/quotations.js').quotations

exports.praise = (gender) => {
  let genderQuotations = quotations[gender];
  let length = genderQuotations.length
  let lucky_number = Math.floor(Math.random() * length)
  return genderQuotations[lucky_number]
}