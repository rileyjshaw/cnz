import cn from '../index.js';
import { t, equal } from 'twist';

export default [
  t('cnz', [
    t('nothing, null, undefined, number, boolean', [
      equal(cn(), ''),
      equal(cn(null), ''),
      equal(cn(undefined), ''),
      equal(cn([, , null, undefined, 0, 14, true, false, NaN], {'one': NaN}), ''),
    ]),
    t('empty objects', [
      equal(cn({}), ''),
      equal(cn([]), ''),
      equal(cn([], [], [], {}, [], {}, {}), ''),
    ]),
    t('empty strings', [
      equal(cn('', '', '', '', ''), ''),
      equal(
        cn({
          one: '',
          two: '',
          three: '',
        }),
        ''
      ),
    ]),
    t('simple strings', [
      equal(cn('one', 'two', 'three'), 'one two three'),
    ]),
    t('arrays of strings', [
      equal(cn(['one', 'two', false, 'three']), 'one two three'),
    ]),
    t('object of key:string pairs', [
      equal(
        cn({
          zero: 0,
          one: true,
          two: true,
          three: false,
          four: 4,
        }),
        'one two four'
      ),
    ]),
  ]),
];
