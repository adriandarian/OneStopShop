import { PubSub } from 'apollo-server-express';
import { Response } from 'express';
import { PoolClient } from 'pg';

import { User } from './db';
 
export type MyContext = {
  pubsub: PubSub;
  currentUser: User;
  res: Response;
  db: PoolClient;
};