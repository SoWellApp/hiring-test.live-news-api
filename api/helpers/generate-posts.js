const lodash = require('lodash');
const { faker } = require('@faker-js/faker');

const MAX_RECORDS = 10000;

module.exports = {
  friendlyName: 'Generate posts',
  description: 'Generate random posts',
  inputs: {
    count: {
      type: 'number',
      default: 5
    }
  },
  exits: {
    success: {
      description: 'All done.',
    },

  },
  fn: async function ({ count }, exits) {
    const currentCount = await Post.count();
    if (currentCount > MAX_RECORDS) {
      return exits.success();
    }
    const users = await User.find({});
    const posts = lodash.range(count).map(() => {
      const user = lodash.sample(users);
      return {
        title: faker.company.catchPhrase(),
        body: faker.lorem.paragraphs({ min: 2, max: 4 }),
        author: user.id
      };
    });
    await Post.createEach(posts);
    return exits.success();
  }
};
