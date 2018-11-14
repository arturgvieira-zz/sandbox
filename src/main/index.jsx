import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import buyImage from './resources/currency-mobi.png';
import sellImage from './resources/currency-xlm.png';
import TokenMenu from '../menu';
import ButtonComponent from '../button';

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
    TokenIcon,
    Button
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

    clearTokenMenu = () => {
        this.setState({ menu: false });
    };

    render() {
        const {
            amount,
            sell,
            buy,
            result,
            sellIcon,
            menu,
            buyIcon
        } = this.state;
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
                            <TokenMenu menu={menu}>
                                <TokenIcon src={sellIcon} alt="Sell Token" />
                            </TokenMenu>
                        </SellToken>
                        <BuyToken>
                            <TokenMenu update={this.clearTokenMenu}>
                                <TokenIcon src={buyIcon} alt="Buy Token" />
                            </TokenMenu>
                        </BuyToken>
                        <Button>
                            <ButtonComponent />
                        </Button>
                    </Container>
                </Border>
            </View>
        );
    }
}

export default withApollo(Main);
