# Структура проекта

Проект собран с помощью webpack 4. Сборка делалась с использованием bootstrap 4 и разбита на production и development версии.

Папка src отвечает за development версию:

1. По пути src > html > views находятся страницы сайта, которые состоят из стандартной разметки,
   а также импортов отдельных ее частей (модальные окна, попапы, хедер, футер и т.д.);
2. Пусть src > html > includes содержит вышеуказанные модальные окна, попапы и прочее. Для импортов в html файлы используется шаблонизатор lodash.
   Пример данных импортов: <%= \_.template(require('./../includes/header.html').default)(data) %>;
3. Путь src > js содержит JS файлы, главным из которых является index.js - данный файл это входная точка, в которую импортируется весь js и сторонние библиотеки;
4. Путь src > components содержит файл common.js, библиотеки и прочий js отдельных страниц;
5. Путь src > scss отвечает за стили. Главным файлом является style.scss, в него импортируются файлы из папок components (неполоноценные страницы) и pages (полноценные страницы).
6. Путь src > images содержит все картинки проекта.
7. Путь fonts предназначен для небезопасных шрифтов, которые подключаются через @font-face.

Папка web отвечает за production версию:

1. В корне папки web содержится чистый html, перекомпилированный с помощью webpack. Все lodash импорты выглядят как обычный html на странице.
2. web > css содержит файл bundle.css - единственный общий файл стилей всего проекта.
3. web > js содержит файл bundle.js - единственный общий файл js всего проекта.
