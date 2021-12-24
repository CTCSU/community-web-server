'use strict';

const crypto = require('crypto');
const Service = require('egg').Service;

class UserService extends Service {
  async register(username, password) {
    const user = new this.ctx.model.User();

    const pwd = crypto.createHash('md5').update(password).digest('hex');

    user.username = username;
    user.password = pwd;

    return user.save();
  }

  async login(username, password) {
    const { ctx } = this;
    const pwd = crypto.createHash('md5').update(password).digest('hex');
    const user = await ctx.model.User.findOne({ username, password: pwd });
    return user;
  }

}

module.exports = UserService;