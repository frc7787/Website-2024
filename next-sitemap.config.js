/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://reybots.ca',
    generateRobotsTxt: true, // (optional)
    exclude: ["/pages/karim-is-awesome.js"]
}
