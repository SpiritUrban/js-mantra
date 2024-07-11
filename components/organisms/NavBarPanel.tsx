'use client';

import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';
import A from '@/components/atoms/A';

interface LinkItem {
  name: string;
  href?: string;
  disabled?: boolean;
}

interface GroupLinkItem {
  groupeName: string;
  links: LinkItem[];
}

type NavLinkItem = LinkItem | GroupLinkItem;

function isGroupLinkItem(item: NavLinkItem): item is GroupLinkItem {
  return (item as GroupLinkItem).groupeName !== undefined;
}

function NavBarPanel() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleClose = () => setExpanded(false);

  const toggleRef = useRef<HTMLButtonElement>(null);

  const links: NavLinkItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Members', href: '/members' },
    { name: 'Codepen', href: '/codepen-src' },
    { name: 'Treasury', href: '/treasury' },
    {
      groupeName: 'Link', links: [
        { name: 'Action', href: '#' },
        { name: 'Another action', href: '#' },
        { name: 'Something else here', href: '#' },
      ]
    },
    { name: 'Link', href: '/about', disabled: true }
  ];


  return (
    <Navbar data-bs-theme="dark" expanded={expanded} expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">js-mantra</Navbar.Brand>
        <Navbar.Toggle ref={toggleRef} aria-controls="navbarScroll" onClick={handleToggle} />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {links.map((link, index) => (
              isGroupLinkItem(link) ? (
                <NavDropdown key={index} title={link.groupeName} id={`navbarScrollingDropdown${index}`}>
                  {link.links.map((sublink, subindex) => (
                    <NavDropdown.Item key={subindex} as="div">
                      <Link href={sublink.href!} passHref legacyBehavior>
                        <A onClick={handleClose}>{sublink.name}</A>
                      </Link>
                    </NavDropdown.Item>
                  ))}
                  <NavDropdown.Divider />
                </NavDropdown>
              ) : (
                link.href && (
                  <Nav.Link key={index} as="div" disabled={link.disabled}>
                    <Link href={link.href} passHref legacyBehavior>
                      <A onClick={handleClose}>{link.name}</A>
                    </Link>
                  </Nav.Link>
                )
              )
            ))}


          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarPanel;
