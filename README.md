# 객체와 타입

자바스크립트가 아닌 타입스크립트의 객체와 타입의 개념과 관련 구문을 살펴보았다.

## 변수 선언방법

### 타입스크립트의 기본 제공 타입  
  
타입스크립트는 자바스크립트와 호환성을 위해서 자바스크립트의 타입과 타입스크립트의 타입을 모두 지원한다.

|자바스크립트|타입스크립트|  
|-|-|
|Number|number|
|Boolean|boolean|
|String|string|
|Object|object|

### 변수 선언하기
es5 자바스크립트는 var키워드를 통해 변수를 선언하였다. 하지만 var는 다른 프로그래밍 언어와는 다르게 동작한다. 자세한 문제는 아래 링크를 참고하자.
https://velog.io/@groovejumat/%EC%8B%A4%EC%A0%84-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B81.-var-%EB%B3%80%EC%88%98%EC%9D%98-%EB%AC%B8%EC%A0%9C%EC%A0%90

그래서 es6(ESNext)부터 let과 const 키워드가 추가되었다.  
let 키워드는 수시로 코드에서 값이 변경될 수 있고, 다른 프로그래밍 언어의 일반적인 변수 선언 방식과 같다.  
const 키워드는 한 번 선언한 변수값은 변경될 수 없고, 선언시 초기화가 같이 이루어져야 한다.  
```javascript
let num = 123; // num: 123
num = 321; // num: 321

const name = 'solchan' // name: solchan
name = 'boy' // name: solchan, 불가능
```

타입스크립트에서는 변수를 선언할 때, 타입을 지정할 수 있다.  
``` 
let 변수명: 타입 = 초기값
const 변수명: 타입 = 초기값
```
```typescript
let num: number = 123; // num: 123
num = 321; // num: 321
num = 'one'; // num: 123, string은 불가능

const name: string = 'solchan' // name: solchan
const age: number = '24'; // X, number타입에 string 불가능
```
하지만 타입스크립트는 자바스크립트와 호환성을 위해 아래와 같이 선언하여도 타입 추론이 가능합니다.  
이를 **타입 추론**이라고 합니다.
```typescript
let num = 123; // 123을 통해 number로 타입 추론
const name = 'solchan' // 'solchan'을 통해 string으로 타입 추론
```

혹은, any타입을 지정할 수 있습니다.  
any타입은 타입을 지정하지 않은 경우와 같이 동작한다.
```typescript
let val: any = 123; // 지금은 숫자
val = {}; // 지금은 객체
val = 'solchan'; // 지금은 문자열
```

마지막으로 undefined에 대해 알아보면, 타입스크립트에서는 타입과 값으로 동작한다.  
아래 예시를 보고 이해해보자
```typescript
let val: undefined = undefined; // 타입: undefined, 값: undefined

val = 1; // 불가능, val 타입이 undefined이기 때문에 number는 불가능
```
