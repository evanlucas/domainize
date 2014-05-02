var should = require('should')
  , domain = require('../')

describe('domainize', function() {
  it('should create reverse dns string', function() {
    var input = 'pride'
    var d = 'com.evan'
    domain(input, d).should.equal('com.evan.pride')
  })

  it('should have a `from` function', function() {
    var input = 'pride'
    var d = 'com.evan'
    var o = domain(input, d)
    domain.from(o).should.equal(input)
  })

  it('should have a `to` function', function() {
    var input = 'pride'
    var d = 'com.evan'
    domain.to(input, d).should.equal('com.evan.pride')
  })
})
