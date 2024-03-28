/*
 * Mirage JS guide on Seeds: https://miragejs.com/docs/data-layer/factories#in-development
 */

const usersSeeder = (server) => {
  /*
   * This will create in the in memory DB 10 objects
   * of the Factory `user`. Moreover it creates a
   * random number of messages and assign to each
   * and every user, making use of relationships.
   */
  server.createList('user', 10);
  let goodAction = server.create('action', {
    id: '1',
    type: 'good',
    title: 'Saí pra correr',
    points: 50,
    description: '',
  });
  let badAction = server.create('action', {
    id: '2',
    type: 'bad',
    title: 'Dormi tarde',
    points: -25,
    description: '',
  });
  let diaryAction = server.create('action', {
    id: '3',
    type: 'diary',
    points: 0,
  });

  server.create('entry', {
    id: '1',
    date: '2024-03-28T22:14:23.949Z',
    action: goodAction,
  });
  server.create('entry', {
    id: '2',
    date: '2024-03-28T22:14:23.949Z',
    action: badAction,
  });
  server.create('entry', {
    id: '3',
    date: '2024-03-28T22:14:23.949Z',
    action: diaryAction,
    content: 'Vi um amigo de infância hoje',
  });
};

export default function seeds(server) {
  server.loadFixtures();
  usersSeeder(server);
}
