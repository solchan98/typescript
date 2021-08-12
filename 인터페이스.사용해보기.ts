// 인터페이스 사용해보기

/** Java가 아닌 Js, Ts에서 Interface는 클래스 또는 객체를 위한 타입을 지정하기 위해 사용되는 문법이다.
 * 간단히, 클래스를 정의할 때, 꼭 들어가야하는 변수, 함수를 정의한다고 생각, Java랑 비슷. */

/** 응답 type이 numbet인 getArea() 함수를 갖는 Shape Interface 생성 */
interface Shape {
    getArea(): number;
}

/** Shape를 구현하는 Circle 클래스 생성, Shape에서 정의한 모든 것은 필수적으로 구현해야 함.
 * 생성자 파리미터 공간에서 radius: number -> public radius: number로 수정하면,
 * radius: number 선언을 생략할 수 있다.
 * */
class Circle implements Shape{
    radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

const shapes: Shape[] = [new Circle(5), new Circle(7)];
shapes.forEach(shape => { console.log(shape.getArea()) });