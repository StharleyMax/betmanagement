export const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'APIs Document',
    description: 'your description here',
    termOfService: '',
    contact: {
      name: 'Tran Son hoang',
      email: 'verificando@verificando.com',
      url: 'https://localhost.com.br',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://localhost.com.br',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000/api/v1',
      description: 'Local Server',
    },
  ],
};
