# Центр «Ступени развития»

Статический сайт-визитка психологического центра в Гродно. Страницы — обычные HTML-файлы, свой сервер и база не нужны. Хостинг: GitHub Pages.

Живой адрес: https://iiogopoiiihuk.github.io/psychological-center-site/

На сайте остаются услуги, цены, контакты, телефоны, Telegram, Viber, почта и договор оферты. Запись идёт звонком или сообщением. Админка, CRM, форма заявки и своя аналитика сюда не входят: им нужен постоянно работающий сервер.

## Поиск

Главная и оферта указаны в `sitemap.xml`. В разметке страницы есть название, описание, канонический адрес и карточка организации с местом приёма: г. Гродно, ул. Советская, 14.

Юридический адрес (ул. Вишневецкая, 16-48) подписан отдельно и в карточку для карт не попадает.

Чтобы сайт появился в поиске:

1. Открыть [Google Search Console](https://search.google.com/search-console) и добавить адрес сайта. В разделе «Файлы Sitemap» указать `sitemap.xml`.
2. То же сделать в [Яндекс Вебмастере](https://webmaster.yandex.ru/).
3. Создать карточку организации в Google Business Profile и Яндекс Бизнесе с тем же названием, телефонами и адресом приёма на Советской, 14.
4. Поставить ссылку на сайт в шапку Instagram `@centr_stupeni_razvitiya`.

По имени центра сайт обычно находится после индексации. Запросы вроде «детский психолог Гродно» сильнее зависят от карточек в картах, чем от одной страницы.

## Домен stupeni-razvitiya.by

Сейчас канонический адрес — адрес GitHub Pages, потому что домен `.by` ещё не открывается. Когда домен будет куплен:

1. В настройках репозитория, Pages, добавить пользовательский домен `stupeni-razvitiya.by`.
2. У регистратора домена создать запись CNAME для `www` на `iiogopoiiihuk.github.io` и записи A для корня на адреса GitHub Pages из [документации](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
3. Заменить `https://iiogopoiiihuk.github.io/psychological-center-site` на `https://stupeni-razvitiya.by` в `index.html`, `offer/index.html`, `sitemap.xml` и `robots.txt`.
