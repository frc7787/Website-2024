/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://reybots.ca',
    generateRobotsTxt: true, // (optional)
    // ...other options
}
