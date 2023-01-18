import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;

    width: 425px;
    height: 92px;


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`;

export const Text = styled.div`
    width: 40px;
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

export const Form_Text = styled.input`
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 18px 10px 13px;
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

// export const Checkk = styled.input`
//     width: 12px;
//     height: 12px;


//     /* Inside auto layout */

//     flex: none;
//     order: 0;
//     flex-grow: 0;

// `
