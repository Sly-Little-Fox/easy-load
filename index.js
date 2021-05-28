var simple = {
  oldcount: 0,
  limit: 100,
  finished: false,
  speed: 0,
  increase: function () {
    let count = ++this.oldcount;
    if (count > this.limit || this.finished) return;
    process.stderr.write(`\r[${('=').repeat(Math.round(count * 100 / this.limit))}>${('-').repeat(Math.round(this.limit - (count * 100 / this.limit)))}]  ${Math.round(count * 100 / this.limit)}% ${count}/${this.limit}`);
  },
  /**
   * 
   * @param {number} toset Number to set. Will throw error if it is bigger than limit. 
   * @returns {void}
   */
  set: function (toset) {
    if (toset > this.limit) throw new Error('Value to set cannot be bigger than limit');
    if (this.finished) return;
    process.stderr.write(`\r[${('=').repeat(Math.round(toset * 100 / this.limit))}>${('-').repeat(Math.round(this.limit - (toset * 100 / this.limit)))}]  ${Math.round(toset * 100 / this.limit)}% ${toset}/${this.limit}`);
  },
  stop: function () {
    this.finished = true;
  },
  finish: function () {
    this.set(this.limit);
    this.stop();
  }
}

var mini = {
  oldcount: 0,
  limit: 100,
  finished: false,
  speed: 0,
  increase: function () {
    let count = ++this.oldcount;
    if (count > this.limit || this.finished) return;
    process.stderr.write(`\r[${('=').repeat(Math.round(count * 100 / this.limit))}>${('-').repeat(Math.round(this.limit - (count * 100 / this.limit)))}]  ${Math.round(count * 100 / this.limit)}%`);
  },
  /**
   * 
   * @param {number} toset Number to set. Will throw error if it is bigger than limit. 
   * @returns {void}
   */
  set: function (toset) {
    if (toset > this.limit) throw new Error('Value to set cannot be bigger than limit');
    if (this.finished) return;
    process.stderr.write(`\r[${('=').repeat(Math.round(toset * 100 / this.limit))}>${('-').repeat(Math.round(this.limit - (toset * 100 / this.limit)))}]  ${Math.round(toset * 100 / this.limit)}%`);
  },
  stop: function () {
    this.finished = true;
  },
  finish: function () {
    this.set(this.limit);
    this.stop();
  }
}

var verbose = {
  start: Date.now(),
  oldcount: 0,
  limit: 100,
  finished: false,
  increase: function () {
    let count = ++this.oldcount;
    if (count > this.limit || this.finished) return;
    process.stderr.write(`\r[${
      ('=').repeat(Math.round(count * 100 / this.limit))
    }>${
      ('-').repeat(Math.round(this.limit - (count * 100 / this.limit)))
    }]  ${
      Math.round(count * 100 / this.limit)
    }% ${
        count
      }/${
        this.limit
      } ${
      (((Date.now() - this.start) / 1000 ) / (count * 100 / this.limit)).toFixed(2)
    } %/s  ${
      ((100 - (count * 100 / this.limit)) / (((Date.now() - this.start) / 1000 ) / (count * 100 / this.limit))).toFixed(0)
    } seconds remaining`);
  },
  /**
   * @param {number} toset Number to set. Will throw error if it is bigger than limit. 
   * 
   * @returns {void}
   */
  set: function (toset) {
    if (toset > this.limit) throw new Error('Value to set cannot be bigger than limit');
    if (this.finished) return;
    process.stderr.write(`\r[${
      ('=').repeat(Math.round(toset * 100 / this.limit))
    }>${
      ('-').repeat(Math.round(this.limit - (toset * 100 / this.limit)))
    }]  ${
      Math.round(toset * 100 / this.limit)
    }%  ${
      toset
    }/${
      this.limit
    } ${
      (((Date.now() - this.start) / 1000 ) / (toset * 100 / this.limit)).toFixed(2)
    } %/s  ${
      ((100 - (toset * 100 / this.limit)) / (((Date.now() - this.start) / 1000) / (toset * 100 / this.limit))).toFixed(2)
    } seconds remaining`);
  },
  stop: function () {
    this.finished = true;
  },
  finish: function () {
    this.set(this.limit);
    this.stop();
  }
}

module.exports = class {
  get simple() {
    return simple;
  }
  get mini() {
    return mini;
  }
  get verbose() {
    return verbose;
  }
  /**
   * @deprecated Deprecated is favor of "simple". Kept only for compatibility.
   */
  get foo() {
    return simple;
  }
}