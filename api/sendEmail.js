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
  const response = await fetch('http://localhost:3000/contact', {
    body: JSON.stringify(body),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  console.log(response)
  return response.json()
}

export default sendEmail
