# domainize

## Installation

```bash
$ npm install domainize
```

## Usage

```js
var domainize = require('domainize')
```

## Tests

```bash
$ npm test
```

## Coverage

```bash
$ npm run cover
```

## API

### domainize(name, domain)

Create a reverse dns string from the given _name_

Example

```js
var test1 = domainize('test', 'com.evan')
// 'com.evan.test'
```

### domainize.to(name, domain)

See above

### domainize.from(str)

Simply pops off the last component of the given _str_

Example

```js
var test1 = domainize('test', 'com.evan')
var orig = domainize.from(test1)
// => 'test'
```

#### License

MIT
