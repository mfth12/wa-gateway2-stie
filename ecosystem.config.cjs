module.exports = {
  apps: [
    {
      name: 'gateway2-multi',
      script: 'npm run start',
      watch: false,
      ignore_watch: ['node_modules', 'wa_credentials', 'public', '.git'],
      autorestart: true,
    }
  ],
};
