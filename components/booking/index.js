// import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Data } from '../common/Data';
import GoogleCalendarScheduling from './GoogleCalendarScheduling';

export default function Booking ({language}) {

  return (
    <ContactContainer>
        <spam>{Data.booking[language ? 'en' : 'nr'].subject}</spam>
        <h1>{Data.booking[language ? 'en' : 'nr'].h1}</h1>
        {/* <GoogleCalendarScheduling language={language} /> */}
        <iframe
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ08q78jfdTSAvdjzrYsZzvFRPIxbVtTln79uu3M9ITm3VITP81IoKX-YurFrpjs3PoE-IG9z8je?gv=true"
        style={{ border: '0' }}
        width="100%"
        height="600"
        frameBorder="0"
      ></iframe>
    </ContactContainer>
    
  );
};

const ContactContainer = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    min-height: 100vh;
    background-color: ${({theme}) => theme.BC_Home};
    h1,h2{
        margin: 30px 0px;
        color: ${({theme}) => theme.Text_Title};

    }
    @media (min-width: 900px) {
        margin-left: 25%;
        width: 75%;
        padding: 100px 10%;
        p {
            font-size: 20px;
        }
    }
    @media (max-width: 899px) {
        width: 100%;
        padding: 100px 10px;
    }
`


const Message = styled.p`
    color: ${({err}) => err ? 'red' : 'green'};
    font-size: 18px;
    margin-top: 10px;
`