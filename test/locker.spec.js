const createLocker = require('../dist/lock-body-scroll.cjs')

describe('lock body scroll', () => {
  test('should create locker instance on documentElement', () => {
    const locker = createLocker()
    expect(locker.scrollElement).toBe(document.documentElement)
  })

  test('should use scrollingElement with higher priority than documentElement', () => {
    document.scrollingElement = jest.fn()
    const locker = createLocker()
    expect(locker.scrollElement).toBe(document.scrollingElement)
  })

  test('should lock the scrolling element', () => {
    const scrollElement = {
      style: {
        cssText: ''
      },
      scrollTop: 100
    }
    const locker = createLocker({ scrollElement })
    const lockReturnedLocker = locker.lock()

    expect(scrollElement.style.cssText).toBe('width:100%;position:fixed;top:-100px;')
    expect(lockReturnedLocker).toBe(locker)
  })

  test('should keep state before locking the scrolling element', () => {
    const scrollElement = {
      style: {
        top: '10px',
        width: '90%',
        position: 'static',
        cssText: ''
      },
      scrollTop: 100
    }
    const locker = createLocker({ scrollElement }).lock()

    expect(locker.style).toEqual({
      top: '10px',
      width: '90%',
      position: 'static'
    })
    expect(scrollElement.style.cssText).toBe('width:100%;position:fixed;top:-100px;')
  })

  test('should unlock the scrolling element', () => {
    const scrollElement = {
      style: {
        cssText: ''
      },
      scrollTop: 100
    }

    const locker = createLocker({ scrollElement }).lock().unlock()

    expect(locker.style).toBeUndefined()
    expect(locker.scrollTop).toBeUndefined()
    expect(scrollElement.style).toMatchObject({
      top: '',
      width: '',
      position: ''
    })
  })
})
