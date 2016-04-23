[![David – status of dependencies
](https://img.shields.io/david/studio-b12/natural-sort.svg?style=flat-square)
](https://david-dm.org/studio-b12/natural-sort)
 [![Code style: airbnb
](https://img.shields.io/badge/code%20style-airbnb-777777.svg?style=flat-square)
](https://github.com/airbnb/javascript)




# natural-sort

**Sorting with support for numbers, dates, unicode and more.**

<a id="/screenshot"></a>&nbsp;

<p align="center"><img
  alt="How Nautilus handles sorting"
  src="https://cdn.rawgit.com/studio-b12/natural-sort/7c54aac/nautilus-screenshot.png"
  title="That’s how Nautilus handles sorting"
  width="588"
/></p>

<a id="/features"></a>&nbsp;

You know this from your file manager:

- Numbers are handled properly – “2” is before “10”
- Strings are after numbers
- Empty strings are after “z”
- “a” is before “B” (opt out via `caseSensitive: true`)
- Semver-compatible sorting of version numbers




<a id="/usage"></a>&nbsp;

## Usage

```js
⏴ ['10. tenth', 'odd', 1, '', '2. second'].sort(naturalSort())
⏵ [1, '2. second', '10. tenth', 'odd', '']


⏴ ['a', 'B'].sort(naturalSort())
⏵ ['a', 'B']
⏴ ['a', 'B'].sort(naturalSort({ caseSensitive: true }))
⏵ ['B', 'a']


⏴ ['a10', 'a', 'a2'].sort(naturalSort())
⏵ ['a', 'a2', 'a10']


⏴ ['0.16.0', 'a', 'a2'].sort(naturalSort())
⏵ ['a', 'a2', 'a10']


⏴ ['1.16.0', '1.2.0', '1.16.0-beta'].sort(naturalSort())
⏵ [ '1.16.0-beta', '1.16.0', '1.2.0' ]
```




<a id="/credits"></a>&nbsp;

## Credits

Based on *[The Aplhanum Algorithm](http://www.davekoelle.com/alphanum.html)* by Dave Koelle.

Original version published in *[Javascript Natural Sort Algorithm With Unicode Support](http://www.overset.com/2008/09/01/javascript-natural-sort-algorithm/)* by Jim Palmer.





<a id="/license"></a>&nbsp;

## License

[MIT](./License.md) © [Studio B12](http://studio-b12.de)
