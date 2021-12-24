'use strict';

const Service = require('egg').Service;

class TopicService extends Service {
  async create(body) {
    const topic = new this.ctx.model.Topic();

    topic.title = body.title;
    topic.content = body.content;
    topic.author_name = body.author_name;

    return await topic.save();
  }


  async query(query = {}, pageSelector = {}) {
    const { ctx } = this;
    const querySelector = { };
    if (query.title) {
      querySelector.title = { $regex: query.title };
    }

    const total = await ctx.model.Topic.find(querySelector).count();
    const data_list = await ctx.model.TOpic.find(querySelector, '', pageSelector);

    return { total, data_list };

  }
}

module.exports = TopicService;
