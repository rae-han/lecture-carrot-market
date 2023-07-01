## prisma
npm i -D prisma

npx prisma [명령어]

npx prisma init
-> prisma 폴더와 .env 파일이 생긴다.
prisma > schema > db > provider: mysql

planetscale 

brew i planetscale/tap/pscale
brew install mysql-client

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