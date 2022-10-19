# cnz (“classnamez”)

> The smallest [classnames](https://github.com/JedWatson/classnames)-compatible package yet (I think).

This is an extremely simple javascript utility for conditionally joining classNames together. It’s based on [`classnames`](https://github.com/JedWatson/classnames) and its various [clones and improvements](https://github.com/lukeed/clsx).

This one is 151 bytes ([146 gzipped](http://bundlephobia.com/result?p=cnz)), which is about [3x smaller than `classnames`](http://bundlephobia.com/result?p=classnames). It’s much slower than `classnames` and `clsx`, but still runs a few million operations / second. I’m okay with that tradeoff.

```js
import cn from 'cnz';

cnz('one', 'two', 'three'); // 'one two three'
cnz('one', 'two', ['three', 'four', false && 'five']); // 'one two three four'
cnz('one', { two: true, three: false }, 'four'); // 'one two four'
```

## Differences

The main differences between `cnz` and `classnames` is that `cnz` only supports strings, arrays, and objects. [Numbers](https://github.com/JedWatson/classnames/issues/239) and booleans are ignored. This is deliberate, as it allows shorthands like `results.count || 'empty'`.

This is a subtle difference, so `cnz` should still work as a drop-in replacement for `classnames` in most cases.

## Installation

```console
npm install --save cnz
```

Or without a build step—import it right in your browser.

```html
<script type="module">
  import cnz from "https://unpkg.com/cnz"
</script>
```

## Benchmarks

```console
npm --prefix benchmarks start
```

## Similar packages

- [`classnames`](https://github.com/JedWatson/classnames): The original and most popular.
- [`clsx`](https://github.com/lukeed/clsx): A smaller and faster `classnames` replacement.
- [`classcat`](https://github.com/jorgebucaran/classcat): Another alternative that this repo borrows from.

## License

[GNU GPLv3](LICENSE.md)
