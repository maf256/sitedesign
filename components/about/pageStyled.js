"use client"
import styled from 'styled-components';

export const AboutPage = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    min-height: 100vh;
    @media (min-width: 900px) {
        margin-left: 25%;
        width: 75%;
        padding: 100px 10%;

        img {
            width: 600px;
            height: auto;    
        }
        p {
            font-size: 20px;
        }
    }
    @media (max-width: 899px) {
        width: 100%;
        padding: 100px 10px;
        img {
            margin: auto auto;
            width: 100%;
            height: auto;

        }
    }
`


export const DetailContainer = styled.div`
    border-top: solid 1px ${({theme}) => theme.Text_Paragraph};
    border-bottom: solid 1px ${({theme}) => theme.Text_Paragraph};
    padding: 30px 5px;
    background-color: ${({theme}) => theme.BC_Home};

    p {
        color: ${({theme}) => theme.Text_Paragraph};
        margin: 15px 0;
        line-height: 1.6;
        font-size: 18px;

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

export const InfoContainer = styled.div`
    border-top: solid 1px ${({theme}) => theme.Text_Paragraph};
    border-bottom: solid 1px ${({theme}) => theme.Text_Paragraph};
    padding: 30px 5px;
    p {
        color: ${({theme}) => theme.Text_Paragraph};
        margin: 15px 0;
        line-height: 1.6;
        font-size: 18px;

    }

`
export const Ul = styled.ul`
`