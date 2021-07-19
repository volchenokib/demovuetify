module.exports = {
	pluginOptions: {
		s3Deploy: {
			awsProfile: 'default',
			endpoint:
				'Override the default AWS endpoint with another e.g. DigitalOcean.',
			region: 'us-east-1',
			bucket: 'demovuetify',
			createBucket: true,
			staticHosting: true,
			staticIndexPage: 'index.html',
			staticErrorPage: 'index.html',
			assetPath: 'dist',
			assetMatch: '**',
			deployPath: '/',
			acl: 'public-read',
			pwa: false,
			pwaFiles: 'Comma-separated list of files to treat as PWA files',
			enableCloudfront: false,
			uploadConcurrency: 5,
			gzip: 'true',
			gzipFilePattern:
				'**/*.{js,css,json,ico,map,xml,txt,svg,eot,ttf,woff,woff2}',
			registry: undefined,
			overrideEndpoint: false,
			pluginVersion: '4.0.0-rc3'
		}
	}
};
