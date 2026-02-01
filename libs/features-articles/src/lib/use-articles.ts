import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getArticles, getArticle, deleteArticle } from '@outstaff-frontend/api-client';

export const articlesQueryKey = ['articles'] as const;

export function useArticles() {
  return useQuery({
    queryKey: articlesQueryKey,
    queryFn: () => getArticles({ responseStyle: 'data' }),
  });
}

export function useArticle(id: string | undefined) {
  return useQuery({
    queryKey: ['article', id],
    queryFn: () => getArticle({ path: { id: id! }, responseStyle: 'data' }),
    enabled: Boolean(id),
  });
}

export function useDeleteArticle() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteArticle({ path: { id } }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: articlesQueryKey });
    },
  });
}
