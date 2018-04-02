import React from 'react'
import Link from 'gatsby-link'
import nope from '../images/nope.png'
import styled from 'styled-components'

const Image = styled.img`
  width: 20em;
`;

const WrongPage = () => (
  <div>
    <h1>HÄVISIT</h1>
    <Image src={nope} />
    <Link to="/"><button>uusi peli</button></Link>
  </div>
)

export default WrongPage
