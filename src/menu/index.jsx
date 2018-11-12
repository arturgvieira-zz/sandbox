import React, { Component } from 'react';
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
    TokenIcon
} from './styles';

class Menu extends Component {
    state = { menu: true };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    showTokenMenu = () => {
        this.setState({ menu: !this.state.menu });
    };

    render() {
        const { menu, asset } = this.state;
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
                            <HorizontalList>
                                <TokenIcon src={mobiIcon} alt="Sell Token" />
                                <TokenIcon src={xlmIcon} alt="Sell Token" />
                            </HorizontalList>
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
