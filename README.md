# Streamline.js
streamlinejs는 TypeScript를 사용한 함수형 프로그래밍 라이브러리로, 타입 추론이 가능한 함수형 프로그래밍을 지향합니다. 
이 라이브러리는 함수형 프로그래밍의 핵심 원칙을 구현하고, 코드의 가독성과 유지보수성을 향상시키기 위해 설계되었습니다.

## Index
[1.Install](#install)

[2.Main Function](#main-function)

[3.Curry](#usage---curry)

[4.Lazy](#usage---lazy)

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

- **filterC**
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
- **mapC**
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
- **reduceC**
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
- **takeC**
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

## Usage - Strict

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
