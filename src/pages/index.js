import React from 'react'
import Link from 'gatsby-link'
import backgroundImg from '../images/isla_bg.png'
import styled from 'styled-components'

const Frame = styled.div`
    width: 50em;
    height: 40em;
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

const H1 = styled.h1`
  display: inline-block;
  margin-top: 10%;
  width: 100%;
  text-align: center;
`

const P = styled.p`
  width: 100%;
  text-align: center;
`

const Button = styled.button`
  width: 100%;
  text-align: center;
`

const IndexPage = () => (
  <Frame>
    <H1>rapsutuspeli</H1>
    <P>hi hooman, bork bork</P>

    <Link to="/game/"><Button>alota peli</Button></Link>
  </Frame>
)

export default IndexPage
