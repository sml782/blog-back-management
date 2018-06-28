'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1504252356337_1029';

  // view

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'mtime',
    host: '47.104.173.173',
    port: '3306',
    username: 'root',
    password: '20170228',
  };

  config.mysql = {
    client: {
      host: '47.104.173.173',
      port: '3306',
      user: 'root',
      password: '20170228',
      database: 'mtime',
    },
    app: true,
    agent: false,
  };

  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true,
  };

  config.security = {
    // csrf: {
    //   ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    // },
    methodnoallow: {
      enable: false
    }, 
    domainWhiteList: [ 'http://localhost:6001', 'http://127.0.0.1:6001' ]
  };

  return config;
};
