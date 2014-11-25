natural-sort.js
===============

**Sorting with support for numbers, dates, unicode and more.**



Default features
----------------

- Numbers are handled properly ("2" is before "10")
- Dates are detected and sorted as well
- Empty strings are after “z”



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



Installation
------------

1. Download the script. You can use bower:

```
bower install natural-sort
```

2. Include the script before yours:

```html
<script src="/bower_components/natural-sort/dist/natural-sort.js"></script>
```



Credits
-------

The original version of this algorithm was published by Jim Palmer in [this blog post][].



License
-------

This software is released under the terms of the [MIT License][].



<!-- Links -->
[this blog post]: http://www.overset.com/2008/09/01/javascript-natural-sort-algorithm/ "Javascript Natural Sort Algorithm With Unicode Support"
[MIT License]: ./License.md
