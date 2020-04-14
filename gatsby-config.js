module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    `gatsby-plugin-mdx`,
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Software Tech Blog`,
    author: `Saia Fonua`,
    description: `My site description...`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/saiafonua`,
      },
      {
        name: `github`,
        url: `https://github.com/sfonua10`,
      },
    ],
  },
}
