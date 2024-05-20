import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
	//output: 'export',
	experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),  // 必要に応じてパスを調整
  },
	webpack: function (config, { isServer }) {
		if (!isServer) {
      // クライアントビルド用の設定
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
      };
    }
		config.module.rules.push({
			test: /\.md$/,
			use: "raw-loader",
		})
		return config
	},
};

export default nextConfig;
