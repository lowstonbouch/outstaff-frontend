import { useNavigate, useLoaderData } from '@tanstack/react-router';
import type { Article } from '@outstaff-frontend/api-client';
import { formatDate } from '@outstaff-frontend/utils';
import { Button } from '@outstaff-frontend/ui';
import './article.scss';

export function ArticlePage() {
  const navigate = useNavigate();
  const article = useLoaderData({ strict: false }) as Article | undefined;

  if (!article) {
    return (
      <div className="page">
        <p className="page__loading">Loading…</p>
      </div>
    );
  }

  return (
    <main className="page" role="main">
      <Button variant="secondary" onClick={() => navigate({ to: '/' })} className="page__back">
        Back
      </Button>
      <article className="article">
        <h1 className="article__title">{article.title}</h1>
        <p className="article__date">Created: {formatDate(article.createdAt)}</p>
        <div className="article__content">{article.content}</div>
      </article>
    </main>
  );
}
