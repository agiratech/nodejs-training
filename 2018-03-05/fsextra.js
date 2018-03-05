const fs = require('fs-extra')
fs.move('check.txt', 'sample.txt', err => {
  if (err) return console.error(err)
  console.log('success!')
})

fs.emptyDir('/home/rajeshkumarj/Node_js/check', err => {
  if (err) return console.error(err)

  console.log('success!')
})


fs.ensureDir('/home/rajeshkumarj/Node_js/check/good', err => {
  console.log(err) // => null
  console.log("success")
})