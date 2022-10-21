import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-micro';
import { buildSchema } from 'type-graphql';
import type { PageConfig } from 'next';
import Cors from 'micro-cors';
import createContext from '../../src/graphql/context';
import { ProjectResolver } from '../../src/graphql/resolvers/projectResolvers';
import { TaskResolver } from '../../src/graphql/resolvers/taskResolvers';

const cors = Cors();

const apolloServer = new ApolloServer({
  schema: await buildSchema({
    resolvers: [ProjectResolver, TaskResolver],
  }),
  context: createContext,
  csrfPrevention: true,
});

const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
});

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};
