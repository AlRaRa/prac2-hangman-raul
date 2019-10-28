module.exports = {
  typescript: {
    test: /.tsx?$/i,
    use: 'ts-loader',
    exclude: /node_modules/
  },
  css: {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader']
  },
  img: {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'url-loader', //file-loader tambien ahi que tenerlo
        options: {
          outputPath: 'assets/img',
          limit: 25,
          name: '[name].[ext]'
        }
      }
    ]
  }
};
