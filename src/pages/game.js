import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import waitingImg from '../images/waiting.png'


const Image = styled.img`
  width: 20em;
`;

const Frame = styled.div`
    

`;

const GamePage = () => (
  <Frame>
    <h1>rapsuta islaa?</h1>
    <Image src={waitingImg} />
    <Link to="/right/"><button>joo</button></Link>
    <Link to="/wrong/"><button>en</button></Link>
  </Frame>
)

export default GamePage
