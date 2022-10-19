import Benchmark from 'benchmark';

import classnames from 'classnames';
import clsx from 'clsx';
import cnz from '../index.js';

const randomString = () => String.fromCodePoint(...Array.from({length: Math.floor(Math.random() * 12)}, () => (Math.random() < 0.5 ? 65 : 97) + Math.floor(Math.random() * 26)));
const strings = Array.from({length: 6}, randomString);
const arrays = [strings, strings.flatMap((s, i) => [s, !!i, false])];
const objects = [{
  a: true,
  b: false,
  c: 14,
  d: 'string',
  e: null,
  f: undefined,
  g: {},
  h: [],
  i: NaN,
}];
const combo1 = [...strings, ...arrays];
const combo2 = [...strings, ...objects];
const combo3 = [...arrays, ...objects];
const combo4 = [...strings, ...arrays, ...objects];

const modules = {
  classnames,
  clsx,
  cnz,
};
const tests = {
  Strings: strings,
  Arrays: arrays,
  Objects: objects,
  Combo1: combo1,
  Combo2: combo2,
  Combo3: combo3,
  Combo4: combo4,
};
const maxModuleNameLength = Math.max(...Object.keys(modules).map(name => name.length));

console.log('\n');
Object.entries(tests).forEach(([testName, testData]) => {
  const suite = new Benchmark.Suite();
  console.log(`Running benchmark: ${testName}`);
  Object.entries(modules).forEach(([moduleName, moduleFn]) => {
    suite.add(moduleName, () => moduleFn(...testData));
  });
  suite.on("cycle", ({ target: { name, hz } }) =>
    console.log(`${name.padEnd(maxModuleNameLength, ' ')}\t${Math.floor(hz).toLocaleString()} ops/sec`));
  suite.on("complete", ({currentTarget}) =>
    console.log(currentTarget.sort((a, b) => b.hz - a.hz).map(({name}) => name).join(' > '), '\n'));
  suite.run();
});
