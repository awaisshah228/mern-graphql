import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';

import fs from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import resolverss from './resolvers/index.js'

const __dirname = dirname(fileURLToPath(import.meta.url));


export default async function serverGraphql(app,httpServer){
  // console.log(resolverss)

    const server = new ApolloServer({
        typeDefs: fs.readFileSync(`${__dirname}/utils/Schema.Graphql`).toString(),
        resolvers :resolverss ,
        // resolvers : {
        //   Query:{
        //     async hello(parents,args, context,info){
        //         return `hello ${args.name}`
        //     }
        //    }
        // },
        csrfPrevention: true,
        cache: 'bounded',
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
      });
    
      // More required logic for integrating with Express
      await server.start();
      server.applyMiddleware({
        app,
    
        // By default, apollo-server hosts its GraphQL endpoint at the
        // server root. However, *other* Apollo Server packages host it at
        // /graphql. Optionally provide this to match apollo-server.
        path: '/',
      });
      return server.graphqlPath;
}
