module.exports = {
  models: {
    migrate: 'safe',
  },
  security: {
    cors: {
      allRoutes: true,
      allowOrigins: [
        'http://localhost:1337',
      ],
      allowCredentials: true,
      allowRequestHeaders: 'content-type, authorization, client-id, api-key, origin',
      allowRequestMethods: 'GET, POST, PUT, DELETE'
    }
  }
};
