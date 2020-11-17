import { ApolloServer } from 'apollo-server-express';
import http from 'http';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import sql from 'sql-template-strings';
const { PostgresPubSub } = require('graphql-postgres-subscriptions');

import { app } from './app';
import { origin, port, secret } from './env';
import schema from './schema';
import { pool } from './db';
import { MyContext } from './context';

const pubsub = new PostgresPubSub({
  host: 'host.docker.internal',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 35432,
  user: 'docker',
  password: 'docker',
  database: 'hci',
});
const server = new ApolloServer({
  schema,
  context: async (session: any) => {
    // Access the request object
    let req = session.connection
      ? session.connection.context.request
      : session.req;

    // It's subscription
    if (session.connection) {
      req.cookies = cookie.parse(req.headers.cookie || '');
    }

    let currentUser;
    if (req.cookies.authToken) {
      const username = jwt.verify(req.cookies.authToken, secret) as string;
      if (username) {
        const { rows } = await pool.query(
          sql`SELECT * FROM users WHERE username = ${username}`
        );
        currentUser = rows[0];
      }
    }

    let db;

    if (!session.connection) {
      db = await pool.connect();
    }

    return {
      currentUser,
      pubsub,
      db,
      res: session.res,
    };
  },
  subscriptions: {
    onConnect(params, ws, ctx) {
      // pass the request object to context
      return {
        request: ctx.request,
      };
    },
  },
  formatResponse: (res: any, { context }: any) => {
    context.db.release();

    return res;
  },
});

server.applyMiddleware({
  app,
  path: '/graphql',
  cors: { credentials: true, origin },
});

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
