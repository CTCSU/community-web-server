/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1640244714709_6713';

  // add your middleware config here
  config.middleware = [];

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017',
      options: {},
    },
  };

  config.jwt = {
    secret: 'jwt_secret',
  };

  config.cors = {
    origin: 'http://localhost:8000',
    credentials: true,
    allowMethodes: 'GET, HEAD,PUT,POST,DELETE,PATCH',
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    security: {
      csrf: {
        enable: false,
      },
    },
    domainWhiteList: [ 'http://localhost:8000' ],
  };

  return {
    ...config,
    ...userConfig,
  };
};
