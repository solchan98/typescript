# 함수와 메서드

자바스크립트의 함수 선언 방법과는 어떻게 다른지, 클래스의 메서드는 어떻게 선언하는지를 알아보자.  

## 함수 선언하기

타입스크립트는 자바스크립트와 호환성을 위해, 함수 선언문 역시 기존 자바스크립트의 방식으로 선언하여도 작동된다.  
타입스크립트 역시 function키워드와 ES6(ESNext)부터 지원하는 화살표 함수를 사용하여 함수 선언이 가능하다.

### function과 화살표 함수
다음은 타입스크립트의 함수 선언 방식이다.
```typescript
/* function 키워드를 사용하는 방법 */
function 함수명(매개변수: 타입): 반환타입 {
    // 함수 작동 코드...  
}
/* 화살표 함수를 사용하는 방법 */
const 함수명 = (매개변수: 타입): 반환타입 => {
    // 함수 작동 코드...
}
```
아래는 예시이다.
```typescript
/* function 키워드를 사용하는 방법 */
function sayHello(name: string, age?: number): void {
    console.log(`${name}, Hello?`);
}

/* 화살표 함수를 사용하는 방법 */
const sayHello = (name: string, age?: number): void => {
    console.log(`${name}, Hello?`);
}
```
함수도 ?를 통해 필수와 선택을 나누어 정의할 수 있다.

### 함수 시그니처 및 별칭
타입스크립트의 함수는 변수와 마찬가지로 타입을 갖는다. 이 타입을 함수 시그니처라고 한다.
```typescript
const sayHello: (name: string, age: number) => void = function(name: string, age: number): void {}
```
위에서 **(name: string, age: number) => void** 이 부분이 해당된다.  

위 코드를 type 키워드를 통해 별칭으로 만들어 사용할 수 있다.  
```typescript
type sayHello = (name: string, age: number) => void


const hello: sayHello = (a, b) => {
    console.log(`이름: ${a}, 나이: ${b}`)
}
```
그런데, 나는 함수 시그니처의 장점을 아직 이해하지 못하겠다.  
아래는 함수 시그니처를 사용하지 않고 동일한 로직을 수행하는 함수이다.
```typescript
function basicHello(name: string, age: number): void {
    console.log(`이름: ${name}, 나이: ${age}`)
}
```
만약, sayHello 타입의 함수가 많이 사용된다면 함수 시그니처의 장점이 될 것이라 생각하지만 그런 경우가 있을지 의문이다.

### 함수 표현식
자바스크립트는 객체지향언어와 함수형의 특징을 모두 갖고 있다. 따라서 타입스크립트 또한 두 특징을 모두 갖고 있다.  
함수 표현식을 통해 타입스크립트의 함수형 특징을 알아볼 수 있다.

자바스크립트에서 함수는 Function클래스의 인스턴스이다. 즉, 다음 코드처럼 사용이 가능하다.
```typescript
const add = new Function('a', 'b', 'return a + b');
console.log(add(1, 2));
// 출력 -> 3
```
기존 함수 선언 방식과는 매우 다르다.  
또 다른 방법으로 선언이 가능하다.
```typescript
const add = function(a, b) {
    return a + b;
}
```
위 처럼 function(a, b) { return a + b } 이 코드를 **함수 표현식**이라고 한다.  
또, const를 통해 add에 함수를 넣는 것을 알 수 있는데, 이 처럼 변수와 함수를 구분하지 않는다는 의미로 **일등 함수**라고 한다.

### 일등 함수
일등함수는는 프로그래밍 언어에서 제공하는 기능입니다. 이 기능은 변수에 함수를 담아 값으로 취급할 수 있는 것을 말합니다. 그렇기 때문에 매개변수로 함수를 받아 사용할 수 있고, 이를 **콜백 함수**라고 합니다.

다음은 함수를 매개변수로 받는 함수가 익명함수를 받아 실행하는 예시 입니다.
```typescript
function sayFunction(sayHello: () => void): void {
    sayHello()
}

sayFunction(() => { console.log('Hello')});
// 출력 -> Hello
```
이 처럼 함수를 인자로 넘겨 사용할 수 있다.

### 중첩 함수

함수형 언어에서 함수는 변수에 담기는 함수 표현식이다. 따라서, 함수 내부에 또 다른 함수를 선언 및 호출 할 수 있다.  
```typescript
const sayUser = (name: string, age: number, say: (name: string) => void):void => {
    const makeString = (name: string, age: number) =>  `이름: ${name}, 나이: ${age}`;
    say(makeString(name, age));
}
sayUser('solchan', 24, (result): void => console.log(result));
```
sayUser 함수는 이름, 나이, 출력하는 함수를 받고, makeString 함수를 호출하여 문자열을 생성한 후, 매개변수로 받은 say함수를 호출하여 문자열을 출력한다.

### 클래스에서 메서드 선언하기
다른 객체지향 언어와 마찬가지로, 인스턴스에 this 키워드를 사용할 수 있다. 하지만 화살표 함수로 생성된 함수에는 사용할 수 없다.
```typescript
class User {
    constructor(public name: string){};
    sayHello(): void {
        console.log(`${this.name}, Hello?`);
    }
}

const user = new User('solchan');
user.sayHello();
// 출력 -> solchan, Hello?
```
그리고 static 키워드를 통해 정적 메서드를 생성하여 사용할 수 있다.
```typescript
class SayHello {
    static say(): string {
        return 'Hello!';
    }
}
console.log(SayHello.say());
// 출력 -> Hello!
```
### 메서드 체이닝
메서드 체이닝은 객체의 메서드를 이어서 호출하는 방식을 말한다.  
그러기 위해서는 메서드는 this를 반환해야 한다.
```typescript
class Calc {
    constructor(public a: number, public b: number){};
    add() {
        this.a += this.b;
        return this;
    }
    mul() {
        this.a *= this.a;
        return this;
    }
    sayResult(): void {
        console.log(this.a);
    }
}

const calc = new Calc(1, 2);

calc.add().mul().sayResult();
/**
 * 1 + 2 = 3
 * 3 * 3 = 9
 * result  9
 */
```
