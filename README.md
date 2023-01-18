<div style="text-align: center;" align="center">

# pm-info

A simple utility to get the package manager information which used in the project

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![Test coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

<div style="text-align: center; margin-bottom: 20px;" align="center">

## **Full API docs： [API Docs](./docs/modules.md)**

</div>

## Install

```bash
# use pnpm
$ pnpm install -D pm-info

# use yarn
$ yarn add -D pm-info

# use npm
$ npm install -D pm-info
```

## Usage

1. use `pm-info` in async mode
   s

```js
import { pmInfo } from 'pm-info'

pmInfo().then(info => {
  console.log('The package manager is: ', info) // { name: 'pnpm', version: '7.25.0' } | null
})
```

2. use `pm-info` in sync mode

```js
import { pmInfoSync } from 'pm-info'

console.log('The package manager is: ', pmInfoSync()) // { name: 'pnpm', version: '7.25.0' } | null
```

## Issues & Support

Please open an issue [here](https://github.com/saqqdy/node-kit/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/pm-info.svg?style=flat-square
[npm-url]: https://npmjs.org/package/pm-info
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/pm-info/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/pm-info&utm_campaign=Badge_Grade
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/pm-info.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/pm-info?branch=master
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_node-kit
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_node-kit
