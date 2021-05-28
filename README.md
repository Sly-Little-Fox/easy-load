Hello! This package provides ability to easily create progress bars. Try it yourself and, if you like it, go deeper!

## Examples
```js
const EasyLoad = require('easy-load');
const bar = new EasyLoad().simple;

var interval = setInterval(() => {
  bar.increase();
  if (bar.oldcount == bar.limit) {
    bar.finish();
    process.exit(0);
  }
}, 100);
```

```js
const EasyLoad = require('easy-load');
const bar = new EasyLoad().simple;

var interval = setInterval(() => {
  bar.set(Math.random() * 100);
}, 1000);
```
```js
const EasyLoad = require('easy-load');
const bar = new EasyLoad().verbose;

var interval = setInterval(() => {
  bar.increase();
  if (bar.oldcount == bar.limit) {
    bar.finish();
    process.exit(0);
  }
}, 100);
```

```js
const EasyLoad = require('easy-load');
const bar = new EasyLoad().mini;

var interval = setInterval(() => {
  bar.increase();
  if (bar.oldcount == bar.limit) {
    bar.finish();
    process.exit(0);
  }
}, 100);
```

# Appearance

## Verbose

```
[==============================>----------------------------------------------------------------------]  30% 30/100 1.00 %/s  70 seconds remaining
```

## Simple

```
[==============================>----------------------------------------------------------------------]  30% 30/100
```

## Mini

```
[==============================>----------------------------------------------------------------------]  30%
```

# Documentation

## Bars

### Simple

Simple bar, displays `count/limit` and number of percents.

### Mini

Mini bar, displays number of percents.

### Verbose

Verbose bar, displays `count/limit`, number of percents, average speed, ETA.

## Methods

### bar.set()

`bar.set()` sets bar to some value, which cannot be bigger than limit.

### bar.finish()

Finishes your bar, setting it to the limit and ignoring next calls.

### bar.stop()

The same as `bar.finish()`, but doesn't set it to the limit.

### bar.increase()

Increases your bar, doesn't do anything if limit exceeded.

## Values

### bar.limit

**number**

Read/write value, used to set the limit.

### bar.oldcount

**number**

Value with cached count, which is used only in other functions. Not recommended to write, because it **will** break other functions.

### bar.finished

**boolean**

This value contains information if the bar has already finished or not. Read/Write value.


# Changelog

See CHANGELOG.md.