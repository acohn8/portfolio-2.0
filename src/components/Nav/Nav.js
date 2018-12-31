import React from 'react'
import { Link } from 'gatsby'
import propTypes from 'prop-types'

import MenuBar from './MenuBar'
import Logo from './Logo'
import Container from '../../elements/Container'
import NavLink from './NavLink'
import NavContents from './NavContents'
import NavLinks from './NavLinks'

const Nav = ({ home }) => (
  <Nav.Menubar>
    <Container>
      <Nav.Contents>
        {!home && (
          <Link to="/" style={{ textDecoration: 'none', width: '100%' }}>
            <Nav.Logo>Adam Cohn</Nav.Logo>{' '}
          </Link>
        )}
        <Nav.Links>
          <Link
            to="/resume"
            style={{ textDecoration: 'none' }}
            activeStyle={{
              fontWeight: '700',
            }}
          >
            <Nav.Link>Resume</Nav.Link>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Nav.Link>Contact</Nav.Link>
          </Link>
        </Nav.Links>
      </Nav.Contents>
    </Container>
  </Nav.Menubar>
)

Nav.Menubar = MenuBar
Nav.Contents = NavContents
Nav.Logo = Logo
Nav.Links = NavLinks
Nav.Link = NavLink

Nav.defaultProps = {
  home: false,
}

Nav.propTypes = {
  home: propTypes.bool,
}

export default Nav
