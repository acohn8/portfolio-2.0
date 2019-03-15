const sendEmail = async (
  firstName,
  lastName,
  emailAddress,
  subject,
  message
) => {
  const body = {
    firstName,
    lastName,
    emailAddress,
    subject,
    message,
  }
  const response = await fetch(
    'https://ac-personal-site-mailer.herokuapp.com/contact',
    {
      body: JSON.stringify(body),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  return response.json()
}

export default sendEmail
