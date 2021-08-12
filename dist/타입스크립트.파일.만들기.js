"use strict";
// 타입스크립트 파일 만들기
/** 변수: string은 변수 Type이 string이라는 것이다.
 * string으로 선언후 다른 Type의 값을 넣으면 오류가 나타난다.
 */
const message = 'hello world';
/**
 * npx tsc를 하면 컴파일된 .js파일이 생성된다.
 * 프로젝트 내에 설치한 typescript 패키지를 사용하요 컴파일 하고 싶을 땐,
 * npm install --save typescript를 통해 로컬 패키지로 설치한다.
 * 이후 package.json의 scripts부분에 "build": "tsc"를 추가해준다.
 * */ 
