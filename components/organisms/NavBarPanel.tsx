'use client';
import React, { useRef, useState, useEffect } from 'react';
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
  const [pages, setPages] = useState<string[]>([]);
  const [links, setLinks] = useState<NavLinkItem[]>([
    { name: 'Home', href: '/' },
    { name: 'Members', href: '/members' },
    { name: 'Codepen', href: '/codepen-src' },
    { name: 'React', href: '/react' },
    { name: 'NLP', href: '/nlp' },
    {
      groupeName: 'Treasury', links: []
    },
    {
      groupeName: 'Health', links: [
        { name: 'Issues', href: '/health/issues' },
      ]
    },
    { name: 'Training', href: '/training' },
  ]);

  type PageListResponse = {
    files: string[];
  };

  useEffect(() => {

    const removeExtension = (fileName: string) => fileName.replace(/\.(js|jsx|ts|tsx)$/, '');
    const transformLink = (fileName: string) =>
      fileName === 'index.tsx' ? '/source' : `/source/${removeExtension(fileName)}`;

    fetch('/api/get-pages')
      .then(response => response.json())
      .then((data: PageListResponse) => {
        setPages(data.files);
        setLinks(prevLinks => prevLinks.map(link => {
          if (isGroupLinkItem(link) && link.groupeName === 'Treasury') {
            return {
              ...link,
              links: [
                ...link.links,
                ...data.files.map(file => ({ name: removeExtension(file), href: transformLink(file) })),
              ]
            };
          }
          return link;
        }));
      })
      .catch(error => console.error('Error fetching pages:', error));
  }, []);

  const handleToggle = () => setExpanded(!expanded);
  const handleClose = () => setExpanded(false);

  const toggleRef = useRef<HTMLButtonElement>(null);

  return (
    <Navbar data-bs-theme="dark" expanded={expanded} expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="https://js-mantra.vercel.app/">
          <img
            src="/logo.svg"
            alt="logo"
            style={{
              filter: "invert(100%)",
              width: '2rem',
              marginRight: '.7rem'
            }} />
          js-mantra
        </Navbar.Brand>
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

          {/* SEARCH !!! */}
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarPanel;
