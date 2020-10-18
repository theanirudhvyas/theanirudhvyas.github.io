/*jshint esversion: 6 */ 
require(`dotenv`).config({
    path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
    siteMetadata: {
        siteTitle: `Home`,
        siteTitleAlt: `Anirudh's home on the internet`,
        siteHeadline: `Anirudh Vyas - thoughts and musings of a maker and developer`,
        siteUrl: `https://www.vyas.xyz`,
        siteDescription: `Anirudh Vyas - A blog on tech, food, life and my experiments and experiences in life. A blog on software, computers, networking and learning.`,
        siteLanguage: `en`,
        siteImage: `/banner.jpg`,
        author: `@anirudh2403`,
    },
    plugins: [
        {
            resolve: `@lekoarts/gatsby-theme-minimal-blog`,
            // See the theme's README for all available options
            options: {
                navigation: [
                    {
                        title: `About`,
                        slug: `/about`,
                    },
                ],
                externalLinks: [
                    {
                        name: `Twitter`,
                        url: `https://twitter.com/Anirudh2403`,
                    },
                    {
                        name: `Github`,
                        url: `https://www.github.com/theanirudhvyas`,
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-174192703-1',
            },
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Anirudh's Blog`,
                short_name: `Anirudh`,
                description: `Anirudh Vyas, software developer. Writes about software and life.`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#6B46C1`,
                display: `standalone`,
                icons: [
                    {
                        src: `/android-chrome-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                    {
                        src: `/android-chrome-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                ],
            },
        },
        `gatsby-plugin-offline`,
        shouldAnalyseBundle && {
            resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
            options: {
                analyzerMode: `static`,
                reportFilename: `_bundle.html`,
                openAnalyzer: false,
            },
        },
    ].filter(Boolean),
};
