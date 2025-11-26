export default function sitemap() {
  return [
    {
      url: 'https://novurba.fr',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://novurba.fr/notre-expertise',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://novurba.fr/nos-realisations',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://novurba.fr/entreprise',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://novurba.fr/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },

  ]
}
