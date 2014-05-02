var util = require('util')

module.exports = dom

function dom(name, domain) {
  var out = util.format('%s.%s', domain, name)
  if (~out.indexOf('..')) out = out.replace(/\.\./g, '.')
  return out
}

dom.from = function(name) {
  var comps = name.split('.')
  return comps[comps.length-1]
}

dom.to = dom
