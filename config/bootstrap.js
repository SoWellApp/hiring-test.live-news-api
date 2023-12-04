/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */
const lodash = require('lodash');
const { faker } = require('@faker-js/faker');
module.exports.bootstrap = async function() {
  if (await User.count() > 0) {
    return;
  }

  const users = lodash.range(10).map(() => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    return {
      pseudo: faker.internet.userName({ firstName, lastName }),
      avatar: faker.internet.avatar(),
      email: faker.internet.email({ firstName, lastName })
    };
  });
  await User.createEach(users);
};
