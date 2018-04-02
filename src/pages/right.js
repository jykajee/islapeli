import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import ohboyImg from '../images/ohboy.png'
import imageFrame from '../components/imageFrame.js'



const Letter = styled.span`
    padding: 1em;
    color: pink;
    background-color: blue;
`;

const Image = styled.img`
  width: 15em;
`;



const RightPage = () => (
  <div>
    <h1>
      <Letter>V</Letter>
      <Letter>O</Letter>
      <Letter>I</Letter>
      <Letter>T</Letter>
      <Letter>I</Letter>
      <Letter>T</Letter>
    </h1>
    <imageFrame>
    <Image src={ohboyImg} />
    </imageFrame>
    <Link to="/"><button>uusi peli</button></Link>
  </div>
)

export default RightPage
