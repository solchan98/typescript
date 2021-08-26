// 일반 객체를 Interface로 타입 설정하기

/** Person Interface와 이를 상속받은 Developer Interface 생성 */

interface Person {
    name: string;
    age?: number; // ?는 설정을 해도되고 안해도 된다는 것이다.
}
interface Developer extends Person {
    skills: string[];
}
/** Person Interface를 구현하는 person 객체 생성 */
const person: Person = {
    name: "Solchan"
    // age: 24, Interface에서 ?로 하였기 때문에 생성 선택이 가능하다.
}
/** Developer를 구현하는 expert 생성 */
const expert: Developer = {
    name: "Solchan",
    age: 24,
    skills: ['java', 'python3', 'javascript']
}

/** Person Type의 객체를 저장하는 배열 선언,
 * 각 객체의 머리는 Person이므로 가능하다. */
const people: Person[] = [person, expert];