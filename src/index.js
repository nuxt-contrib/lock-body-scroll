class Locker {
  constructor (options = {}) {
    this.scrollElement = options.scrollElement || document.scrollingElement || document.documentElement
    this.lock = this.lock.bind(this)
    this.unlock = this.unlock.bind(this)
  }

  /**
   * Make body fixed in current position
   * @return {void}
   */
  lock () {
    this.style = {
      top: this.scrollElement.style.top || '',
      width: this.scrollElement.style.width || '',
      position: this.scrollElement.style.position || ''
    }
    this.scrollTop = this.scrollElement.scrollTop
    this.scrollElement.style.cssText += `width:100%;position:fixed;top:-${this.scrollTop}px;`
    return this
  }

  /**
  * Resume body scroll and position
  * @return {void}
  */
  unlock () {
    for (let key in this.style) {
      this.scrollElement.style[key] = this.style[key]
    }
    this.scrollElement.scrollTop = this.scrollTop

    return this
  }
}

export default function createLocker (options) {
  return new Locker(options)
}
