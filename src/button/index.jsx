import React, { Component } from 'react';
import image from './resources/button.png';

import { View } from './styles';
class Button extends Component {
    render() {
        return <View src={image} alt="Swap Button" />;
    }
}

export default Button;
