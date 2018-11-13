import React, { PropTypes, Component } from 'react';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';
import mobiIcon from './resources/currency-mobi.png';
import xlmIcon from './resources/currency-xlm.png';

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

    render() {
        const { menu, asset } = this.state;
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
                                <TokenIcon src={mobiIcon} alt="Sell Token" />
                                <TokenIcon src={xlmIcon} alt="Sell Token" />
                                <TokenIcon src={mobiIcon} alt="Sell Token" />
                                <TokenIcon src={xlmIcon} alt="Sell Token" />
                                <TokenIcon src={mobiIcon} alt="Sell Token" />
                                <TokenIcon src={xlmIcon} alt="Sell Token" />
                            </HorizontalList>
                            <Text>Token Name (Symbol)</Text>
                        </Content>
                    </Container>
                )}
            </View>
        );
    }
}

const test = gql`
    query test {
        test
    }
`;

export default withApollo(Menu);
