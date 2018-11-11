import styled from 'styled-components';

export const View = styled.div`
    position: relative;
    display: inline-block;
    margin-bottom: -5px;
`;

export const Container = styled.div`
    visibility: visible;
    opacity: 1;
    width: 250px;
    height: 125px;
    background-color: ghostwhite;
    border: 1px solid #56adf4;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    color: #555;
    text-align: center;
    padding: 5px 0;
    border-radius: 15px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: -50%;
    margin-left: -100px;
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
