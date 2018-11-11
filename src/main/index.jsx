import React, { Component } from 'react';
import './style.css';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';
import buyImage from './resources/currency-mobi.png';
import sellImage from './resources/currency-xlm.png';

import {
    Container,
    Content,
    Gradient
} from './styles';

class Main extends Component {
    state = {
        sell: "XLM",
        buy: "MOBI",
        result: "25000",
        sellIcon: sellImage,
        buyIcon: buyImage
    };

    async componentDidMount() {
        const result = await this.props.client.query({
            query: test
        });
        this.setState({ test: result.data.test });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { amount, sell, buy, result, sellIcon, buyIcon } = this.state;
        return (
            <Page>
                <Border>
                    <Content>
                        <Fields>
                            <Amount placeholder="Amount" onChange={this.onChange} name="amount" value={amount || ''} />

                            <div className="fields main_content-sell">{sell}</div>
                            <div className="fields main_content-buy">{buy}</div>
                            <div className="fields main_content-result">{result}</div>
                            <div className="token fields token_content-sell"><img className="token-image sell" src={sellIcon} alt="Sell Token" /></div>
                            <div className="token fields token_content-buy"><img className="token-image buy" src={buyIcon} alt="Buy Token" /></div>
                        </Fields>
                    </Content>
                </Border>
            </Page>
        );
    }
}

const test = gql`
    query test {
        test
    }
`;

export default withApollo(Main);