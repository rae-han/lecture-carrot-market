
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