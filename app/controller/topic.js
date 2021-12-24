'use strict';

const Controller = require('egg').Controller;

class TopicController extends Controller {
  async create() {
    const { ctx } = this;
    const { body } = ctx.request;
    const user = await ctx.servcie.user.getCurrentUser();

    await ctx.service.topic.create({ ...body, author_name: user.username });
    ctx.body = { status: 'ok' };
  }

  async getList() {
    const { ctx } = this;
    const { query } = ctx.request;
    const options = {
      sort: '-top -last_reply_at',
    };
    ctx.body = await ctx.service.topic.query(query, options);
  }
}

module.exports = TopicController;
