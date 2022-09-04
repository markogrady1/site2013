/** @type {import('next').NextConfig} */

const configs = {
  'default': {
    API: 'http://localhost:3311',
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
