import { randomNumber } from './utils';

/*
 * Mirage JS guide on Factories: https://miragejs.com/docs/data-layer/factories
 */
// Named Export
import { Factory } from 'miragejs';

/*
 * Faker Github repository: https://github.com/Marak/Faker.js#readme
 */
import { fakerPT_BR as faker } from '@faker-js/faker';

const user = {
  user: Factory.extend({
    name() {
      return faker.person.fullName();
    },
    mobile() {
      return faker.phone.number();
    },
    afterCreate(user, server) {
      const messages = server.createList('message', randomNumber(10), { user });

      user.update({ messages });
    },
  }),
};

export default user;
