import styled from 'styled-components';

export const View = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: white;
    text-align: center;
    font-size: 12px;
`;

export const Border = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 275px;
    height: 375px;
    border: 2px solid #cbb8ff;
    border-radius: 25px;
    background: transparent;
`;

export const Container = styled.div`
    align-self: center;
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: 6.5% repeat(4, 15%) 10%;
    grid-template-areas:
        '. . . . . . . . .'
        '. a a a a a a a .'
        '. b b b x x . . .'
        '. z . y y c c c .'
        '. d d d d d d d .'
        '. . . . . . . . .';
    background: linear-gradient(to right, #5ac7ea, #5393fe);
    height: 75%;
    width: stretch;
`;

export const Button = styled.div`
    grid-area: z;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: -200%;
`;

const Fields = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    border: 1px solid white;
    background: transparent;
    text-align: center;
    color: white;
    &::placeholder {
        text-align: center;
        color: white;
    }
`;

export const Amount = styled.input`
    grid-area: a;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    border: 1px solid white;
    background: transparent;
    text-align: center;
    color: white;
    &::placeholder {
        text-align: center;
        color: white;
    }
`;

export const SellAsset = styled(Fields)`
    grid-area: b;
    display: flex;
    justify-content: flex-start;
    padding-left: 20px;
    width: 105%;
`;

export const BuyAsset = styled(Fields)`
    grid-area: c;
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
    width: 105%;
    margin-left: -32.5%;
`;

export const Result = styled(Fields)`
    grid-area: d;
`;

const Token = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
`;

export const SellToken = styled(Token)`
    grid-area: x;
    width: 150%;
    margin-left: -60%;
    background: white;
`;

export const BuyToken = styled(Token)`
    grid-area: y;
    width: 150%;
    margin-left: 5%;
    background: white;
`;

export const TokenIcon = styled.img`
    height: 25px;
`;
