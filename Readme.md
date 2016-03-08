[![David – status of dependencies
](https://img.shields.io/david/studio-b12/natural-sort.svg?style=flat-square)
](https://david-dm.org/studio-b12/natural-sort)
 [![Code style: airbnb
](https://img.shields.io/badge/code%20style-airbnb-777777.svg?style=flat-square)
](https://github.com/airbnb/javascript)




natural-sort.js
===============

**Sorting with support for numbers, dates, unicode and more.**




<div                                                               >&nbsp;</div>

Default features
----------------

- Numbers are handled properly (“2” is before “10”)
- Dates are detected and sorted as well
- Empty strings are after “z”




<div                                                               >&nbsp;</div>

Usage
-----

```js
['10. tenth', 'odd', 1, '', '2. second'].sort(naturalSort())
// [1, '2. second', '10. tenth', 'odd', '']

[3, 4, 1, 5, 2].sort(naturalSort({direction: 'desc'}))
// [5, 4, 3, 2, 1]

['a', 'B'].sort(naturalSort())
// ['a', 'B']
['a', 'B'].sort(naturalSort({caseSensitive: true}))
// ['B', 'a']
```




<div                                                               >&nbsp;</div>

Installation
------------

1. Download the script. You can use npm or bower:

```
npm install natural-sort
```

```
bower install natural-sort
```

2. Include the script before yours:

```html
<script src="/bower_components/natural-sort/dist/natural-sort.js"></script>
```




<div                                                               >&nbsp;</div>

Credits
-------

The original version of this algorithm was published by Jim Palmer in [this blog post][].

[this blog post]:  http://www.overset.com/2008/09/01/javascript-natural-sort-algorithm/  "Javascript Natural Sort Algorithm With Unicode Support"





<div                                                               >&nbsp;</div>

License
-------

[MIT][] © [Studio B12 GmbH][]

[MIT]:              ./License.md
[Studio B12 GmbH]:  http://studio-b12.de
