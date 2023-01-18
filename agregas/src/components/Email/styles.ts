import styled from 'styled-components';

export const Container_email = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;

    width: 420px;
    height: 68px;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const Text_email = styled.div`
    width: 103px;
    height: 19px;

    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    /* identical to box height */


    color: #356B8C;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`

export const Form_Text_email = styled.input`
    box-sizing: border-box;
    color: #49537A;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 13px 10px;
    gap: 13px;

    width: 420px;
    height: 45px;

    border: 3px solid #49537A;
    border-radius: 20px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`
