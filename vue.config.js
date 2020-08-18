module.exports = {
      devServer: {
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8090/',
                ws: true,
                changeOrigin: true,          
                pathRewrite: {
                    '^/api': ''
                }
            }   
         }
      }
}