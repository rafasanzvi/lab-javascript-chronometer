class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null

  }


  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (callback) {
        callback()
      }
    }, 1000)
  }

  getMinutes() {
    const minutes = this.currentTime / 60
    return Math.floor(minutes)
  }



  getSeconds() {
    const seconds = this.currentTime % 60
    return seconds
  }

  computeTwoDigitNumber(value) {
    if (value > 9) {
      return value.toString()
    } else {
      return "0" + value
    }
  }


  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
