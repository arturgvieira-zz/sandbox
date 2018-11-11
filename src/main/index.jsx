import React, { Component } from 'react';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';
import buyImage from './resources/currency-mobi.png';
import sellImage from './resources/currency-xlm.png';

import {
    Page,
    Border,
    Container,
    Amount,
    SellAsset,
    BuyAsset,
    Result,
    SellToken,
    BuyToken
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
                    <Container>
                        <Amount placeholder="Amount" onChange={this.onChange} name="amount" value={amount || ''} />
                        <SellAsset>{sell}</SellAsset>
                        <BuyAsset >{buy}</BuyAsset>
                        <Result>{result}</Result>
                        <SellToken src={sellIcon} alt="Sell Token" />
                        <BuyToken src={buyIcon} alt="Buy Token" />   
                    </Container>
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