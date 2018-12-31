import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../elements/Container'
import ContactForm from '../components/ContactForm/ContactForm'
import FlexGrid from '../elements/FlexGrid'

class ContactPage extends React.Component {
  handleSubmit = e => e.preventDefault()

  render() {
    return (
      <Layout>
        <SEO title="Contact" keywords={['gatsby', 'application', 'react']} />
        <Container>
          <FlexGrid>
            <ContactForm handleSubmit={this.handleSubmit} />
          </FlexGrid>
        </Container>
      </Layout>
    )
  }
}

export default ContactPage
