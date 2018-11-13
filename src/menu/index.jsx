import React, { Component } from 'react';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';

import {
    View,
    Container,
    Content,
    Token,
    Search,
    HorizontalList,
    TokenIcon,
    Text
} from './styles';

class Menu extends Component {
    state = { menu: false };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    showTokenMenu = () => {
        this.props.update && this.props.update();
        this.setState({ menu: !this.state.menu });
    };

    componentWillReceiveProps = (nextProps, nextState) => {
        if (nextProps.menu === false) this.setState({ menu: false });
    };

    getRate = async () => {
        const result = await this.props.client.query({
            query: rate
        });

        this.setState({ rate: result.data.rate });
    };

    render() {
        const { menu, asset, rate } = this.state;
        const settings = {
            showArrows: false,
            showDots: false,
            cardsToShow: 5,
            margin: '5px 25px'
        };
        return (
            <View>
                <Token onClick={this.showTokenMenu}>
                    {this.props.children}
                </Token>
                {menu && (
                    <Container>
                        <Content>
                            <Search
                                placeholder="Search for Token"
                                onChange={this.onChange}
                                name="asset"
                                value={asset || ''}
                            />

                            <HorizontalList {...settings}>
                                {rate &&
                                    rate.map((item) => (
                                        <TokenIcon
                                            src={item.token}
                                            alt={`${item.symbol} Token`}
                                        />
                                    ))}
                            </HorizontalList>
                            <Text>Token Name (Symbol)</Text>
                        </Content>
                    </Container>
                )}
            </View>
        );
    }
}

const rate = gql`
    query rate($sell: String!, $buy: String!) {
        rate(sell: $sell, buy: $buy)
    }
`;

export default withApollo(Menu);
