const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/sheet-data',
    createProxyMiddleware({
      target: 'http://localhost:3001',  // Backend server URL
      changeOrigin: true,
    })
  );
};
