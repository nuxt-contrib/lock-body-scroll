# Lock body scroll

> 🌈 Lock/unlock body scrolling when modal is opened

[![Standard JS][standard-js-src]][standard-js-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

## Installation

```bash
$ yarn add lock-body-scroll

or

$ npm i lock-body-scroll
```

## Usage

### ES modules

```js
import createLocker from 'lock-body-scroll'

const locker = createLocker()

// or

const locker = createLocker(options)

locker.lock()

locker.unlock()
```

### CommonJS

```js
const createLocker = require('lock-body-scroll')

const locker = createLocker()

locker.lock()

locker.unlock()
```

### Browser

HTML:

```html
<head>
  <script src="https://cdn.jsdelivr.net/npm/lock-body-scroll" />
</head>
```

JavaScript:

```js
const locker = window.createLocker()

locker.lock()

locker.unlock()
```

## Options

### scrollElement

Default: `document.scrollingElement || document.documentElement`

The dom element which is for locking scrolling

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT][license--href]

[standard-js-src]: https://flat.badgen.net/badge/code%20style/standard/green
[standard-js-href]: https://standardjs.com
[circle-ci-src]: https://flat.badgen.net/circleci/github/clarkdo/lock-body-scroll
[circle-ci-href]: https://circleci.com/gh/clarkdo/lock-body-scroll
[codecov-src]: https://flat.badgen.net/codecov/c/github/clarkdo/lock-body-scroll
[codecov-href]: https://codecov.io/gh/clarkdo/lock-body-scroll
[npm-version-src]: https://flat.badgen.net/npm/v/lock-body-scroll/latest
[npm-version-href]: https://npmjs.com/package/lock-body-scroll
[npm-downloads-src]: https://flat.badgen.net/npm/dt/lock-body-scroll
[npm-downloads-href]: https://npmjs.com/package/lock-body-scroll
[license--href]: https://github.com/clarkdo/lock-body-scroll/blob/master/LICENSE
