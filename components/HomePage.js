import { useState } from 'react'
import styled from 'styled-components'


const Title = styled.h1`
    color: ${({$color}) => $color ? 'red' : 'blue'};
    font-size: 200px;
`

export default function HomePage() {
    const [color, setColor] = useState(false)
    
    const handleOnClick = () => {
        setColor(!color)
    }

    return <Title $color={color} onClick={handleOnClick}>Majid Rahimi</Title>
}