import { Nav } from './Style'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

const Navbar = () => {
  return (
    <div>
      <Nav>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position='sticky' className='bar'>
            <Toolbar>
              <Box sx={{ flexGrow: 1 }}>
                <IconButton
                  size='large'
                  edge='start'
                  color='inherit'
                  aria-label='menu'
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>

              <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                <img src='/images/Head.png' alt='head' />
              </Typography>
              <div className='button-div'>
                <button>Connect Wallet</button>
                <img
                  src='/svg/discord-light.svg'
                  alt='discord'
                  className='discord'
                />
              </div>
            </Toolbar>
          </AppBar>
        </Box>
      </Nav>
    </div>
  )
}

export default Navbar
