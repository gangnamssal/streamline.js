# Streamline.js

streamlinejs는 TypeScript를 사용한 함수형 프로그래밍 라이브러리로, 타입 추론이 가능한 함수형 프로그래밍을 지향합니다.
이 라이브러리는 함수형 프로그래밍의 핵심 원칙을 구현하고, 코드의 가독성과 유지보수성을 향상시키기 위해 설계되었습니다.

## Index

[1.Install](#install)

[2.Main Function](#main-function)

[3.Curry](#usage---curry)

- [atC](#atc)
- [chunkC](#chunkc)
- [concatC](#concatc)
- [dropC](#dropc)
- [filterC](#filterc)
- [findC](#findc)
- [joinC](#joinc)
- [mapC](#mapc)
- [reduceC](#reducec)
- [takeC](#takec)
- [zipC](#zipc)

[4.Lazy](#usage---lazy)

- [atL](#atl)
- [chunkL](#chunkl)
- [dropL](#dropl)
- [filterL](#filterl)
- [flatL](#flatl)
- [mapL](#mapl)
- [rangeL](#rangel)
- [reduceL](#reducel)
- [takeL](#takel)
- [zipL](#zipl)

[5.Strict](#usage---strict)

- [at](#at)
- [chunk](#chunk)
- [concat](#concat)
- [curry](#curry)
- [drop](#drop)
- [filter](#filter)
- [find](#find)
- [flat](#flat)
- [go](#go)
- [join](#join)
- [map](#map)
- [pipe](#pipe)
- [range](#range)
- [reduce](#reduce)
- [take](#take)
- [takeAll](#takeall)
- [zip](#zip)

[6.License](#license)

## Install

npm

```markdown
npm install streamlinejs
```

yarn

```markdown
yarn add streamlinejs
```

pnpm

```markdown
pnpm install streamlinejs
```

## Main Function

- 고차 함수: 함수들을 조합하여 복잡한 로직을 단순하게 구현할 수 있습니다.
- 커링(Currying): 다중 인수를 가진 함수를 단일 인수를 가진 함수의 체인으로 변환합니다.
- 지연 평가(Lazy Evaluation): 계산을 나중으로 미루어 필요할 때까지 수행하지 않습니다.
- 엄격 평가(Strict Evaluation): 즉시 계산을 수행하여 결과를 반환합니다.

## Usage - Curry

### atC

- 주어진 배열에서 주어진 인덱스에 있는 요소를 반환하는 커링함수입니다.

```tsx
import * as C from 'streamlinejs/curry';

const iter = [1, 2, 3, 4, 5];
const index = 2;
const result = C.atC(index)(iter);
const result2 = C.atC(index, iter);

console.log(result); // 3
console.log(result2); // 3
```

```tsx
// atC with go

import * as _ from 'streamlinejs/strict';
import * as C from 'streamlinejs/curry';

const arr = [1, 2, 3, 4, 5];
const res = _.go<number>(arr, atC(-1));

console.log(res); // 5
```

### chunkC

- 주어진 크기로 배열을 나누어 청크를 반환하는 커링함수입니다.

```tsx
import * as C from 'streamlinejs/curry';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const res = C.chunkC(2)([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const res2 = C.chunkC(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log(res); // [[1, 2], [3, 4], [5, 6], [7, 8], [9]]
```

```tsx
// chunkC with go

import * as C from 'streamlinejs/curry';
import * as _ from 'streamlinejs/strict';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const res = _.go(arr, C.chunkC(2));

console.log(res); // [[1, 2], [3, 4], [5, 6], [7, 8], [9]]
```

### concatC

- 두 이터러블을 받은 뒤 결합하는 커링함수입니다.

```tsx
import * as C from 'streamlinejs/curry';

const iter1 = [1, 2, 3];
const iter2 = [4, 5, 6];

const result = C.concatC(iter1)(iter2);

console.log(result); // [1, 2, 3, 4, 5, 6]
```

```tsx
import * as C from 'streamlinejs/curry';

const iter1 = [1, 2, 3];
const iter2 = [4, 5, 6];

const result = C.concatC(iter1, iter2);

console.log(result); // [1, 2, 3, 4, 5, 6]
```

```tsx
import * as C from 'streamlinejs/curry';
import * as _ from 'streamlinejs/strict';

const result = _.go(iter2, C.concatC(iter1));

console.log(result); // [1, 2, 3, 4, 5, 6]
```

### dropC

- 처음 n개의 요소를 건너뛰고 나머지 요소를 반환하는 커링함수입니다.

```tsx
import * as C from 'streamlinejs/curry';

const res = C.dropC(3)([1, 2, 3, 4, 5]);
const res2 = C.dropC(3, [1, 2, 3, 4, 5]);

console.log(res); // [4, 5]
console.log(res2); // [4, 5]
```

```tsx
import * as C from 'streamlinejs/curry';

const res = C.dropC(10)([1, 2, 3, 4, 5]);
const res2 = C.dropC(10, [1, 2, 3, 4, 5]);

console.log(res); // []
console.log(res2); // []
```

```tsx
import * as C from 'streamlinejs/curry';

const res = C.dropC(-1)([1, 2, 3, 4, 5]);
const res2 = C.dropC(-1, [1, 2, 3, 4, 5]);

console.log(res); // [1, 2, 3, 4, 5]
console.log(res2); // [1, 2, 3, 4, 5]
```

```tsx
// dropC with go

import * as C from 'streamlinejs/curry';
import * as _ from 'streamlinejs/strict';

const arr = [1, 2, 3, 4, 5];

const res = _.go<number[]>(arr, C.dropC(3));

console.log(res); // [4, 5]
```

### filterC

- 주어진 조건을 만족하는 요소만을 반환하는 커링함수입니다.

```tsx
import * as C from 'streamlinejs/curry';

const arr = [1, 2, 3, 4, 5];
const res = C.filterC((x: number) => x % 2 === 0, arr);

console.log(res); // [2, 4]
```

```tsx
// filterC with go
import * as C from 'streamlinejs/curry';
import * as _ from 'streamlinejs/strict';

const arr = [1, 2, 3, 4, 5];

_.go<number[]>(
  arr,
  C.filterC((x: number) => x % 2 === 0),
  console.log, // [2, 4]
);
```

### findC

- 주어진 조건을 만족하는 첫번째 요소를 반환하는 커링함수입니다.

```tsx
import * as C from 'streamlinejs/curry';

const arr = [1, 2, 3, 4, 5];
const isEven = (x: number) => x % 2 === 0;

const result = C.findC(isEven, arr);
const result2 = C.findC(isEven)(arr);

console.log(result); // 2
console.log(result2); // 2
```

```tsx
// findC with go
import * as C from 'streamlinejs/curry';
import * as _ from 'streamlinejs/strict';

const arr = [1, 2, 3, 4, 5];
const isEven = (x: number) => x % 2 === 0;

const result = _.go<number>(arr, C.findC(isEven));

console.log(result); // 2
```

### joinC

- 배열의 모든 요소를 문자열로 변환하고, 주어진 구분자를 사용하여 결합하는 커링함수입니다.

```tsx
import * as C from 'streamlinejs/curry';

const result = joinC('-', [1, 2, 3]);

console.log(result); // '1-2-3'
```

```tsx
// joinC with go
import * as C from 'streamlinejs/curry';
import * as _ from 'streamlinejs/strict';

const obj = { a: 1, b: 2, c: 3 };

const res = _.go<string>(
  Object.entries(obj),
  C.mapC(([k, v]: [string, number]) => `${k}=${v}`),
  C.joinC('&'),
);

console.log(res); // 'a=1&b=2&c=3'
```

### mapC

- 각 요소에 주어진 함수를 적용하여 새로운 배열을 반환하는 커링함수입니다.

```tsx
import * as C from 'streamlinejs/curry';

const arr = [1, 2, 3, 4, 5];
const res = C.mapC((x: number) => x * 2, arr);
console.log(res); // [2, 4, 6, 8, 10]
```

```tsx
// mapC with go
import * as C from 'streamlinejs/curry';
import * as _ from 'streamlinejs/strict';

const arr = [1, 2, 3, 4, 5];

_.go<number[]>(
  arr,
  C.mapC((a: number) => a * 2),
  console.log, // [2, 4, 6, 8, 10]
);
```

### reduceC

- 배열의 각 요소에 대해 주어진 함수를 적용하여 단일 누적 값을 반환하는 커링함수입니다.

```tsx
import * as C from 'streamlinejs/curry';

const arr = [1, 2, 3, 4, 5];
const res = C.reduceC((acc: number, x: number) => acc + x, 0, arr);

console.log(res); // 15
```

```tsx
// reduceC with go
import * as C from 'streamlinejs/curry';
import * as _ from 'streamlinejs/strict';

const arr = [1, 2, 3, 4, 5];

_.go<number>(
  arr,
  C.reduceC((a: number, b: number) => a + b),
  console.log, // 15
);
```

### takeC

- 배열의 앞에서부터 지정된 개수만큼 요소를 반환하는 커링함수입니다.

```tsx
import * as C from 'streamlinejs/curry';

const arr = [1, 2, 3, 4, 5];
const res = C.takeC(3, arr);

console.log(res); // [1, 2, 3]
```

```tsx
// takeC with go
import * as C from 'streamlinejs/curry';
import * as _ from 'streamlinejs/strict';

const arr = [1, 2, 3, 4, 5];

_.go<number[]>(arr, C.takeC(3), console.log); // [1, 2, 3]
```

### zipC

- 동일한 위치에 있는 요소들을 묶어서 튜플로 반환하는 커링함수입니다.

```tsx
import * as C from 'streamlinejs/curry';

const iter1 = [1, 2, 3];
const iter2 = ['a', 'b', 'c'];

const result = C.zipC(iter1)(iter2);

console.log(result); // [[1, 'a'], [2, 'b'], [3, 'c']]
```

```tsx
// zipC with go
import * as C from 'streamlinejs/curry';
import * as _ from 'streamlinejs/strict';

const iter1 = [1, 2, 3];
const iter2 = ['a', 'b', 'c'];

const result = _.go(iter2, C.zipC(iter1));

console.log(result); // [[1, 'a'], [2, 'b'], [3, 'c']]
```

## Usage - Lazy

### atL

- 지연 평가를 사용하여 인덱스가 주어진 값과 일치하는 요소를 반환합니다. 필요한 요소를 평가할 때까지 평가가 지연됩니다.
- 이터러블/이터레이터를 반환합니다.

```tsx
import * as L from 'streamlinejs/lazy';

const arr = [1, 2, 3, 4, 5];
const index = 2;

const res = L.atL(index, arr);
const iterator = res[Symbol.iterator]();

console.log([...res]); // [3]
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

```tsx
import * as L from 'streamlinejs/lazy';

const arr = [1, 2, 3, 4, 5];
const index = -1;
const result = [...L.atL(index, arr)];

console.log(result); // [5]
```

```tsx
// atL with go
import * as _ from 'streamlinejs/strict';
import * as L from 'streamlinejs/lazy';

const arr = [1, 2, 3, 4, 5];

const res = _.go<number>(
  arr,
  arr => L.reduceL((a: number, b: number) => a + b, arr),
  arr => L.atL(-1, arr),
  _.takeAll,
);

console.log(res); // [15]
```

### chunkL

- 주어진 크기로 배열을 나누어 지연 평가된 청크를 반환합니다.
- 이터러블/이터레이터를 반환합니다.

```tsx
import * as L from 'streamlinejs/lazy';

const res = L.chunkL(2, [1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log([...res]); // [[1, 2], [3, 4], [5, 6], [7, 8], [9]]
```

### dropL

- 처음 n개의 요소를 건너뛰고 나머지 요소를 반환하는 지연 함수입니다.

```tsx
import * as L from 'streamlinejs/lazy';

const res = L.dropL(2, [1, 2, 3, 4, 5]);

console.log([...res]); // [3, 4, 5]
```

```tsx
import * as L from 'streamlinejs/lazy';

const res = L.dropL(10, [1, 2, 3, 4, 5]);

console.log([...res]); // []
```

```tsx
import * as L from 'streamlinejs/lazy';

const res = L.dropL(-1, [1, 2, 3, 4, 5]);

console.log([...res]); // [1, 2, 3, 4, 5]
```

```tsx
import * as L from 'streamlinejs/lazy';

const res = L.dropL(2, 'hello');

console.log([...res]); // ['l', 'l', 'o']
```

### filterL

- 조건을 만족하는 요소만을 지연 평가로 반환합니다.
- 이터러블/이터레이터를 반환합니다.

```tsx
import * as L from 'streamlinejs/lazy';

const arr = [1, 2, 3, 4, 5];
const res = L.filterL((x: number) => x % 2 === 0, arr);

const iterator = res[Symbol.iterator]();

console.log([...res]); // [2, 4]
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

```tsx
// filterL with go
import * as _ from 'streamlinejs/strict';
import * as L from 'streamlinejs/lazy';

const arr = [1, 2, 3, 4, 5];

_.go<number[]>(arr, arr => L.filterL((a: number) => a % 2 === 0, arr), _.takeAll, console.log); // [2, 4]
```

### flatL

- 중첩된 배열을 평탄화하여 지연 평가로 반환합니다.
- 이터러블/이터레이터를 반환합니다.

```tsx
import * as L from 'streamlinejs/lazy';

const arr = [1, [2, 3], [[4], [5, 6]]];
const res = L.flatL<number>(arr);

const iterator = res[Symbol.iterator]();

console.log([...res]); // [1, 2, 3, 4, 5, 6]
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: 6, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

### mapL

- 각 요소에 주어진 함수를 지연 평가로 적용하여 새로운 요소를 반환합니다.
- 이터러블/이터레이터를 반환합니다.

```tsx
import * as L from 'streamlinejs/lazy';

const arr = [1, 2, 3, 4, 5];

const res = L.mapL(x => x * 2, arr);
const iterator = res[Symbol.iterator]();

console.log([...res]); // [2, 4, 6, 8, 10]
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 6, done: false }
console.log(iterator.next()); // { value: 8, done: false }
console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

```tsx
// mapL with go

import * as _ from 'streamlinejs/strict';
import * as L from 'streamlinejs/lazy';

const arr = [1, 2, 3, 4, 5];

_.go<number[]>(arr, arr => L.mapL((a: number) => a * 2, arr), _.takeAll, console.log); // [2, 4, 6, 8, 10]
```

### rangeL

- 주어진 범위의 숫자를 지연 평가로 생성하여 반환합니다.
- 이터러블/이터레이터를 반환합니다.

```tsx
import * as L from 'streamlinejs/lazy';

const res = L.rangeL(1, 5);
const iterator = res[Symbol.iterator]();

console.log([...res]); // [ 1, 2, 3, 4, 5 ]
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

```tsx
console.log([...L.rangeL(10)]); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log([...L.rangeL(5, 2)]); // [5, 4, 3]
console.log([...L.rangeL(1, 10, 2)]); // [1, 3, 5, 7, 9]
console.log([...L.rangeL(8, 3, 2)]); // [8, 6, 4]
console.log([...L.rangeL(8, 3, -2)]); // [8, 6, 4]
```

### reduceL

- 배열의 각 요소에 대해 주어진 함수를 지연 평가로 적용하여 단일 누적 값을 반환합니다.
- 이터러블/이터레이터를 반환합니다.

```tsx
import * as L from 'streamlinejs/lazy';

const arr = [1, 2, 3, 4, 5];
const res = L.reduceL((acc: number, x: number) => acc + x, 0, arr);
const iterator = res[Symbol.iterator]();

console.log([...res]); // [1, 3, 6, 10, 15]
console.log([...res].at(-1)); // 15

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 6, done: false }
console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 15, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

### takeL

- 지연 평가로 배열의 앞에서부터 지정된 개수만큼 요소를 반환합니다.
- 이터러블/이터레이터를 반환합니다.

```tsx
import * as L from 'streamlinejs/lazy';

const arr = [1, 2, 3, 4, 5];

const res = L.takeL(2, arr);
const iterator = res[Symbol.iterator]();

console.log([...res]); // [1, 2]
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

### zipL

- 지연 평가로 동일한 위치에 있는 요소들을 묶어서 튜플로 반환합니다.
- 이터러블/이터레이터를 반환합니다.

```tsx
import * as L from 'streamlinejs/lazy';

const result = zipL([1, 2, 3], ['a', 'b', 'c']);
const iterator = result[Symbol.iterator]();

console.log(iterator.next()); // { value: [1, 'a'], done: false }
console.log(iterator.next()); // { value: [2, 'b'], done: false }
console.log(iterator.next()); // { value: [3, 'c'], done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

```tsx
import * as L from 'streamlinejs/lazy';

const result = L.zipL([1, 2, 3], ['a', 'b', 'c']);

console.log([...result]); // [[1, 'a'], [2, 'b'], [3, 'c']]
```

```tsx
import * as L from 'streamlinejs/lazy';

const result = L.zipL([1, 2, 3], ['a', 'b']);

console.log([...result]); // [[1, 'a'], [2, 'b']]
```

## Usage - Strict

Strict 함수는 Lazy 함수를 기반으로 구현됩니다.

### at

- 주어진 배열에서 주어진 인덱스에 있는 요소를 반환합니다. 인덱스가 유효하지 않을 경우 undefined를 반환합니다.

```tsx
import * as _ from 'streamlinejs/strict';

const iter = [1, 2, 3, 4, 5];
const index = 2;
const result = _.at(index, iter);

console.log(result); // 3
```

```tsx
import * as _ from 'streamlinejs/strict';

const arr = [1, 2, 3, 4, 5];
const res = go<number>(arr, arr => at(-1, arr));

console.log(res); // 5
```

### chunk

- 주어진 크기로 배열을 나누어 청크를 반환합니다.

```tsx
import * as _ from 'streamlinejs/strict';

const res = _.chunk(2, [1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log(res); // [[1, 2], [3, 4], [5, 6], [7, 8], [9]]
```

### concat

- 주어진 두 이터러블을 하나로 결합합니다.

```tsx
import * as _ from 'streamlinejs/strict';

const iter1 = [1, 2, 3];
const iter2 = [4, 5, 6];

const result = _.concat(iter1, iter2);

console.log(result); // [1, 2, 3, 4, 5, 6]
```

```tsx
import * as _ from 'streamlinejs/strict';

const iter1 = 'hello';
const iter2 = 'world';

const result = _.concat(iter1, iter2);

console.log(result); // ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
```

```tsx
import * as _ from 'streamlinejs/strict';

const iter1 = [1, 2, 3];
const iter2 = 'world';

const result = _.concat(iter1, iter2);

console.log(result); // [1, 2, 3, 'w', 'o', 'r', 'l', 'd']
```

### curry

- 다중 인수를 가진 함수를 단일 인수를 가진 함수의 체인으로 변환합니다.

```tsx
import * as _ from 'streamlinejs/strict';

const mult = _.curry((a: number, b: number) => a * b);

const twoMult = mult(2);

console.log(twoMult(1)); // 2
console.log(twoMult(2)); // 4
console.log(twoMult(3)); // 6
```

### drop

- 처음 n개의 요소를 건너뛰고 나머지 요소를 반환하는 함수입니다.

```tsx
import * as _ from 'streamlinejs/strict';

const res = _.drop(2, [1, 2, 3, 4, 5]);

console.log(res); // [3, 4, 5]
```

```tsx
import * as _ from 'streamlinejs/strict';

const res = _.drop(10, [1, 2, 3, 4, 5]);

console.log(res); // []
```

```tsx
import * as _ from 'streamlinejs/strict';

const res = _.drop(-1, [1, 2, 3, 4, 5]);

console.log(res); // [1, 2, 3 ,4 ,5]
```

```tsx
import * as _ from 'streamlinejs/strict';

const res = _.drop(2, 'hello');

console.log(res); // ['l', 'l', 'o']
```

### filter

- 주어진 조건을 만족하는 요소만을 반환합니다.

```tsx
import * as _ from 'streamlinejs/strict';

const arr = [1, 2, 3] as const;

const res = _.filter((a: number) => a > 1, arr);

console.log(res); // [2, 3]
```

### find

- 주어진 조건을 만족하는 첫번째 요소를 반환합니다.

```tsx
import * as _ from 'streamlinejs/strict';

const isEven = (n: number) => n % 2 === 0;
const result = _.find(isEven, [1, 2, 3, 4, 5, 6]);

console.log(result); // 2
```

```tsx
import * as _ from 'streamlinejs/strict';

const isVowel = (c: string) => 'aeiou'.includes(c);
const result = _.find(isVowel, 'hello');

console.log(result); // 'e'
```

```tsx
import * as _ from 'streamlinejs/strict';

const isEven = (n: { value: number }) => n.value % 2 === 0;
const result = find(isEven, [{ value: 1 }, { value: 2 }, { value: 3 }]);

console.log(result); // { value: 2 }
```

### flat

- 중첩된 배열을 평탄화하여 단일 배열로 만듭니다.

```tsx
import * as _ from 'streamlinejs/strict';

const res = _.flat([[], [[]], [[], []], [[], 1], [[2], []], [[], [3]], []]);

console.log(res); // [1, 2, 3]
```

```tsx
import * as _ from 'streamlinejs/strict';

const arr = [[1], [2, 3], [4, 5, 6]];

const res = _.go(arr, _.flat);

console.log(res); // [1, 2, 3, 4, 5, 6]
```

### go

- 함수들을 조합하여 복잡한 로직을 단순하게 구현할 수 있습니다.

```tsx
import * as _ from 'streamlinejs/strict';

_.go<number>(
  1,
  a => a + 1,
  a => a * 2,
  console.log,
); // 4
```

```tsx
import * as _ from 'streamlinejs/strict';

const arr = [1, 2, 3, 4, 5];

const addAndMultiply = _.go<Record<string, number>>(arr, arr =>
  _.reduce((a: Record<string, number>, b: number) => {
    if (typeof a === 'number') return { [a]: a };
    return { ...a, [b]: b };
  }, arr),
);

console.log(addAndMultiply); // { '1': 1, '3': 3, '4': 4, '5': 5 }
```

### join

- 배열의 모든 요소를 문자열로 변환하고, 주어진 구분자를 사용하여 결합합니다.

```tsx
import * as _ from 'streamlinejs/strict';

const result = _.join('', [1, 2, 3]);

console.log(result); // '123'
```

```tsx
import * as C from 'streamlinejs/curry';
import * as _ from 'streamlinejs/strict';

const obj = { a: 1, b: 2, c: 3 };

const res = _.go(
  Object.entries(obj),
  C.mapC(([k, v]: [string, number]) => `${k}=${v}`),
  arr => _.join('&', arr),
);

console.log(res); // 'a=1&b=2&c=3'
```

### map

- 배열의 각 요소에 주어진 함수를 적용하여 새로운 배열을 반환합니다.

```tsx
import * as _ from 'streamlinejs/strict';

const arr = [1, 2, 3] as const;
const res = _.map((a: number) => a + 1, arr);

console.log(res); // [2, 3, 4]
```

### pipe

- 함수를 조합하여 체인으로 연결하고, 각 함수의 결과를 다음 함수의 입력으로 전달합니다.

```tsx
import * as _ from 'streamlinejs/strict';

const f = _.pipe<number>(
  (a, b) => a + b,
  a => a + 10,
  a => a + 100,
);

console.log(f(1, 2)); // 113
```

```tsx
import * as _ from 'streamlinejs/strict';

const f = _.pipe<number>((a: number[]) => _.reduce((a: number, b: number) => a + b, a));

console.log(f([1, 2, 3, 4, 5])); // 15
```

### range

- start, stop, step을 받아 숫자 배열을 생성합니다.

```tsx
import * as _ from 'streamlinejs/strict';

console.log(_.range(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(_.range(1, 10, 2)); // [1, 3, 5, 7, 9]
console.log(_.range(10, 1, -2)); // [10, 8, 6, 4, 2]
```

### reduce

- 배열의 각 요소에 대해 주어진 함수를 적용하여 단일 누적 값을 반환합니다.

```tsx
import * as _ from 'streamlinejs/strict';

const iter = [1, 2, 3, 4, 5] as const;

const result = _.reduce((acc: number, val: number) => acc + val, 0, iter);

console.log(result); // 15
```

```tsx
import * as _ from 'streamlinejs/strict';

const iter = [1, 2, 3, 4, 5] as const;

const result = _.reduce((acc: number, val: number) => acc + val, iter);

console.log(result); // 15
```

### take

- 배열에서 첫 번째부터 지정된 개수만큼의 요소를 가져옵니다.

```tsx
import * as _ from 'streamlinejs/strict';

_.go(_.range(1, 10), arr => _.take(5, arr), console.log); // [1, 2, 3, 4, 5]
```

### takeAll

- 배열의 모든 요소를 그대로 반환합니다.

```tsx
import * as _ from 'streamlinejs/strict';

_.go(_.range(1, 10), arr => _.takeAll(arr), console.log); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### zip

- 동일한 위치에 있는 요소들을 묶어서 튜플로 반환합니다.

```tsx
import * as _ from 'streamlinejs/strict';

const res = _.zip([1, 2, 3], ['a', 'b', 'c']);

console.log(res); // [[1, 'a'], [2, 'b'], [3, 'c']]
```

```tsx
import * as _ from 'streamlinejs/strict';

const res = _.zip([1, 2, 3], ['a', 'b']);

console.log(res); // [[1, 'a'], [2, 'b']]
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
