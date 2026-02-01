import { memo } from 'react';
import type { ArticleListItem } from '@outstaff-frontend/api-client';
import { truncate } from '@outstaff-frontend/utils';
import { Button } from '../button/button';
import './article-card.scss';

export interface ArticleCardProps {
  article: ArticleListItem;
  onView: (id: string) => void;
  onDelete: (id: string) => void;
  isDeleting?: boolean;
}

const DESCRIPTION_LENGTH = 100;

function ArticleCardComponent({ article, onView, onDelete, isDeleting }: ArticleCardProps) {
  const handleView = () => onView(article.id);
  const handleDelete = () => onDelete(article.id);

  return (
    <article className="card">
      <h2 className="card__title">{article.title}</h2>
      <p className="card__description">{truncate(article.content, DESCRIPTION_LENGTH)}</p>
      <div className="card__actions">
        <Button variant="primary" onClick={handleView} disabled={isDeleting}>
          View
        </Button>
        <Button variant="danger" onClick={handleDelete} disabled={isDeleting}>
          {isDeleting ? 'Deleting…' : 'Delete'}
        </Button>
      </div>
    </article>
  );
}

export const ArticleCard = memo(ArticleCardComponent);
