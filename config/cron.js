const lodash = require('lodash');
module.exports.cron = {
  generatePosts: {
    schedule: '*/5 * * * * *',
    onTick: async function() {
      const postsToCreate = lodash.random(1, 5);
      await this.helpers.generatePosts(postsToCreate);
    },
    start: true
  }
};
