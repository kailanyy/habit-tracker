/*
 * Mirage JS guide on Routes: https://miragejs.com/docs/route-handlers/functions
 */

export default function routes() {
  this.namespace = 'api';

  /*
   * A resource comprises all operations for a CRUD
   * operation. .get(), .post(), .put() and delete().
   * Mirage JS guide on Resource: https://miragejs.com/docs/route-handlers/shorthands#resource-helper
   */
  this.resource('users');
  this.resource('products');

  this.get('actions', (schema) => {
    return schema.actions.all();
  });
  this.get('entries', (schema) => {
    return schema.entries.all();
  });
  this.post('actions', (schema, request) => {
    let attrs = JSON.parse(request.requestBody);
    return schema.actions.create(attrs);
  });
  this.put('actions', (schema, request) => {
    let attrs = JSON.parse(request.requestBody);
    return schema.actions.create(attrs);
  });

  /*
   * From your component use fetch('api/messages?userId=<a user id>')
   * replacing <a user id> with a real ID
   */
  this.get('messages', (schema, request) => {
    const {
      queryParams: { userId },
    } = request;

    return schema.messages.where({ userId });
  });
}
