# 타입스크립트 설정파일 생성하기
### 1. 디렉토리를 생성하고 npm 또는 yarn을 통해 package.json을 생성한다.
### 2. TypeScript를 사용하기 위해서는 설정파일(tsconfig.json)이 필요하다.
   1. 직접 작성 가능
      ```
         {
            "compilerOptions": {
                "target": "es6",
                "module": "commonjs",
                "strict": true,
                "esModuleInterop": true
            }
         }
         ```
   2. Global로 설치 후 CLI로 생성, 
      ```
         npm install -g typescript
         tsc --init
         ```
   3. Global이 싫은 경우, 
      ```
      npm install typescript
      npx tsc --init
      ```
> **tsconfig.js**  
> 1. target : 컴파일된 코드가 실행될 환경을 정의한다.  
> 2. module : 컴파일된 코드가 어떤 모듈 시스템을 사용하는지 정의한다.
> 3. struct : 모든 타입 체킹 옵션을 활성화한다는 것이다.
> 4. esModuleInterop : commonjs모듈 형태로 이루어진 파일을 es2015모듈 형태로 불러올 수 있게 한다.

