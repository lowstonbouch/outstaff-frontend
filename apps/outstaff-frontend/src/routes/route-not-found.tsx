import { useNavigate } from '@tanstack/react-router';
import { Button } from '@outstaff-frontend/ui';
import './index/index.scss';

export function RootNotFound() {
  const navigate = useNavigate();
  return (
    <div className="page" role="alert">
      <h1 className="page__title">Page not found</h1>
      <p className="page__error">The requested address does not exist.</p>
      <Button variant="secondary" onClick={() => navigate({ to: '/' })}>
        Home
      </Button>
    </div>
  );
}

export function ArticleNotFound() {
  const navigate = useNavigate();
  return (
    <div className="page" role="alert">
      <h1 className="page__title">Article not found</h1>
      <p className="page__error">This article does not exist or has been removed.</p>
      <Button variant="secondary" onClick={() => navigate({ to: '/' })}>
        Back to articles
      </Button>
    </div>
  );
}
