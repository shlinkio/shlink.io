export const twitter = {
  site: '@shlinkio',
  creator: '@acelayaa',
  card: 'summary_large_image',
};

export const openGraph = (title: string, description: string, siteName: string) => ({
  title,
  description,
  type: 'website',
  url: 'https://shlink.io',
  site_name: siteName,
  images: [
    {
      url: 'https://shlink.io/images/shlink-hero.png',
      height: 240,
      width: 625,
    },
    {
      url: 'https://shlink.io/images/shlink-hero-1500-500.jpg',
      height: 1500,
      width: 1500,
    },
  ],
});
