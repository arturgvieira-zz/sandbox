import styled from 'styled-components';
import Slider from 'react-styled-carousel';

export const View = styled.div`
    position: relative;
    display: inline-block;
    margin-bottom: -5px;
`;

export const Token = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top -5px;
`;

export const Container = styled.div`
    visibility: visible;
    opacity: 1;
    width: 225px;
    height: 100px;
    background-color: ghostwhite;
    border: 1px solid #56adf4;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    color: #555;
    text-align: center;
    padding: 5px 10px;
    border-radius: 15px;
    position: absolute;
    z-index: 1;
    bottom: 240%;
    left: -20%;
    margin-left: -106px;
    transition: opacity 0.3s;
    ::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -15px;
        border-width: 15px;
        border-style: solid;
        border-color: ghostwhite transparent transparent transparent;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    overflow-x: hidden;
`;

export const Search = styled.input`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 25px;
    width: 90%;
    border: none;
    background: transparent;
    text-align: center;
    font-size: 16px;
    border-radius: 25px;
    border-bottom: 1px solid #c0c0c0;
`;

export const HorizontalList = styled(Slider)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const TokenIcon = styled.img`
    height: 40px;
    width: 40px;
`;

export const Text = styled.div`
    width: 100%;
`;