import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../elements/Container'
import ContactForm from '../components/ContactForm/ContactForm'
import FlexGrid from '../elements/FlexGrid'
import sendEmail from '../../api/sendEmail'
import validEmail from '../../helpers/validEmail'

class ContactPage extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    subject: '',
    message: '',
    error: false,
    submitted: false,
  }

  handleChange = ({ target }) => {
    const { name, value } = target
    this.setState({ ...this.state, [name]: value })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const {
      firstName,
      lastName,
      emailAddress,
      subject,
      message,
      submitted,
    } = this.state
    if (
      !firstName.length ||
      !lastName.length ||
      !validEmail(emailAddress) ||
      !subject.length ||
      !message.length
    ) {
      return this.setState({ ...this.state, error: true })
    }

    if (!submitted) {
      const emailResponse = await sendEmail(
        firstName,
        lastName,
        emailAddress,
        subject,
        message
      )
      return this.handleResponse(emailResponse.status)
    }
  }

  handleResponse(status) {
    if (status === 202) {
      this.setState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        subject: '',
        message: '',
        submitted: true,
        error: false,
      })
    } else {
      this.setState({ ...this.state, submitted: false, error: true })
    }
  }

  render() {
    const {
      firstName,
      lastName,
      emailAddress,
      subject,
      message,
      error,
      submitted,
    } = this.state
    return (
      <Layout>
        <SEO title="Contact" keywords={['gatsby', 'application', 'react']} />
        <Container>
          <FlexGrid centered>
            <ContactForm
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              firstName={firstName}
              lastName={lastName}
              emailAddress={emailAddress}
              subject={subject}
              message={message}
              error={error}
              submitted={submitted}
            />
          </FlexGrid>
        </Container>
      </Layout>
    )
  }
}

export default ContactPage
