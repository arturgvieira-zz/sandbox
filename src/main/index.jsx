import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';

class Main extends Component {
    state = {};

    async componentDidMount() {
        const result = await this.props.client.query({
            query: test
        });
        this.setState({ test: result.data.test })
    }
    render() {
        const { test } = this.state;
        return (
            <div className="Main">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        {test}
                    </p>
                </header>
            </div> 
        );
    }
}
        
const test = gql`
    query test {
        test
    }
`;
        
export default withApollo(Main);