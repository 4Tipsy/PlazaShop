# Plaza-shop


site link! https://4tipsy.github.io/PlazaShop/prod/public/index.html


`dev/` - папка из которой непосредственно ведется разработка


`prod/` - папка для продакшена(именно она должна идти на хостинг), в ней
находиться готовый продукт

--------------------------------------------------------------------------------

Посмотреть демо сайта можно по *ссылке* выше, для того чтобы развернуть 
проект у себя, нужно:
1) скачать файлы с репозитория
2) заменить «development.js» на «production.min.js» в 
  `/dev/public/htmlParts/footer_and_add-stuff.html` (это касательно React.js)
3) запустить сборку через `gulp build`
4) и если не будут работать ссылки, нужно вручную изменить переменную 
`currentUrlBase` в `/dev/public/js/links.js` и заново запустить сборку


# примечание

Т.к. это был мой самый первый проект качество кода в некоторых файлах (*index.html*, *sliders.js*, *render_mainPage.jsx* и возможно еще некоторые *.scss* файлы) страдает!
В остальном, все товары кликабельны, поиск и каталог работают, корзина тоже,
единственное исключение - *страничка сравнения товаров* которой просто нет

Вся информация о товарах хранится в `public/js/JSONdata.js`

