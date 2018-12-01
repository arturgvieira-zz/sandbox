import React, { Component } from 'react';
// Apollo Client Configuration
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Main from './feature';

const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql'
});

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Main />
            </ApolloProvider>
        );
    }
}

export default App;
