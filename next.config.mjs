/** @type {import('next').NextConfig} */
const nextConfig = {
	//output: 'export',
	experimental: {
    workerThreads: false,
    cpus: 1
	},
	turbopack: {},
	webpack: function (config) {
		config.module.rules.push({
			test: /\.md$/,
			use: "raw-loader",
		})
		return config
	},
	images: {
    disableStaticImages: true,
  },
};

export default nextConfig;
