var should = require('should')
  , domain = require('../')

describe('domainize', function() {
  it('should create reverse dns string', function() {
    var input = 'pride'
    var d = 'com.evan'
    domain(input, d).should.equal('com.evan.pride')
  })

  it('should work with multiple sections', function() {
    var input = 'test'
    var prefix = 'com.evan.curapps'
    domain(input, prefix).should.equal('com.evan.curapps.test')
  })

  it('should strip multiple consecutive periods', function() {
    var input = 'test'
    var prefix = 'com.evan.'
    domain(input, prefix).should.equal('com.evan.test')
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
