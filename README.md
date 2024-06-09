# Streamline.js
streamlinejs는 TypeScript를 사용한 함수형 프로그래밍 라이브러리로, 타입 추론이 가능한 함수형 프로그래밍을 지향합니다. 
이 라이브러리는 함수형 프로그래밍의 핵심 원칙을 구현하고, 코드의 가독성과 유지보수성을 향상시키기 위해 설계되었습니다.

## Index
[1.Install](#install)

[2.Main Function](#main-function)

[3.Curry](#usage---curry)
- [filterC](#filterc)
- [mapC](#mapc)
- [reduceC](#reducec)
- [takeC](#takec)

[4.Lazy](#usage---lazy)
- [filterL](#filterl)
- [mapL](#mapl)
- [rangeL](#rangel)
- [reduceL](#reducel)
- [takeL](#takel)

[5.Strict](#usage---strict)

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

### filterC
- 주어진 조건을 만족하는 요소만을 반환합니다.
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
  console.log // [2, 4]
);
```
### mapC 
- 각 요소에 주어진 함수를 적용하여 새로운 배열을 반환합니다.
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
- 배열의 각 요소에 대해 주어진 함수를 적용하여 단일 누적 값을 반환합니다.
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
- 배열의 앞에서부터 지정된 개수만큼 요소를 반환합니다.
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

## Usage - Lazy

### filterL
-  조건을 만족하는 요소만을 지연 평가로 반환합니다.
-  이터러블/이터레이터를 반환합니다.
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

_.go<number[]>(
  arr,
  (arr) => L.filterL((a: number) => a % 2 === 0, arr),
  _.takeAll,
  console.log
); // [2, 4]
```

### mapL
- 각 요소에 주어진 함수를 지연 평가로 적용하여 새로운 요소를 반환합니다.
- 이터러블/이터레이터를 반환합니다.
```tsx
import * as L from 'streamlinejs/lazy';

const arr = [1, 2, 3, 4, 5];

const res = L.mapL((x) => x * 2, arr);
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

_.go<number[]>(
  arr,
  (arr) => L.mapL((a: number) => a * 2, arr),
  _.takeAll,
  console.log
); // [2, 4, 6, 8, 10]
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

## Usage - Strict

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
