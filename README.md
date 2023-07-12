## prisma
npm i -D prisma

npx prisma [명령어]

npx prisma init
-> prisma 폴더와 .env 파일이 생긴다.
prisma > schema > db > provider: mysql

planetscale 

brew i planetscale/tap/pscale
brew install mysql-client

pscale connect carrot-market

// 여기에서 나오는 url을 .env의 DATABASE_URL에 /carrot-market pathname과 함께 적어주자.

// model을 db에 push 하면.
prisma 는 두 가지 목적으로 schema.prisma 파일을 살펴본다.
1. model들을 db에 push하고 sql migration을 자동으로 처리하기 위함
2. db와 상화작용 하기위해 client를 생성하고, 그 client에 자동완성으로 타입을 추가함.

일반적으로 sql, postgresql의 경우 없는 외래키를 사용하면 db에서 오류가 발생한다.
하지만 vitess는 발생하지 않는다.
그래서 prisma 쪽에서 해줘야 한다.
```shell
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
  relationMode = "prisma"
}
```
relationMode를 적는 이유는 다른 객체에 연결될 때, 그 객체가 존재하길 바란다는 뜻.

npx prisma db push
// 이걸 해야 모델에 따라 디비 테이블이 생성된다.

Referential integrity (참조 무결성)
(어떤 다른 모델을 참조하는 경우 해당 모델이 반드시 존재해야 함)
참조 무결성은 모든 참조가 유효함을 나타내는 데이터 세트의 속성입니다. 참조 무결성을 위해서는 한 레코드가 다른 레코드를 참조하는 경우 반드시 해당 참조하는 레코드가 존재해야 한다. 예를 들어 Post 모델이 user필드를 정의하는 경우 User(모델)도 반드시 존재해야 합니다. 참조 무결성은 참조를 손상시키는 변경을 방지하는 제약 조건과 레코드를 업데이트하거나 삭제할 때 실행되는 참조 작업을 정의함으로써 적용됩니다.
https://www.prisma.io/docs/concepts/co

planetscale > 프로젝트 > branches > branch > table 선택하면 sql 볼 수 있다.

npx prisma studio

prisma는 관리자 패널뿐 아니라 client라는 것도 제공해 준다.

npm install @prisma/client

// prisma clinet는 mongoose 가은 것.

npx prisma generate // 사실 prisma push 할 때 됐던 내용이라 또 할필욘 없다.
// 이걸 하면 node_modules에도 프로젝트의 스키마가 추가된다. 
// 심지어 타입스크립트 타입으로 추가된다.
node_modules > .prisma > client > index.d.ts

### pscale
pscale auth login

pscale region list - 지역 리스트를 본다

pscale database create
pscale database create carrot-market --region ap-northeast

pscale connect carrot-market


## tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
-p를 붙이면 postcss.config.js파일까지 생성

## eslint
eslint-config-airbnb
eslint-config-prettier
@typescript-eslint/eslint-plugin
@typescript-eslint/parser 
prettier     

npm install --save-dev eslint
npm install eslint eslint-plugin-react --save-dev
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript
npm install eslint-plugin-import --save-dev
npm install eslint-plugin-jsx-a11y --save-dev

##
Prettier와 충돌하는 ESLint 규칙들을 꺼주는 eslint-config-prettier
Prettier를 ESLint 규칙으로 실행시켜주는 eslint-plugin-prettier
Prettier를 실행한 직후 ESLint를 실행시켜주는 prettier-eslint
eslint-plugin-prettier와 prettier-eslint는 여러 단점들이 있어 Prettier 측에서는 eslint-config-prettier를 가장 추천

// 파일을 저장할 때마다 `eslint` 규칙에 따라 자동으로 코드를 수정
"editor.codeActionsOnSave": { "source.fixAll.eslint": true },
// `prettier`를 기본 포맷터로 지정
"editor.defaultFormatter": "esbenp.prettier-vscode",
// 파일을 저장할 때마다 포매팅 실행
"editor.formatOnSave": true,

https://tech.kakao.com/2019/12/05/make-better-use-of-eslint/

https://github.com/dustinspecker/awesome-eslint
https://awesomerank.github.io/lists/dustinspecker/awesome-eslint.html

next 설치 초기 eslint
"eslint": "8.44.0",
"eslint-config-next": "13.4.7",
->         "eslint-plugin-import": "^2.26.0",
"eslint-plugin-jsx-a11y": "^6.5.1",
"eslint-plugin-react": "^7.31.7",
"eslint-plugin-react-hooks": "^4.5.0"

eslint-config-airbnb
"eslint": "^7.32.0 || ^8.2.0",
"eslint-plugin-import": "^2.25.3",
"eslint-plugin-jsx-a11y": "^6.5.1",
"eslint-plugin-react": "^7.28.0",
"eslint-plugin-react-hooks": "^4.3.0"

eslint
eslint-plugin-import
eslint-plugin-jsx-a11y
eslint-plugin-react
eslint-plugin-react-hooks



hover (&:hover)
focus (&:focus)
active (&:active)
first (&:first-child)
disabled (&:disabled)
sm (@media (min-width: 640px))
md ( @media (min-width: 768px))
lg (@media (min-width: 1024px))
dark (@media (prefers-color-scheme: dark))

within only-of-type :invalid placeholder-shown

select-none selection

tag details summary
open

list list-decimal marker

inpot:file

first-letter
first-line

prefers-color-scheme

tailwind.config.js > darkMode > media(환경 설정), class(앱 설정, 특정 요소에 dark 를 넣어줘야 함, 주로 html - 근데 랜더링은 body 부터니 body에 적어도 되지 않을까..??)

Just in Time compiler
3.0 전엔 모든 클래스 명이 다 있고 필요 없는 것을 삭제해주는 purging 작업을 했다.
지금은 JIT 컴파일러를 쓴다.
지금은 사용하는 것만 자동으로 생성된다.
그 덕분에 실제 없는 값이라도 생성할수 있다.  ex) text-[숫자px]