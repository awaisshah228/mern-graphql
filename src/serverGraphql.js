import {ApolloServer} from 'apollo-server-express';
import {ApolloServerPluginDrainHttpServer} from 'apollo-server-core';
// import * as fs from 'fs';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
// import resolverss from './resolvers/index.js';
import {loadFilesSync, makeExecutableSchema} from 'graphql-tools';

const __dirname = dirname(fileURLToPath(import.meta.url));


/**
 *
 * @param {Express} app
 * @param {http.server} httpServer
 * @return {ApolloServer<ExpressContext>}
 */
export default async function serverGraphql(app, httpServer) {
  const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
  const resolversArray =
   loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));
  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
  });
  const server = new ApolloServer({
    // typeDefs: fs.readFileSync(`${__dirname}/utils/Schema.Graphql`)
    // .toString(),
    // resolvers: resolverss,
    schema,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [new ApolloServerPluginDrainHttpServer({httpServer})],
  });

  // More required logic for integrating with Express
  await server.start();
  server.applyMiddleware({
    app,


    path: '/',
  });
  return server.graphqlPath;
}
