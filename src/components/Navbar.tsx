import React from 'react'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  return (
    <>
      <AppBar
        color='default'
        position='static'
        style={{ alignItems: 'center'}}
      >
        <Toolbar>
          <AnchorLink href='#about' style={{
            textDecoration: 'none',
            color: '#3f51b5'
          }}>
            <Button>
              ABOUT
            </Button>
          </AnchorLink>
          <AnchorLink href='#skills' style={{
            textDecoration: 'none',
            color: '#3f51b5'
          }}>
            <Button>
              SkILLS
            </Button>
          </AnchorLink>
          <AnchorLink href='#works' style={{
            textDecoration: 'none',
            color: '#3f51b5'
          }}>
            <Button>
              WORKS
            </Button>
          </AnchorLink>
          <AnchorLink href='#contact' style={{
            textDecoration: 'none',
            color: '#3f51b5'
          }}>
            <Button>
              CONTACT
            </Button>
          </AnchorLink>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
