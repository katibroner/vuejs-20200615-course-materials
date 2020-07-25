# Vue 3

Основное:
- Переписан с Flow на TypeScript
- Переписан VirtualDOM, стал эффективнее
- Переписана система реактивности, теперь на Proxy API
- Global API -> Application API
- Новый v-model объединяет старый v-model и .sync модификатор
- В компонентах можно описывать события, которые он порождает
- **Composition API** - новый способ переиспользовать логику
- Новый  компонент - `Teleport`
- Новая возможность - `Fragments` (можно иметь несколько корневых элементов в компонентах)
- Удалены:
    - `keyCode` на `v-on`
    - `$on`, `$once`, `$off` на компонентах
    - Фильтры
    - `Inline templates`
- И многое другое!

Ссылки:
- Proxy и Reflect (на которых работает реактивность Vue 3): [https://learn.javascript.ru/proxy](https://learn.javascript.ru/proxy)
- Документация к Vue 3: [https://v3.vuejs.org/](https://v3.vuejs.org/)
- Migration Guide: [https://v3.vuejs.org/guide/migration/introduction.html](https://v3.vuejs.org/guide/migration/introduction.html)
- [Vue 3: mid 2020 status update](https://github.com/vuejs/rfcs/issues/183)
- [vue-router-next](https://github.com/vuejs/vue-router-next)
- ~~vue-cli-plugin-vue-next~~ Vue 3 теперь доступен в `@vue/cli` без всяких плагинов, начиная с версии 4.5!
- Интересный репозиторий с простыми хуками для Composition API: [https://vueuse.js.org/](https://vueuse.js.org/)

## SEO, SSR, NUXT

- [https://github.com/chrisvfritz/prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin)
- [https://prerender.io/](https://prerender.io/)
- [https://ssr.vuejs.org/](https://ssr.vuejs.org/)
- [https://nuxtjs.org/](https://nuxtjs.org/)

## Куда развиваться дальше

- Основные ресурсы по Vue:
    - Awesome Vue - большая подборка всего-всего: [https://github.com/vuejs/awesome-vue](https://github.com/vuejs/awesome-vue).  
      (но помните, не всегда нужна специальная библиотека для vue при решении задачи, не связанной с vue)
    - Request For Communication -- обсуждения изменений Vue: [https://github.com/vuejs/rfcs](https://github.com/vuejs/rfcs)
- Отличные блоги и статьи по Vue.js:
    - [https://vuejsdevelopers.com/blog](https://vuejsdevelopers.com/blog)
    - Маленькие интересные статьи регулярно на почту: [https://vuedose.tips/](https://vuedose.tips/)
    - Блог Markus Oberlehner с очень интересными и иногда очень необычными статьями: [https://markus.oberlehner.net/](https://markus.oberlehner.net/)
    - Статьи в основном начального уровня, но можно найти полезное: [https://vueschool.io/articles/](https://vueschool.io/articles/)
- Библиотеки и фреймворки, на которые стоит взглянуть:
    - [Quasar](https://quasar.dev/) - фреймворк и библиотека компонентов для разработки веб + мобильного + pwa + десктопного (electron) приложения из одной кодовой базы.
    - [NativeScript-Vue](https://nativescript-vue.org/) - разработка нативных приложений (не WebView) для мобильных устройств на Vue
    - [vue-cli-plugin-electron-builder](https://nklayman.github.io/vue-cli-plugin-electron-builder/) - отличный вариант старта на Vue + Electron для разработки настольных приложений
    - [electron-vue](https://simulatedgreg.gitbooks.io/electron-vue/content/en/) - старый шаблон для разработки приложений на Vue + Electron для старого vue-cli (v2), но с широкими возможностями конфигурации
    - UI фреймворки с компонентами для Vue.js:
        - [Vuetify](https://vuetifyjs.com/) - Material Design, самый мощный UI фреймворк для Vue
        - [Ant-Design-Vue](https://antdv.com/) - Ant-Design для Vue.js
        - [Bootstrap-Vue](https://bootstrap-vue.org/) - Отличная адаптация Bootstrap под Vue
        - [Prime Vue](https://primefaces.org/primevue/) - Ещё один большой UI фреймворк
    - По мелочи:
        - [VeeValidate](https://logaretm.github.io/vee-validate/) - Лучшая (по моему мнению) библиотека валидации для Vue.js
        - [vue-i18n](https://github.com/kazupon/vue-i18n) - Отличная библиотека интернационализации для Vue.js
        - [vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller) - Виртуальный скроллинг для Vue.js от одного из Core Контрибьюторов (имитирует скроллинг, рендеря лишь отображаемую часть. Отличное решение для больших данных)
