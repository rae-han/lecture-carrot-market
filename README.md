
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