# Outstaff Frontend

Приложение для просмотра и управления статьями: список карточек на главной и страница статьи с полным текстом.

## Стек

React 19, TypeScript, TanStack Query, TanStack Router, SCSS, Nx, MSW (мок API в dev), Hey API (клиент из OpenAPI).

## Запуск

```bash
pnpm install
pnpm start
```

Приложение: http://localhost:4200/

Если появляется «Waiting for ... serve in another nx process» — выполните `npx nx reset`, затем снова `pnpm start`.

## Команды

| Команда | Описание |
|--------|----------|
| `pnpm start` | Режим разработки (с MSW) |
| `pnpm build` | Сборка для production |
| `pnpm run generate:api` | Регенерация API-клиента после изменения `libs/api-client/openapi.yaml` |

## Структура

| Путь | Назначение |
|------|------------|
| `apps/outstaff-frontend` | SPA: страницы, роуты |
| `libs/api-client` | Типы и клиент API (из OpenAPI) |
| `libs/ui` | Компоненты: Button, ArticleCard, тема SCSS |
| `libs/features-articles` | Хуки: useArticles, useArticle, useDeleteArticle |
| `libs/utils` | Утилиты: truncate, formatDate |
| `libs/msw` | MSW handlers и моковые данные |

## Роуты

- `/` — список статей (карточки, сортировка по заголовку)
- `/articles/:id` — страница статьи (заголовок, текст, дата)

## API (мок)

- `GET /api/articles` — список статей
- `GET /api/articles/:id` — одна статья
- `DELETE /api/articles/:id` — удаление

MSW активен только в development. Worker: `apps/outstaff-frontend/public/mockServiceWorker.js`. После обновления MSW: `npx msw init apps/outstaff-frontend/public --save`.
