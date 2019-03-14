import React from 'react'
import gitHub from '../../../public/icons/github.svg'
import linkedin from '../../../public/icons/linkedin.svg'
import SocialIconImage from './SocialIconImage'
import SocialIconLink from './SocialIconLink'
import SocialIconWrapper from './SocialIconWrapper'

const SocialIconContainer = () => (
  <SocialIconContainer.Wrapper>
    <SocialIconContainer.Link href="https://github.com/acohn8" target="blank">
      <SocialIconContainer.Image src={gitHub} />
    </SocialIconContainer.Link>
    <SocialIconContainer.Link
      href="https://www.linkedin.com/in/adam-cohn-a80ba323/"
      target="blank"
    >
      <SocialIconContainer.Image src={linkedin} linkedin />
    </SocialIconContainer.Link>
  </SocialIconContainer.Wrapper>
)

SocialIconContainer.Wrapper = SocialIconWrapper
SocialIconContainer.Link = SocialIconLink
SocialIconContainer.Image = SocialIconImage

export default SocialIconContainer
