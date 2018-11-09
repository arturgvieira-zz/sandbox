import React, { Component } from 'react';
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
        // const { test } = this.state;
        return (
            <div className="Main">
                <div className="main_container-border">
                    <div className="main_container-content">
                        <input className="fields main_content-amount" placeholder="Amount" />
                        <input className="fields main_content-sell" />
                        <input className="fields main_content-buy" />
                        <input className="fields main_content-result" placeholder="0.00" />
                    </div>
                </div>
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