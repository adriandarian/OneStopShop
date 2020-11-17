import { PubSub } from 'apollo-server-express';
import { Response } from 'express';
import { PoolClient } from 'pg';

import { User } from './db';
import { UnsplashApi } from './schema/unsplash.api';
 
export type MyContext = {
  pubsub: PubSub;
  currentUser: User;
  res: Response;
  db: PoolClient;
  dataSources: {
    unsplashApi: UnsplashApi;
  };
};