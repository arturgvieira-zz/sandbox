import React, { Component } from 'react';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';

import { View, Container } from './styles';

class Menu extends Component {
    state = {};
    showTokenMenu = () => {
        this.setState({ menu: !this.state.menu });
    };

    render() {
        const { menu } = this.state;
        return (
            <View onClick={this.showTokenMenu}>
                {menu && <Container />}
                {this.props.children}
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
