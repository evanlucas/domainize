#!/usr/bin/env node

var args = process.argv.splice(2)
  , domain = require('../')
  , fs = require('fs')

if (args.length < 2) {
  usage(1)
  return
}

console.log(domain.apply(null, args))

function usage(code) {
  var rs = fs.createReadStream(__dirname + '/usage.txt')
  rs.pipe(process.stdout)
  rs.on('close', function() {
    if (code) process.exit(code)
  })
}
