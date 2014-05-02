module.exports = process.env.DOMAINIZE_COV
  ? require('./lib-cov')
  : require('./lib')
