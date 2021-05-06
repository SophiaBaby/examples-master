'use strict';

module.exports = app => {
  const { router, controller } = app;
  app.router.get('/', 'home.render');
  app.router.get('/user', 'home.render');
  // 鉴权成功后的回调页面
  // router.post('/authCallback', 'test.info');
  router.post('/authCallback', controller.test.login);

  app.passport.mount('weibo');
  app.passport.mount('github');
  app.passport.mount('bitbucket');
  app.passport.mount('twitter');
  app.passport.mount('yuque');

  app.router.get('/logout', 'user.logout');
};
