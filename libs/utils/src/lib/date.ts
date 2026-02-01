export function formatDate(iso: string, locale = 'en-US'): string {
  const date = new Date(iso);
  return date.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
