import React from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, LinkedInButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Navbar = ({ toggleTheme }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <h3 style={{ display: "flex", alignItems: "center", color: theme.text_primary, marginBottom: '20', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>AJITH M</Span>
          </h3>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <LinkedInButton href={Bio.linkedin} target="_blank">LinkedIn</LinkedInButton>
        </ButtonContainer>
        {isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(!isOpen)}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => setIsOpen(!isOpen)}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => setIsOpen(!isOpen)}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => setIsOpen(!isOpen)}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => setIsOpen(!isOpen)}>Education</MobileLink>
            <MobileLink href='#education' onClick={() => setIsOpen(!isOpen)}>Contact</MobileLink>
            <LinkedInButton 
  style={{ 
    padding: '10px 16px', 
    background: theme.primary, 
    color: theme.isLight ? theme.white : theme.text_primary, 
    width: 'max-content' 
  }} 
  href={Bio.linkedin} 
  target="_blank"
 >
 LinkedIn
</LinkedInButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;