import React from 'react'

import ContactFormForm from './ContactFormForm'
import ContactFormInput from './ContactFormInput'
import ContactFormTextarea from './ContactFormTextarea'
import ContactFormLabel from './ContactFormLabel'
import ContactFormSubmit from './ContactFormSubmit'
import ContactFormNameContainer from './ContactFormNameContainer'
import ContactFormName from './ContactFormName'
import ContactFormContainer from './ContactFormContainer'
import ContactFormHeader from './ContactFormHeader'

const ContactForm = ({ handleSubmit }) => (
  <>
    <ContactForm.Header>Send me a message</ContactForm.Header>
    <ContactForm.Container>
      <ContactForm.Form onSubmit={handleSubmit}>
        <ContactForm.NameContainer>
          <ContactFormName>
            <ContactForm.Label>First Name</ContactForm.Label>
            <ContactForm.Input type="text" name="firstname" />
          </ContactFormName>
          <ContactFormName>
            <ContactForm.Label>Last Name</ContactForm.Label>
            <ContactForm.Input type="text" name="lastname" />
          </ContactFormName>
        </ContactForm.NameContainer>
        <ContactForm.Label>Email Address</ContactForm.Label>
        <ContactForm.Input type="text" name="email" />
        <ContactForm.Label>Subject</ContactForm.Label>
        <ContactForm.Input type="text" name="subject" />
        <ContactForm.Label>Message</ContactForm.Label>
        <ContactForm.Textarea type="textarea" name="message" rows="20" />
        <br />
        <ContactForm.Submit type="submit" value="Submit" />
      </ContactForm.Form>
    </ContactForm.Container>
  </>
)

ContactForm.Input = ContactFormInput
ContactForm.Textarea = ContactFormTextarea
ContactForm.Submit = ContactFormSubmit
ContactForm.Label = ContactFormLabel
ContactForm.Form = ContactFormForm
ContactForm.Name = ContactFormName
ContactForm.NameContainer = ContactFormNameContainer
ContactForm.Container = ContactFormContainer
ContactForm.Header = ContactFormHeader

export default ContactForm
