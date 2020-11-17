import { PubSub } from 'apollo-server-express';
import { Response } from 'express';

import { User } from './db';
 
export type MyContext = {
  pubsub: PubSub;
  currentUser: User;
  res: Response;
};