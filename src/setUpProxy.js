const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
    app.use(
        createProxyMiddleware('/api/games', {
            target: 'https://api.igdb.com/v4',
            changeOrigin: true,
        })
    )
}