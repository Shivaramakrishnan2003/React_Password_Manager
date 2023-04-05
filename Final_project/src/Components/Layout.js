import React from 'react'
import { Outlet} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './LayoutStyle.css'

export const Layout = () => {
  return (
    <div className='Layoutdiv'>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Password Manager</Navbar.Brand>
          <Nav>
            <LinkContainer to="/Login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Main">
              <Nav.Link>Continue without Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Signup">
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </div>
  )
}
