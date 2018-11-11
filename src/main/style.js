const Page = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: white;
    text-align: center;
`;

const Border = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 275px;
    height: 375px;
    border: 2px solid #CBB8FF;
    border-radius: 25px;
    background: transparent;
`;

const Container = styled.View`
    align-self: center;
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: 6.5 % repeat(4, 15 %) 10 %;
    grid-template-areas:
    ". . . . . . . . ."
    ". a a a a a a a ."
    ". b b b x x . . ."
    ". . . y y c c c ."
    ". d d d d d d d ."
    ". . . . . . . . .";

    background: linear-gradient(to right, #5AC7EA, #5393FE);
    height: 75 %;
    width: stretch;
`;

const Fields = styled.Text`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: 1px solid white;
    background: transparent;
    text-align: center;
    color: white;
    &::-webkit-input-placeholder {
        text-align: center;
        color: white;
    }
`;

const Amount = styled.View`
    grid-area: a;
`;

const SellAsset = styled.View`
    grid-area: b;
    display: flex;
    justify-content: flex-start;
    padding-left: 20px;
    width: 105 %;
`;

const BuyAsset = styled.View`
    grid-area: c;
    display: flex;
    justify-content: flex - end;
    padding-right: 15px;
    width: 105 %;
    margin-left: -27.5 %;
`;

const Result = styled.View`
    grid-area: d;
`;

const Token = styled.View`
    font-size: 12px;
`;

const SellToken = styled.View`
    grid-area: x;
    width: 150 %;
    margin-left: -60 %;
    background: white;
`;

const BuyToken = styled.View`
    grid-area: y;
    width: 150 %;
    margin-left: 5 %;
    background: white;
`;

const TokenIcon = styled.View`
    height: 25px;
`;