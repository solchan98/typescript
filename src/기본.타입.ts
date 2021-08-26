//기본 타입

/** 숫자로 선언한 변수에 다른 타입을 넣으려 하면 오류가 발생합니다. */
let count = 0; // 숫자
count += 1;
count = "갑자기 문자열을 넣으면?"

/** 각각 타입별 선언 */
const str: string = "hello world"; // 문자열
const done: boolean = true; // Boolean
const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ['hello', 'world']; // 문자 배열

/** 문자 배열에 숫자를 push하려하면 오류가 발생한다. */
messages.push(1);

/** 다중 타입 변수 선언*/
let strOrun: string | undefined; // string Or undefined
let numOrnull: number | null; // number Or null
let color: 'blue' | 'yello' | 'green';
