/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://moturifarmstay.in",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  additionalPaths: async () => [
    { loc: "/", changefreq: "daily", priority: 1.0 },
    { loc: "/hotel-in-vemulawada", changefreq: "weekly", priority: 0.9 },
    { loc: "/rooms-in-vemulawada", changefreq: "weekly", priority: 0.9 },
    { loc: "/farmstay-in-vemulawada", changefreq: "weekly", priority: 0.9 },
    { loc: "/lodges-in-vemulawada", changefreq: "weekly", priority: 0.9 },
    { loc: "/stay-near-raja-rajeshwara-temple", changefreq: "weekly", priority: 0.9 },
    { loc: "/booking", changefreq: "weekly", priority: 0.8 },
    { loc: "/gallery", changefreq: "monthly", priority: 0.7 },
    { loc: "/attractions", changefreq: "monthly", priority: 0.7 },
    { loc: "/contact", changefreq: "monthly", priority: 0.7 },
  ],
};
