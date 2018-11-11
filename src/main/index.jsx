import React, { Component } from 'react';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';
import buyImage from './resources/currency-mobi.png';
import sellImage from './resources/currency-xlm.png';

import {
    View,
    Border,
    Container,
    Amount,
    SellAsset,
    BuyAsset,
    Result,
    SellToken,
    BuyToken,
    TokenIcon
} from './styles';

class Main extends Component {
    state = {
        sell: 'XLM',
        buy: 'MOBI',
        result: '25000',
        sellIcon: sellImage,
        buyIcon: buyImage
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    showTokenMenu = () => {};

    render() {
        const { amount, sell, buy, result, sellIcon, buyIcon } = this.state;
        return (
            <View>
                <Border>
                    <Container>
                        <TokenMenu />
                        <Amount
                            placeholder="Amount"
                            onChange={this.onChange}
                            name="amount"
                            value={amount || ''}
                        />
                        <SellAsset>{sell}</SellAsset>
                        <BuyAsset>{buy}</BuyAsset>
                        <Result>{result}</Result>
                        <SellToken>
                            <TokenIcon
                                src={sellIcon}
                                alt="Sell Token"
                                onClick={this.showTokenMenu}
                            />
                        </SellToken>
                        <BuyToken>
                            <TokenIcon src={buyIcon} alt="Buy Token" />
                        </BuyToken>
                    </Container>
                </Border>
            </View>
        );
    }
}

const test = gql`
    query test {
        test
    }
`;

export default withApollo(Main);
