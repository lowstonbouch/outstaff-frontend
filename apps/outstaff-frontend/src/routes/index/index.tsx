import { useMemo } from 'react';
import { useArticles, useDeleteArticle } from '@outstaff-frontend/features-articles';
import { ArticleCard, Button } from '@outstaff-frontend/ui';
import { useNavigate } from '@tanstack/react-router';
import './index.scss';

export function HomePage() {
  const navigate = useNavigate();
  const { data: articles, isLoading, error, refetch } = useArticles();
  const deleteMutation = useDeleteArticle();

  const sorted = useMemo(() => {
    const list = Array.isArray(articles) ? articles : [];
    return [...list].sort((a, b) => a.title.localeCompare(b.title));
  }, [articles]);

  if (error) {
    return (
      <main className="page" role="alert">
        <p className="page__error">Failed to load: {String(error.message)}</p>
        <Button variant="secondary" onClick={() => refetch()}>
          Retry
        </Button>
      </main>
    );
  }

  return (
    <main className="page" role="main">
      <h1 className="page__title">Articles</h1>
      {isLoading ? (
        <p className="page__loading">Loading…</p>
      ) : (
        <ul className="articles">
          {sorted.map((article) => (
            <li key={article.id} className="articles__item">
              <ArticleCard
                article={article}
                onView={(id) => navigate({ to: '/articles/$id', params: { id } })}
                onDelete={(id) => deleteMutation.mutate(id)}
                isDeleting={deleteMutation.isPending}
              />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
