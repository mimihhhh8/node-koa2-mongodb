const jwt = require('jsonwebtoken')
module.exports = function (username) {
  const token = jwt.sign({ username: username }, 'registertoken', { expiresIn: '10800s' })
  return token
}
