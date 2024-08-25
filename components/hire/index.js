import styled from 'styled-components'
import { checkout } from '../checkout/checkout'
import Img from '../common/image/webutvikler.png'
import Gravatar from '../gravatar/Gravatar'

export default function Hire({ language }) {
  return (
    <ContactContainer>
      <button
        onClick={() => {
          checkout({
            lineItems: [
              {
                price: 'price_1NOpr7D8oJlEjzDylPHHQjlv',
                quantity: 1,
              },
            ],
          })
        }}
      >
        Buy Items
      </button>
      <Border imgUrl={Img}>
        {/* <Image
                    src = {Img}
                    alt = "Majid Askarifarsangi"
                    placeholder="blur"
                    priority={false}
                    // loading = 'lazy'
                /> */}
      </Border>
      <div>
        <Gravatar email="maf256@gmail.com" size={1024} alt="Webutvikler" />
      </div>
    </ContactContainer>
  )
}

const ContactContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.BC_Home};
  h1,
  h2 {
    margin: 30px 0px;
    color: ${({ theme }) => theme.Text_Title};
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

const Border = styled.div`
  /* background: radial-gradient(circle at -16% -16%, hotpink, slateblue); */
  /* background:red; */
  display: grid;
  background-image: url(${({ imgUrl }) => imgUrl});
  /* height: 100vh; */
  /* place-items: center;  */
  :before {
    animation: anim 30s infinite;
    /* background: radial-gradient(circle at 0% 0%, hotpink, slateblue); */
    border-radius: 30% 70% 53% 47% / 26% 46% 54% 74%;
    box-shadow: 0 -2vmin 4vmin LightPink inset, 0 1vmin 4vmin MediumPurple inset,
      0 -2vmin 7vmin purple inset;
    content: '';
    filter: drop-shadow(0 0 3vmin Thistle) drop-shadow(0 5vmin 4vmin Orchid)
      drop-shadow(2vmin -2vmin 15vmin MediumSlateBlue)
      drop-shadow(0 0 7vmin MediumOrchid);
    height: 50vmin;
    width: 50vmin;
  }
  :before {
    animation: anim 30s infinite;
    /* background: radial-gradient(circle at 0% 0%, hotpink, slateblue); */
    border-radius: 30% 70% 53% 47% / 26% 46% 54% 74%;
    box-shadow: 0 -2vmin 4vmin LightPink inset, 0 1vmin 4vmin MediumPurple inset,
      0 -2vmin 7vmin purple inset;
    content: '';
    filter: drop-shadow(0 0 3vmin Thistle) drop-shadow(0 5vmin 4vmin Orchid)
      drop-shadow(2vmin -2vmin 15vmin MediumSlateBlue)
      drop-shadow(0 0 7vmin MediumOrchid);
    height: 50vmin;
    width: 50vmin;
  }

  @keyframes anim {
    0%,
    100% {
      border-radius: 30% 70% 70% 30% / 30% 52% 48% 70%;
      box-shadow: 0 -2vmin 4vmin LightPink inset,
        0 -4vmin 4vmin MediumPurple inset, 0 -2vmin 7vmin purple inset;
    }

    10% {
      border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%;
    }

    20% {
      border-radius: 67% 33% 47% 53% / 37% 20% 80% 63%;
    }

    30% {
      border-radius: 39% 61% 47% 53% / 37% 40% 60% 63%;
      box-shadow: 0 -4vmin 8vmin hotpink inset,
        -1vmin -2vmin 6vmin LightPink inset,
        -1vmin -2vmin 4vmin MediumPurple inset, 1vmin 4vmin 8vmin purple inset;
    }

    40% {
      border-radius: 39% 61% 82% 18% / 74% 40% 60% 26%;
    }

    50% {
      border-radius: 100%;
      box-shadow: 0 4vmin 16vmin hotpink inset, 0 2vmin 5vmin LightPink inset,
        0 4vmin 4vmin MediumPurple inset, 0 6vmin 8vmin purple inset;
    }

    60% {
      border-radius: 50% 50% 53% 47% / 72% 69% 31% 28%;
    }

    70% {
      border-radius: 50% 50% 53% 47% / 26% 22% 78% 74%;
      box-shadow: 1vmin 1vmin 8vmin LightPink inset,
        2vmin -1vmin 4vmin MediumPurple inset, -1vmin -1vmin 16vmin purple inset;
    }

    80% {
      border-radius: 50% 50% 53% 47% / 26% 69% 31% 74%;
    }

    90% {
      border-radius: 20% 80% 20% 80% / 20% 80% 20% 80%;
    }
  }
`
