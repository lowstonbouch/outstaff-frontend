import { http, HttpResponse } from 'msw';
import type { Article } from '@outstaff-frontend/api-client';

const articles: Article[] = [
  {
    id: '1',
    title: 'Telegram Bot API: с чего начать',
    content:
      'Telegram Bot API позволяет создавать ботов, которые общаются с пользователями через сообщения. Получите токен у @BotFather, изучите методы sendMessage, getUpdates и webhook — этого достаточно для первого бота. Документация на core.telegram.org/bots/api.',
    createdAt: '2024-01-15T10:00:00.000Z',
  },
  {
    id: '2',
    title: 'Каналы и группы в Telegram',
    content:
      'Каналы — односторонняя рассылка без обсуждений, группы — чаты с участниками. В Bot API каналы и супергруппы доступны через chat_id, можно публиковать посты, настраивать права, получать уведомления о новых участниках и сообщениях через getUpdates или webhook.',
    createdAt: '2024-02-20T14:30:00.000Z',
  },
  {
    id: '3',
    title: 'Telegram Mini Apps (Web App)',
    content:
      'Mini Apps — веб-приложения, открываемые внутри Telegram. Пользователь нажимает кнопку в боте или меню — открывается ваш сайт в iframe с доступом к themeParams, initData (подпись пользователя) и Telegram.WebApp API. Удобно для форм, каталогов, игр без выхода из мессенджера.',
    createdAt: '2024-03-10T09:15:00.000Z',
  },
  {
    id: '4',
    title: 'Боты на Python: python-telegram-bot',
    content:
      'Библиотека python-telegram-bot даёт удобный слой над Bot API: хендлеры по командам и типам сообщений, фильтры, конверсации, JobQueue для отложенных задач. Поддерживаются и long polling, и webhook. Идеально для быстрого прототипа и продакшн-бота на Python.',
    createdAt: '2024-04-05T11:00:00.000Z',
  },
  {
    id: '5',
    title: 'Telegram Login Widget',
    content:
      'Виджет «Войти через Telegram» встраивается на сайт одной кнопкой. После нажатия пользователь подтверждает вход в Telegram — на ваш callback URL приходят hash и данные пользователя (id, first_name, username и др.). Проверка подлинности по секрету от BotFather защищает от подделки запроса.',
    createdAt: '2024-05-12T16:45:00.000Z',
  },
  {
    id: '6',
    title: 'Payments API в Telegram',
    content:
      'Payments API позволяет принимать оплату прямо в чате с ботом. Подключаются провайдеры (Stripe, ЮKassa и др.), бот отправляет инвойс через sendInvoice, пользователь платит картой в Telegram — вы получаете pre_checkout_query и успешный successful_payment. Подходит для продажи цифровых товаров и подписок.',
    createdAt: '2024-06-01T08:00:00.000Z',
  },
  {
    id: '7',
    title: 'Telegram для бизнеса: Business API',
    content:
      'Telegram Business API даёт компаниям единый inbox для чатов с клиентами, интеграцию с CRM, автоматические ответы и ботов. Чат-боты могут передавать диалог оператору, сохраняется история. Полезно для поддержки, продаж и маркетинга внутри экосистемы Telegram.',
    createdAt: '2024-06-18T13:20:00.000Z',
  },
];

export const handlers = [
  http.get('/api/articles', () => {
    const list = articles.map(({ id, title, content }) => ({ id, title, content }));
    return HttpResponse.json(list);
  }),

  http.get('/api/articles/:id', ({ params }) => {
    const article = articles.find((a) => a.id === params.id);
    if (!article) return new HttpResponse(null, { status: 404 });
    return HttpResponse.json(article);
  }),

  http.delete('/api/articles/:id', ({ params }) => {
    const index = articles.findIndex((a) => a.id === params.id);
    if (index === -1) return new HttpResponse(null, { status: 404 });
    articles.splice(index, 1);
    return new HttpResponse(null, { status: 204 });
  }),
];
