module.exports = {
  apps: [
    {
      name: 'blessing-website',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      instances: 'max',
      exec_mode: 'cluster',
      watch: false,
      env: {
        PORT: 3000,
        NODE_ENV: 'production',
      },
    },
  ],
};
