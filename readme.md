# Lock body scroll

Lock/unlock body scrolling when modal is opened.

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
  <script src="lock-body-scroll.min.js" />
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

[license--href]: https://github.com/clarkdo/lock-body-scroll/blob/master/LICENSE
