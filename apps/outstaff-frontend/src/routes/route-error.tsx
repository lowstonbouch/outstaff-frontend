import { useNavigate } from '@tanstack/react-router';
import { Button } from '@outstaff-frontend/ui';
import './index/index.scss';

interface RouteErrorProps {
  error: Error;
}

export function RouteError({ error }: RouteErrorProps) {
  const navigate = useNavigate();
  return (
    <div className="page" role="alert">
      <h1 className="page__title">Something went wrong</h1>
      <p className="page__error">{error.message || 'Unknown error'}</p>
      <Button variant="secondary" onClick={() => navigate({ to: '/' })}>
        Home
      </Button>
    </div>
  );
}
