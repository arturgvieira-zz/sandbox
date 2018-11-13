import http from 'http';
import express from 'express';
import Apollo from 'apollo-server-express';
// Components
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const app = express();

const server = new Apollo.ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        return {
            session: req.session
        };
    }
});

server.applyMiddleware({
    app,
    path: '/graphql',
    cors: {
        origin: ['http://localhost:3000']
    }
});

http.createServer(app).listen(8080, '0.0.0.0', (err) =>
    console.log('🚀  Server Ready')
);
