import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tezpajoh.ir';
  
  // Static routes
  const routes = [
    '',
    '/about',
    '/contact',
    '/masters-thesis',
    '/phd-thesis',
    '/services',
    '/services/proposal',
    '/services/thesis-chapters',
    '/services/topic-selection',
    '/services/training-consulting',
    '/services/management-thesis',
    '/blog',
    '/blog/modern-thesis-approaches-2026',
    '/blog/phd-defense-criteria',
    '/blog/thesis-checklist-1405'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/blog' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/services') || route.startsWith('/masters-thesis') || route.startsWith('/phd-thesis') ? 0.8 : 0.6,
  }));
}
