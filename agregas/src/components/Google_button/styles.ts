import styled from 'styled-components';

export const Container = styled.button`
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 13px;

    position: absolute;
    width: 420px;
    height: 45px;
    left: 1051px;
    top: 896px;

    border: 3px solid #49537A;
    border-radius: 20px;
`;

export const Text_button = styled.div`
    width: 152px;
    height: 19px;

    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    /* identical to box height */


    color: #356B8C;


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`
