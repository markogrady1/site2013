/** @type {import('next').NextConfig} */

const configs = {
  'default': {
    API: 'http://5862-2a02-c7f-f672-d900-5c8-af7d-6b7c-fe29.ngrok.io',
  },
  'production': {
    API: 'https://fake-api.com',
  }
};

const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  publicRuntimeConfig: getConfig(process.env.NODE_ENV),
  env: getConfig(process.env.NODE_ENV)
}

function getConfig(nodeEnv) {
  const defaultConfigs = configs['default'];
  const nodeEnvConfig = configs[nodeEnv];
  return {
    ...defaultConfigs,
    ...nodeEnvConfig,
  }
}

module.exports = nextConfig
