// The GraphQL schema in string form
const typeDefs = `
    type Query {
        test: String
        rate(sell: String!, buy: String!, amount: String!): String
    }
`;

export default typeDefs;
