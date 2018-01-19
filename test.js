import test from 'ava';
import naturalSort from './index';


test('version strings', t => {
  var sorted =
    ["3.27.3",
      "3.27.1",
      "3.1.1",
      "other",
      "3.28.1",
      "3.29.1"].sort(naturalSort());

  t.deepEqual(
    sorted,
    ["3.1.1",
      "3.27.1",
      "3.27.3",
      "3.28.1",
      "3.29.1",
      "other"]
  );
});
