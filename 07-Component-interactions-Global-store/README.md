# Глобальные взаимодействия; Централизованное хранилище

## Взаимодействие компонентов

Документация, обработка крайних случаев: [https://vuejs.org/v2/guide/components-edge-cases.html](https://vuejs.org/v2/guide/components-edge-cases.html).

Несмотря на то, что из api доступно обращение к родительскому, корневому и дочерним компонентам, в подавляющем большинстве случаев это плохая практика.

Для обращения к конкретному дочернему элементу лучше подходит `$refs`, а для определения наличия содержимого в слоте обычно подходят `$slots`. Взаимодействие с родителем обычно происходит через события.

Корневой компонент подходит для простейшей реализации шины событий или центрального хранилища, но лучше избегать таких решений вне маленьких приложений.

## EventBus (EventHub)

Шина событий -- это некоторый EventEmitter, который "проходит" через все компоненты. Может быть, как централизованной и общедоступной, так и частной, подключаемой по необходимость.

Во Vue2 можно использовать сам Vue как шину событий (с использованием методов `$emit`, `$on`, `$off`) либо через корневой компонент `$root`, либо через отдельные Vue инстансы. Однако такое решение не будет работать во Vue3, так как методы `$on`, `$once` и `$off` [будут удалены](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0020-events-api-change.md). В качестве альтернативы предлагается использовать любой другой EventEmitter. 

Маленький и простой EventEmitter: [https://github.com/developit/mitt](https://github.com/developit/mitt).

Несмотря на то, что EventBus считается анти-паттерном, это один из простейших способов уведомлять о чём-либо любой компонент приложения (в том числе вне Vue приложения), если речь идёт не об общем состоянии или данных.

## Патчинг прототипа

**Этот подход не был разобран на вебинаре.**

Ещё один способ сделать компонент (да и вообще всё что угодно) доступным из любого компонента -- это пропатчить прототип Vue.

Чтобы новые свойства не путались со свойствами компонентов, их принято называть с префиксом `$`, как и собственные свойства Vue.

После добавления нового свойства в прототип, оно будет доступно в контексте в любом Vue компоненте (даже если на странице несколько Vue приложений).

```javascript
Vue.prototype.$toaster = new Vue(AppToast);
Vue.prototype.$config = { API_URL: '/api' };
Vue.prototype.$httpClient = fetch;
Vue.prototype.$store = Vue.observable({ user: null });
Vue.prototype.$userService = new UserService(new HttpClient());

// Где угодно в компонентах
this.$toaster.success();
```

По моему мнению патчить прототип -- плохая практика (за исключением общепринятых библиотек: `vuex`, `vue-router`).  
Во-первых, это неявное действие. В компоненте никак нельзя узнать, что появилось новое добавленное свойство.  
Во-вторых, это глобальное действие, влияющее на все компоненты всех Vue приложений на сайте.  
В-третьих, потенциально может быть конфликт имён.

И в целом это кажется не очень элегантным.

Тем не менее, это также один из самых простых способов сделать что-то доступным везде в приложении. И этот способ активно применяется множеством библиотек, vue плагинами. 

## Provide / Inject

Provide / Inject -- одна из самых недооценённых функций Vue. Хотя в документации сказано, что это решение для особых случаев, библиотек, это отличный инструмент, позволяющий решить множество проблем, и сделать это явно, тестируемо и элегантно.

Provide позволяет передать всему дереву потомков какие-либо функции (как связанные с компонентом, так и не относящиеся к Vue) или статичные данные (конфигурации и др. данные).

Используя `Vue.observable` или передавая объект по ссылке из data можно передавать данные реактивно, но в текущей версии Vue provide подразумевается, как не реактивный инструмент (что будет изменено во Vue3). 

Документация:
- [https://vuejs.org/v2/api/#provide-inject](https://vuejs.org/v2/api/#provide-inject)
- [https://vuejs.org/v2/guide/components-edge-cases.html#Dependency-Injection](https://vuejs.org/v2/guide/components-edge-cases.html#Dependency-Injection)

## Порталы

Порталы - компоненты, которые позволяют через слот перенести содержимое из одной части DOM дерева в другую. Распространённое применение - отправка в конец вершины DOM разных всплывающих поверх страницы компонентов, таких как модальные окна. 

Самая популярная и мощная библиотека для реализации порталов - portal-vue: [https://github.com/LinusBorg/portal-vue](https://github.com/LinusBorg/portal-vue).

Второй вариант портала от того же автора, более простой, применяемый, когда надо вынести в заранее определённое место в DOM вне корневого Vue компонента: [https://github.com/LinusBorg/vue-simple-portal](https://github.com/LinusBorg/vue-simple-portal).

Во Vue3 появится стандартный компонент `Teleport`, работа которого будет похожа на второй вариант портала.

## Simple Store; Vue.observable

Документация:
- Vue.observable: [https://vuejs.org/v2/api/#Vue-observable](https://vuejs.org/v2/api/#Vue-observable)
- Simple State Management from Scratch: [https://vuejs.org/v2/guide/state-management.html#Simple-State-Management-from-Scratch](https://vuejs.org/v2/guide/state-management.html#Simple-State-Management-from-Scratch)

## Flux; Vuex

О непосредственно паттерне Flux можно почитать в википедии и следующих статьях на Хабре:
- [https://ru.wikipedia.org/wiki/Flux-архитектура](https://ru.wikipedia.org/wiki/Flux-архитектура);
- Разбираемся с Flux, реактивной архитектурой от facebook: [https://habr.com/ru/post/246959/](https://habr.com/ru/post/246959/);
- Flux в картинках (с интересными комментариями): [https://habr.com/ru/company/hexlet/blog/268249/](https://habr.com/ru/company/hexlet/blog/268249/);

Официальная документация по vuex: [https://vuex.vuejs.org/](https://vuex.vuejs.org/). Она не большая, рекомендуется прочитать весь гайд от начала до конца.

Хорошая статья из отличного блога. Но стоит учитывать, что она была написана до появления `Vue.observable`.  
Markus Oberlenher | Should I Store This Data in Vuex – When Should I use Vuex?: [https://markus.oberlehner.net/blog/should-i-store-this-data-in-vuex/](https://markus.oberlehner.net/blog/should-i-store-this-data-in-vuex/)


### Нормализация хранилища

**Это не было рассмотрено на вебинаре.**

С хранилищем удобно работать, когда в нём хранятся простые структуры, объекты с примитивными свойствами и списки таких объектов. Но всё становится значительно хуже, когда хранятся большие иерархические структуры, особенно, если их требуется модифицировать. Приходится описывать кучу мутаций, либо сложные мутации с большим числом параметров, описывающих что именно требуется изменить.

Отличное решение - это нормализация хранилища. 

- Redux | Normalizing State Shape:  
  [https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape);  
  Эта статья из документации Redux, но она полностью применима к Vuex, так как обе библиотеки реализуют один паттерн Flux;
- Markus Oberlenher | Make your Vuex State Flat: State Normalization with Vuex:  
  [https://markus.oberlehner.net/blog/make-your-vuex-state-flat-state-normalization-with-vuex/](https://markus.oberlehner.net/blog/make-your-vuex-state-flat-state-normalization-with-vuex/);
- Библиотека normalizr, помогающая в нормализации структур:  
  [https://github.com/paularmstrong/normalizr](https://github.com/paularmstrong/normalizr).  

