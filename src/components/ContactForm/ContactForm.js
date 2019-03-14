import React from 'react'

import ContactFormForm from './ContactFormForm'
import ContactFormInput from './ContactFormInput'
import ContactFormTextarea from './ContactFormTextarea'
import ContactFormLabel from './ContactFormLabel'
import ContactFormSubmit from './ContactFormSubmit'
import ContactFormNameContainer from './ContactFormNameContainer'
import ContactFormName from './ContactFormName'
import ContactFormSubmitMessage from './ContactFormSubmitMessage'
import ContactFormContainer from './ContactFormContainer'
import ContactFormHeader from './ContactFormHeader'
import validEmail from '../../../helpers/validEmail'

const ContactForm = ({
  handleSubmit,
  handleChange,
  firstName,
  lastName,
  emailAddress,
  subject,
  message,
  error,
  submitted,
}) => (
  <>
    <ContactForm.Header>Send me a message</ContactForm.Header>
    <ContactForm.Container>
      {!error && submitted && (
        <ContactForm.SubmitMessage>
          Thanks! I'll get back to you soon.
        </ContactForm.SubmitMessage>
      )}
      <ContactForm.Form onSubmit={handleSubmit}>
        <ContactForm.NameContainer>
          <ContactFormName>
            <ContactForm.Label>
              First Name {error && !firstName.length && '*'}
            </ContactForm.Label>
            <ContactForm.Input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              error={error && !firstName.length}
            />
          </ContactFormName>
          <ContactFormName>
            <ContactForm.Label>
              Last Name {error && !lastName.length && '*'}
            </ContactForm.Label>
            <ContactForm.Input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              error={error && !lastName.length}
            />
          </ContactFormName>
        </ContactForm.NameContainer>
        <ContactForm.Label>
          Email Address {error && !validEmail(emailAddress) && '*'}
        </ContactForm.Label>
        <ContactForm.Input
          type="text"
          name="emailAddress"
          value={emailAddress}
          onChange={handleChange}
          error={error && !validEmail(emailAddress)}
        />
        <ContactForm.Label>
          Subject {error && !subject.length && '*'}
        </ContactForm.Label>
        <ContactForm.Input
          type="text"
          name="subject"
          value={subject}
          onChange={handleChange}
          error={error && !subject.length}
        />
        <ContactForm.Label>
          Message {error && !message.length && '*'}
        </ContactForm.Label>
        <ContactForm.Textarea
          type="textarea"
          name="message"
          rows="20"
          value={message}
          onChange={handleChange}
          error={error && !message.length}
        />
        <ContactForm.Submit
          type="submit"
          value="Submit"
          onClick={handleSubmit}
        />
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
ContactForm.SubmitMessage = ContactFormSubmitMessage

export default ContactForm
