import { RestSerializer, Server } from 'miragejs';
import factories from './factories';
import fixtures from './fixtures';
import routes from './routes';
import models from './models';
import seeds from './seeds';

const config = (environment) => {
  const config = {
    environment,
    factories,
    models,
    routes,
    seeds,
    serializers: {
      entry: RestSerializer.extend({
        include: ['action'],
        embed: true,
      }),
    },
  };

  if (Object.keys(fixtures).length) {
    config.fixtures = fixtures;
  }

  return config;
};

export function makeServer({ environment = 'development' } = {}) {
  return new Server(config(environment));
}
