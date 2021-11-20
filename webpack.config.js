const webpack = require('webpack');
module.exports = {
  externals: {
    'pg-hstore': '{}',
    '@nestjs/microservices/microservices-module': '{}',
    '@nestjs/websockets/socket-module': '{}',
    // alternative, use 'syntax-error'
  },
  // optimization: {
  //   moduleIds: 'named',
  // },
};
