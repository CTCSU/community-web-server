'use strict';

module.exports = options => {
  return async function jwt(ctx, next) {
    const token = ctx.request.header.authorization;

    if (token) {
      const decode = ctx.app.jwt.verify(token, options.secret);

      if (decode.exp > parseInt(new Date().getTime() / 1000)) {
        return await next();
      }
    }

    ctx.status = 401;
    ctx.body = {};
    return;

  };
};
