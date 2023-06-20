"use client"
import styled from 'styled-components';

export const AboutPage = styled.div`
    padding: 100px 10%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;


    background-color: #ededed;
    min-height: 100vh;
    @media (min-width: 900px) {
        margin-left: 25%;
        width: 75%;
        img {
            width: 600px;
            height: auto;    
        }
    }
    @media (max-width: 899px) {
        width: 100%;
    }
`


export const DetailContainer = styled.div`
    border-top: solid 1px ${({theme}) => theme.Text_Paragraph};
    border-bottom: solid 1px ${({theme}) => theme.Text_Paragraph};
    padding: 30px 5px;
    p {
        color: ${({theme}) => theme.Text_Paragraph};
        margin: 10px 0;
        line-height: 1.6;

    }

`
export const NameContainer = styled.div`
    padding: 30px 0px;
    h1,h2{
        padding: 5px 0;
    }
    h2{
        color: ${({theme}) => theme.Text_Paragraph};
    }

`

