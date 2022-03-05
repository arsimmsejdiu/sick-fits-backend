import 'dotenv/config'; // it is going to take all the variables that are in the .env file and put them in the process.env
import { config, createSchema } from '@keystone-next/keystone/schema';
import { User } from './schemas/User';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits';
const sessionConfig = {
  maxAge: 60 * 60 * 24 * 7, // 1 week
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // TODO: add data seeding here
  },
  lists: createSchema({
    // TODO: scchemaa items go here
    User,
  }),
  ui: {
    // TODO: change this for roles and permissions
    isAccessAllowed: () => true,
  },
  // TODO: add session values here
});

// vid 13 done start 14
