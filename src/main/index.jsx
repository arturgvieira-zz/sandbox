import React, { Component } from 'react';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';
import buyImage from './resources/currency-mobi.png';
import sellImage from './resources/currency-xlm.png';
import TokenMenu from '../menu';

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
        result: 'Result',
        sellIcon: sellImage,
        buyIcon: buyImage
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { amount, sell, buy, result, sellIcon, buyIcon } = this.state;
        return (
            <View>
                <Border>
                    <Container>
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
                            <TokenMenu>
                                <TokenIcon
                                    src={sellIcon}
                                    alt="Sell Token"
                                    onClick={this.showTokenMenu}
                                />
                            </TokenMenu>
                        </SellToken>
                        <BuyToken>
                            <TokenMenu>
                                <TokenIcon src={buyIcon} alt="Buy Token" />
                            </TokenMenu>
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
