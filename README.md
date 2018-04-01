
# jormat

> Just a generic number/string formatter

[![npm package version](https://img.shields.io/npm/v/jormat.svg?style=flat-square)](https://npmjs.org/package/jormat)
[![npm downloads](https://img.shields.io/npm/dm/jormat.svg?style=flat-square)](https://npmjs.org/package/jormat)
[![Standard](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
[![Prettier code formatting](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Travis ci build status](https://img.shields.io/travis/tiaanduplessis/jormat.svg?style=flat-square)](https://travis-ci.org/tiaanduplessis/jormat)
[![Project license](https://img.shields.io/npm/l/jormat.svg?style=flat-square)](https://github.com/tiaanduplessis/jormat/blob/master/LICENSE)
[![Make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/jormat.svg)](https://greenkeeper.io/)

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#about">About</a></li>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## About

A generic string and number formatter based on [normat](https://github.com/rferro/normat).

## Install

```sh
$ npm install jormat
# OR
$ yarn add jormat
```

## Usage

```js
const jormat = require('jormat')
const {minutes} = require('jormat-formatters')

const { format, parse } = jormat(minutes)
console.log(format(10080)) // 7 days
console.log(parse('10 days')) // 14400

```

## Contributing

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [a issue](https://github.com/tiaanduplessis/jormat/issues).

## License

Licensed under the MIT License.
