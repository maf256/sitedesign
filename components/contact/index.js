import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { Data } from '../common/Data';

export default function Contact ({language}) {

  const form = useRef();
  
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 4000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [message]);


  function onSubmit(e){
      e.preventDefault();
      emailjs.sendForm('service_znsyjev', 'template_4f1qfpu', form.current, 'A6zWxwdubwFpZ1fy0')
        .then((result) => {
            form.current.name.value = '';
            form.current.email.value = '';
            form.current.message.value = '';            
            setMessage(Data.contact[language ? 'en' : 'nr'].sent);
        }, (error) => {
            setMessage(Data.contact[language ? 'en' : 'nr'].err);
        });
    };  

  return (
    <ContactContainer>
        <spam>{Data.contact[language ? 'en' : 'nr'].subject}</spam>
        <h1>{Data.contact[language ? 'en' : 'nr'].h1}</h1>
        <FormContainer>
            <Iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2001.1878318604277!2d10.50676427741654!3d59.89583186554648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4641136be2073181%3A0x2754650120eec23f!2sOsloWeb%20Webdesign%20%26%20Seo!5e0!3m2!1sen!2sno!4v1687637397889!5m2!1sen!2sno"
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">

            </Iframe>
            <form ref={form} onSubmit={onSubmit}>
                <p>{Data.contact[language ? 'en' : 'nr'].h2}</p>
                <input type="text" name="name"  placeholder={Data.contact[language ? 'en' : 'nr'].name} required />
                <input type="email" name="email" placeholder={Data.contact[language ? 'en' : 'nr'].email} required/>      
                <textarea name="message" placeholder={Data.contact[language ? 'en' : 'nr'].message} rows="10" cols="50"/>    
                <input type="submit" value="Send Message" />
                {message && <Message err={message == 'Your message was not sent' || message== 'Meldingen din ble ikke sendt'}>{message}</Message>}
            </form>
        </FormContainer>
    </ContactContainer>
    
  );
};

const Iframe = styled.iframe`
    width: 100%;
    height: 350px;
    /* width="600" height="450" style="border:0;" allowfullscreen=""  */
    background-color: black;
    margin-bottom: 50px;;

`

const ContactContainer = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    min-height: 100vh;
    background-color: ${({theme}) => theme.BC_Home};
    h1,h2{
        margin: 30px 0px;
        color: ${({theme}) => theme.Text_Logo};

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

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    form {
        display: flex;
        flex-direction: column;

        input[type=text], input[type=email], textarea {
            height: 50px;

            font-size: 16px;
            color: ${({theme}) => theme.Text_Title};
            font-weight: 600;
            background-color: ${({theme}) => theme.BC_Home};
            border-radius: 5px;
            padding: 10px;
            margin: 15px 0px;
        }
        textarea {
            height:120px;
        }

        input[type=submit] {
            width: 200px;
            height: 50px;
            font-size: 16px;
            background-color: ${({theme}) => theme.BC_Home};
            color: ${({theme}) => theme.Text_Title};
            border-radius: 5px;
            padding: 10px;
            text-align: center;
            :hover {
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;            }
            :focus {
                box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
            }
        }
    }
`
const Message = styled.p`
    color: ${({err}) => err ? 'red' : 'green'};
    font-size: 18px;
    margin-top: 10px;
`