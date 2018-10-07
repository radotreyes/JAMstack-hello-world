import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>hi my name is Reuben</h1>
    <p>excited for the hackathon on November 3!</p>
    <p>beep boop</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
