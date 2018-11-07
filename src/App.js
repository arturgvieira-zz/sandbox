import React, { Component } from 'react';
import './App.css';
// Apollo Client Configuration
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Main from './main';

const client = new ApolloClient({
    uri: 'https://8080-attendaminoferret.cdr.co/graphql'
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
