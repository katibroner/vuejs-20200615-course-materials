# Однофайловые компоненты; @Vue/cli

## Современный Frontend

- Минимум - скринкасты и учебник:
    - Скринкаст по Nodejs. Рекомендуется ознакомиться с видео в Части 1: 01-09.  
    [https://learn.javascript.ru/screencast/nodejs](https://learn.javascript.ru/screencast/nodejs)
    - Скринкаст по Webpack (+ babel). Он не очень свежий, но концептуально всё осталось таким же.  
    [https://learn.javascript.ru/screencast/webpack](https://learn.javascript.ru/screencast/webpack)
    - Полифилы, babel: [https://learn.javascript.ru/polyfills](https://learn.javascript.ru/polyfills)
- Интересные статьи:
    - Каково оно учить JavaScript в 2016:  
    [https://habr.com/ru/post/312022/](https://habr.com/ru/post/312022/)
    - Объясняем современный JavaScript динозавру:  
    [https://habr.com/ru/company/mailru/blog/340922/](https://habr.com/ru/company/mailru/blog/340922/)
- Доклады:
    - HolyJS 2017 Moscow | Михаил Башуров – Yarn, npm v5 или pnpm — кто круче?:  
    [https://www.youtube.com/watch?v=hq-gIihAs5A](https://www.youtube.com/watch?v=hq-gIihAs5A)
    - HolyJS 2018 Moscow | Стас Курилов — Глубокое погружение в webpack:  
    [https://www.youtube.com/watch?v=aiYkJOPD9v8](https://www.youtube.com/watch?v=aiYkJOPD9v8)
    - HolyJS 2019 Moscow | Nicolò Ribaudo — @babel/how-to:  
    [https://www.youtube.com/watch?v=UeVq_U5obnE](https://www.youtube.com/watch?v=UeVq_U5obnE)
- Инструменты:
    - NodeJS: [https://nodejs.org/](https://nodejs.org/)
    - NPM: [https://www.npmjs.com/](https://www.npmjs.com/)
        - Документация по package.json: [https://docs.npmjs.com/configuring-npm/package-json.html](https://docs.npmjs.com/configuring-npm/package-json.html)
        - Документация по CLI: [https://docs.npmjs.com/cli-documentation/cli](https://docs.npmjs.com/cli-documentation/cli)
    - LESS, SASS: [http://lesscss.org/](http://lesscss.org/), [https://sass-lang.com/](https://sass-lang.com/)
    - PostCSS: [https://postcss.org/](https://postcss.org/), [https://github.com/postcss/postcss](https://github.com/postcss/postcss)
    - Babel: [https://babeljs.io/](https://babeljs.io/)
    - Browserslist: [https://github.com/browserslist/browserslist](https://github.com/browserslist/browserslist), [https://browserl.ist/](https://browserl.ist/)
    - Webpack: [https://webpack.js.org/](https://webpack.js.org/)
    - ESLint: [https://eslint.org/](https://eslint.org/)
    - Prettier: [https://prettier.io/](https://prettier.io/)
    - regenerator-runtime: [https://www.npmjs.com/package/regenerator-runtime](https://www.npmjs.com/package/regenerator-runtime)
    - core-js: [https://www.npmjs.com/package/core-js](https://www.npmjs.com/package/core-js)

## Однофайловые компоненты (Single-File Components, SFC)

- Кратко в гайде: [https://vuejs.org/v2/guide/single-file-components.html](https://vuejs.org/v2/guide/single-file-components.html)
- Подробно про SFC: [https://vue-loader.vuejs.org/spec.html](https://vue-loader.vuejs.org/spec.html)
- vue-loader: [https://vue-loader.vuejs.org/guide/](https://vue-loader.vuejs.org/guide/)

## @vue/cli

С этого момента мы будем использовать `@vue/cli` -- систему для разработки на Vue.js. Первое, что требуется сделать -- это установить его:
```bash
npm i -g @vue/cli
```

**ВАЖНО:** не путать `@vue/cli` (версии 3+) с `vue-cli` (версия 2). Всё ещё много статей на старый `vue-cli`, который отличался кардинально.  

`@vue/cli` включает:
- Непосредственно глобальную утилиту `vue`.  
  Она используется для интерактивной генерации проектов, а также интеграции в него новой функциональности через @vue/cli плагины.
- `@vue/cli-service` - зависимость проекта, предоставляющая мощную систему сборки над webpack.
- `vue ui` - графический интерфейс для `@vue/cli` (запускается через команду `vue ui`).

Рекомендуется прочитать весь Guide от начала до конца: [https://cli.vuejs.org/](https://cli.vuejs.org/).

## Eslint + Vue

Рекомендуется прочитать весь VueJS Style Guide: [https://vuejs.org/v2/style-guide/](https://vuejs.org/v2/style-guide/).

Eslint Plugin Vue: [https://eslint.vuejs.org/](https://eslint.vuejs.org/).

В своём проекте вы можете использовать любую удобную для вас конфигурацию eslint (и/или prettier), как одну из стандартных (например, airbnb), так и свою собственную конфигурацию.
