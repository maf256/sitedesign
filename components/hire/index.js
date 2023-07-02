import styled from 'styled-components';
import { checkout } from '../checkout/checkout';
import GoogleCalendarScheduling from '../booking/GoogleCalendarScheduling'



export default function Hire ({language}) {


    return (
        <ContactContainer>


            <button onClick={(()=> {
                checkout({
                    lineItems:[
                        {
                            price: 'price_1NOpr7D8oJlEjzDylPHHQjlv',
                            quantity: 1 
                        }
                    ]
                })
            })}>Buy Items</button>


            <GoogleCalendarScheduling />
        </ContactContainer>

    )


}


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
