module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
		title: 'My Gatsby Site',
	},
	plugins: [
		{
			resolve: 'gatsby-source-contentful',
			options: {
				accessToken: 'ibRB6_oHn7zVvY6lLHrrrGUpuHssPFxnnX07Gf00BoU',
				spaceId: '58jcg8a4dl7g',
			},
		},
		'gatsby-plugin-styled-components',
		'gatsby-plugin-gatsby-cloud',
		'gatsby-plugin-image',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'G-111111',
			},
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-mdx',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/assets/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},
			__key: 'pages',
		},
	],
};
