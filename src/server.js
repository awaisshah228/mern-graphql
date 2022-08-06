import 'dotenv/config';
import http from 'http';
import app from './app.js';
import serverGraphql from './serverGraphql.js';


const PORT = process.env.PORT || 8000;

const server = http.createServer(app);
/**
 */
async function startServer() {
  const graphqlServerPath=await serverGraphql(app, server);
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}... 
    and Graphql server at ${graphqlServerPath}`);
  });
}
startServer();
