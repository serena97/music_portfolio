// webpack.config.js
module.exports = {
    module: {
      rules: [
        {
          test: /\.(fs|vs)$/i,
          use: 'raw-loader',
        },
      ],
    },
  };