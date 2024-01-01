<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Logarithm of Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Rayleigh][rayleigh-distribution] distribution logarithm of [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [Rayleigh][rayleigh-distribution] random variable is

<!-- <equation class="equation" label="eq:rayleigh_cdf" align="center" raw="F(x;\sigma) = \begin{cases} 0 & \text{ for } x < 0 \\ 1 - e^{-x^2/2\sigma^2} & \text{ for } x \ge 0 \end{cases}" alt="Cumulative distribution function for a Rayleigh distribution."> -->

```math
F(x;\sigma) = \begin{cases} 0 & \text{ for } x < 0 \\ 1 - e^{-x^2/2\sigma^2} & \text{ for } x \ge 0 \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="F(x;\sigma) = \begin{cases} 0 &amp; \text{ for } x &lt; 0 \\ 1 - e^{-x^2/2\sigma^2} &amp; \text{ for } x \ge 0 \end{cases}" data-equation="eq:rayleigh_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/rayleigh/logcdf/docs/img/equation_rayleigh_cdf.svg" alt="Cumulative distribution function for a Rayleigh distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `sigma > 0` is the scale parameter.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import logcdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-rayleigh-logcdf@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-rayleigh-logcdf@deno/mod.js';
```

#### logcdf( x, sigma )

Evaluates the logarithm of the [cumulative distribution function][cdf] for a [Rayleigh][rayleigh-distribution] distribution with scale parameter `sigma`.

```javascript
var y = logcdf( 2.0, 3.0 );
// returns ~-1.613

y = logcdf( 1.0, 2.0 );
// returns ~-2.141

y = logcdf( -1.0, 4.0 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logcdf( NaN, 1.0 );
// returns NaN

y = logcdf( 0.0, NaN );
// returns NaN
```

If provided `sigma < 0`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, -1.0 );
// returns NaN
```

If provided `sigma = 0`, the function evaluates the logarithm of the [CDF][cdf] for a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = logcdf( -2.0, 0.0 );
// returns -Infinity

y = logcdf( 0.0, 0.0 );
// returns 0.0

y = logcdf( 2.0, 0.0 );
// returns 0.0
```

#### logcdf.factory( sigma )

Returns a function for evaluating the logarithm of the [cumulative distribution function][cdf] of a [Rayleigh][rayleigh-distribution] distribution with parameter `sigma` (scale parameter).

```javascript
var mylogCDF = logcdf.factory( 0.5 );
y = mylogCDF( 1.0 );
// returns ~-0.145

y = mylogCDF( 0.5 );
// returns ~-0.933
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In virtually all cases, using the `logpdf` or `logcdf` functions is preferable to manually computing the logarithm of the `pdf` or `cdf`, respectively, since the latter is prone to overflow and underflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import logcdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-rayleigh-logcdf@deno/mod.js';

var sigma;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 10.0;
    sigma = randu() * 10.0;
    y = logcdf( x, sigma );
    console.log( 'x: %d, σ: %d, log(F(x;σ)): %d', x.toFixed( 4 ), sigma.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-rayleigh-logcdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-rayleigh-logcdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-rayleigh-logcdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-rayleigh-logcdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-rayleigh-logcdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-rayleigh-logcdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-rayleigh-logcdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-rayleigh-logcdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-rayleigh-logcdf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-rayleigh-logcdf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-rayleigh-logcdf/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-rayleigh-logcdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-rayleigh-logcdf/main/LICENSE

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[rayleigh-distribution]: https://en.wikipedia.org/wiki/Rayleigh_distribution

</section>

<!-- /.links -->
