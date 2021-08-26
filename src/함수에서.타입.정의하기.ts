// 함수에서 타입 정의하기
/** 파리미터 부분에서 각 인자별 type을 정의하고,
 * 반환값에 대한 type도 정의한다.
 * 역시 타입에 맞지 않으면 오류를 나타낸다.*/
function sum(x: number, y: number): number {
    return x + y;
}
/** number type이 아니면 오류를 나타낸다. */
console.log(sum("ㅇ", 2))

/** 함수의 반환값이 없다면 :void를 정의하면 된다. */