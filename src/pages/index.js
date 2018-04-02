import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>RAPuSTUSPELI</h1>
    <p>MOi ihmINEn, PELaa pepliä!</p>

    <Link to="/game/"><button>alota peli</button></Link>
  </div>
)

export default IndexPage
