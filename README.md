# esc-fmt-same-string-edges
Format 2 strings, human readable, easy compare, highlight beginning/middle/end (if applicable) same/different parts, algorithm/function, visualize/highlight, match unchanged context. Fast and minimal, zero dependencies, supply your own formatting functions, cli, terminal, html, React, xml.

## Installation
1. `npm install --save esc-fmt-same-string-edges`

## Example usage
```javascript
import format from 'esc-fmt-same-string-edges';
import colors from 'esc-colors';

const old = 'Hello World';
const new = 'H3110 W0r1d';
const [ fmtdOld, fmtdNew ] = format(old, new, colors.green, colors.red);
console.log('fmtdOld', fmtdOld);
console.log('fmtdNew', fmtdNew);
```

## Demo CLI
```javascript
import format from 'esc-fmt-same-string-edges';
import colors from 'esc-colors';

const demo2 = (a, b) => console.log(`${format(a, b, colors.green, colors.red                ).join('\n')}\n`);
const demo3 = (a, b) => console.log(`${format(a, b, colors.green, colors.red, colors.magenta).join('\n')}\n`);

demo2('/foo/bar/baz/qux.txt', '/foo/bar/daz/qux.txt');
demo3('/foo/bar/baz/qux.txt', '/foo/bar/daz/qux.txt');
demo3('/foo/bar/baz/baz/qux.txt', '/foo/bar/baz/qux.txt');
demo3('/foo/bar/baz/qux.txt', '/foo/bar/baz/baz/qux.txt');
demo3('/foo/bar/baz/qux.txt', '/xyz/bar/baz/qux.txt');
demo3('/foo/bar.txt', '#foo/bar.txt');
demo3('/foo/bar/baz/qux.txt', '/zoo/bar/baz/qux.txt');
demo3('/foo/bar/baz/qux.txt', '/zoo/bar/baz/qux.xml');
demo2('Hello World', 'H3110 W0r1d');
demo3('Hello World', 'H3110 W0r1d');
```
![image](https://github.com/user-attachments/assets/63b1e62a-4575-4252-b4a5-019f90d1684d)

## Demo HTML
```javascript
import format from 'esc-fmt-same-string-edges';

// html example - make your own HTML, XML, React, etc
const fmtHtmlSameF = s => `<span class='same'>${s}</span>`;
const fmtHtmlDiffF = s => `<span class='diff'>${s}</span>`;
const demoH = (a, b) => console.log(`${format(a, b, fmtHtmlSameF, fmtHtmlDiffF).join('\n')}\n`);

console.log('/foo/bar/baz.txt\n/foo/xyz/baz.zip\nFormat as HTML');

demoH('/foo/bar/baz.txt', '/foo/xyz/baz.zip');
```
![image](https://github.com/user-attachments/assets/54a88921-d06c-4962-a9ea-fcf48a3df748)

## Format HTML - CLI example (you could also format HTML with HTML or whatever)
```javascript
// format the HTML
import colors from 'esc-colors';

console.log('HTML difference hard to see?');
const [ fmtdOldHtml, fmtdNewHtml ] = format('/foo/bar/baz.txt', '/foo/xyz/baz.zip', fmtHtmlSameF, fmtHtmlDiffF);
const demo2 = (a, b) => console.log(`${format(a, b, colors.green, colors.red).join('\n')}\n`);
demo2(fmtdOldHtml, fmtdNewHtml);
```
![image](https://github.com/user-attachments/assets/3ac37204-1967-46e9-8733-6f83d9ce97fd)

## What it does
If your strings are the same length then every character can be formatted according to your same/different formatting function. (with as little formatting as possible)

If your strings are _different lengths_ then the _parts_ of the **start** and **end** (respectively) that are the same will be formatted as such and the **middle** that is different will be formatted as such. (the _different part_ can also be at the _beginning_ or _end_ of the strings)

### Say thanks
Star the repo
https://github.com/softwarecreations/esc-fmt-same-string-edges

### PR's or issues
Welcome

### License
MIT
