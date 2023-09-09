const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
    app.use(
        createProxyMiddleware('v4/games', {
            target: 'https://api.igdb.com/v4/games',
            changeOrigin: true,
        })
    )
}