import { createServer } from 'miragejs';

export function makeServer({ environment = 'test' }) {
  return createServer({
    environment,

    routes() {
      this.namespace = 'api';

      this.post('/login', () => {
        return {
          isAuthenticated: true,
        }
      });
    },
  });
}
