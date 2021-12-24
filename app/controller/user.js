'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async register() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    await ctx.service.user.register(username, password);
    ctx.body = { status: 'ok' };
  }

  async login() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    const user = await ctx.service.user.login(username, password);
    if (user) {
      const token = await ctx.app.jwt.sign(
        {
          username: user.username,
          id: user._id,
        },
        this.config.jwt.secret,
        {
          expiresIn: 3600,
        }
      );
      ctx.body = {
        status: 'ok',
        token,
      };
    } else {
      ctx.body = {
        status: 'error',
      };
    }

  }

}

module.exports = UserController;
