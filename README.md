**Read in other languages: [Українська](README.md), [Polska](README.pl.md).**

# React homework template

Цей проект було створено за допомогою
[Create React App](https://github.com/facebook/create-react-app). Для ознайомлення
та налаштування додаткових можливостей
[використай документацію](https://facebook.github.io/create-react-app/docs/getting-started).

## Підготовка нового проекту

1. Переконайтесь що на комп’ютері встановлена LTS-версія Node.js.
   [Завантаж та встанови](https://nodejs.org/en/) якщо це необхідно.
2. Склонуй цей репозиторій.
3. Зміни ім’я папки з `react-homework-template` на ім’я свого проекту.
4. Створи новий порожній репозиторій на GitHub.
5. Відкрий проект в VSCode, запусти термінал та св’яжи проект з GitHub-репозиторієм
   [згідно інструкції](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Встанови базові залежності проекту командою `npm install`.
7. Запусти режим розробки, виконавши команду `npm start`.
8. Перейдіть в браузері за адресою [http://localhost:3000](http://localhost:3000).
   Ця сторінка буде автоматично перезавантажуватися після збереження змін в файлах проекту.

## Деплой ------------- переклад в процесі

Для настройки деплоя проекта необходимо выполнить несколько дополнительных шагов
по настройке твоего репозитория. Зайди во вкладку `Settings` и в подсекции
`Actions` выбери выбери пункт `General`.

![GitHub actions settings](./assets/actions-config-step-1.png)

Пролистай страницу до последней секции, в которой выбери опции как на следующем
изображении и нажми `Save`. Без этих настроек у сборки будет недостаточно прав
для автоматизации процесса деплоя.

![GitHub actions settings](./assets/actions-config-step-2.png)

Продакшн версия проекта будет автоматически проходить линтинг, собираться и
деплоиться на GitHub Pages, в ветку `gh-pages`, каждый раз когда обновляется
ветка `main`. Например, после прямого пуша или принятого пул-реквеста. Для этого
необходимо в файле `package.json` отредактировать поле `homepage`, заменив
`your_username` и `your_repo_name` на свои, и отправить изменения на GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/"
```

Далее необходимо зайти в настройки GitHub-репозитория (`Settings` > `Pages`) и
выставить раздачу продакшн версии файлов из папки `/root` ветки `gh-pages`, если
это небыло сделано автоматически.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплоя

Статус деплоя крайнего коммита отображается иконкой возле его идентификатора.

- **Желтый цвет** - выполняется сборка и деплой проекта.
- **Зеленый цвет** - деплой завершился успешно.
- **Красный цвет** - во время линтинга, сборки или деплоя произошла ошибка.

Более детальную информацию о статусе можно посмотреть кликнув по иконке, и в
выпадающем окне перейти по ссылке `Details`.

![Deployment status](./assets/status.png)

### Живая страница

Через какое-то время, обычно пару минут, живую страницу можно будет посмотреть
по адресу указанному в отредактированном свойстве `homepage`. Например, вот
ссылка на живую версию для этого репозитория
[https://goitacademy.github.io/react-homework-template](https://goitacademy.github.io/react-homework-template).

Если открывается пустая страница, убедись что во вкладке `Console` нет ошибок
связанных с неправильными путями к CSS и JS файлам проекта (**404**). Скорее
всего у тебя неправильное значение свойства `homepage` в файле `package.json`.

### Маршрутизация

Если приложение использует библиотеку `react-router-dom` для маршрутизации,
необходимо дополнительно настроить компонент `<BrowserRouter>`, передав в пропе
`basename` точное название твоего репозитория. Слеши в начале и конце строки
обязательны.

```jsx
<BrowserRouter basename="/your_repo_name/">
  <App />
</BrowserRouter>
```

## Как это работает

![How it works](./assets/how-it-works.png)

1. После каждого пуша в ветку `main` GitHub-репозитория, запускается специальный
   скрипт (GitHub Action) из файла `.github/workflows/deploy.yml`.
2. Все файлы репозитория копируются на сервер, где проект инициализируется и
   проходит линтинг и сборку перед деплоем.
3. Если все шаги прошли успешно, собранная продакшн версия файлов проекта
   отправляется в ветку `gh-pages`. В противном случае, в логе выполнения
   скрипта будет указано в чем проблема.

Стек технологій

JavaScript TypeScript Golang Markdown HTML Pug Webpack Bael Sass/Less CSS PostCSS React Redux NodeJS Express NextJS NestJS GraphQL MongoDB Mongoose PostgreSQL TypeORM Sphinx/Manticore Redis Jest Git Linux Nginx Docker
