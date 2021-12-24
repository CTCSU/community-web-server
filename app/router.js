'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const jwt = app.middleware.jwt(app.config.jwt);

  router.get('/', controller.home.index);
  router.post('/register', controller.user.register);
  router.post('/login', controller.user.login);

  router.post('/topics', jwt, controller.topic.create);
  router.post('/topics', jwt, controller.topic.getList);
};
