import './Desktop.css'
import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineHeart, AiOutlineUser, AiFillCloseCircle } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import {BsThreeDotsVertical,BsHandbag} from "react-icons/bs"
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Badge, Button, Dialog, DialogActions, DialogContent, Menu, MenuItem, Slide, Tooltip, Typography,ListItemIcon   } from '@mui/material';
import { ContextFunction } from '../Context/Context';
import { toast } from 'react-toastify';
import { getCart, getWishList, handleLogOut, handleClickOpen, handleClose, Transition } from '../Constants/Constant'
import SearchBar from '../Components/SearchBar/SearchBar'
const DesktopNavigation = () => {

  const { cart, setCart, wishlistData, setWishlistData } = useContext(ContextFunction)
  const [openAlert, setOpenAlert] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate()
  let authToken = localStorage.getItem('Authorization');
  let setProceed = authToken !== null ? true : false
  useEffect(() => {
    getCart(setProceed, setCart, authToken)
    getWishList(setProceed, setWishlistData, authToken)
  }, [])


  const anchorClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const anchorClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <nav className='nav'>
        <div className="logo">
          <Link to='/'>
            <span >KeelNut</span>
          </Link>
        </div>
        <SearchBar />
        <div className="nav-items">
          <ul className="nav-items">
            <li className="nav-links">
              <Tooltip title='Cart'>
                <NavLink to="/cart"><Badge badgeContent={setProceed ? cart.length : 0}> <BsHandbag style={{ fontSize: 20, color:'white' }}/></Badge>
                </NavLink>
              </Tooltip>
            </li>
            <li className="nav-links">
              <Tooltip title='Wishlist'>
                <NavLink to="/wishlist"><Badge badgeContent={setProceed ? wishlistData.length : 0}> <AiOutlineHeart style={{ fontSize: 20, color:'white' }} /></Badge>
                </NavLink>
              </Tooltip>
            </li>

            {
              setProceed ?
                <>
                  <li className="nav-links">
                    <Tooltip title='Profile'>
                      <NavLink to='/update'><AiOutlineUser style={{ fontSize: 20, color:'white', marginBottom: '-5px' }} />
                      </NavLink>
                    </Tooltip>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }}>
                  <BsThreeDotsVertical  onClick={anchorClick} aria-controls={open ? 'account-menu' : undefined} aria-haspopup="true"  aria-expanded={open ? 'true' : undefined} style={{ fontSize: 20, color:'white' }} />
                    <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={anchorClose}
        onClick={anchorClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      ><MenuItem onClick={() => handleClickOpen(setOpenAlert)}>
                    <Button variant='contained' endIcon={<FiLogOut />}>
                      <Typography variant='button'> Logout</Typography>
                    </Button>
    </MenuItem></Menu>
                  </li>
                  
                </>
                :
                <li className="nav-links">
                  <Tooltip title='Login'>
                    <NavLink to='/login'><AiOutlineUser style={{ fontSize: 20, color:'white', marginBottom: '-5px'}} />
                    </NavLink>
                  </Tooltip>
                </li>
            }
          </ul>
        </div>
      </nav >
      <Dialog
        open={openAlert}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent sx={{ width: { xs: 280, md: 350, xl: 400 }, display: 'flex', justifyContent: 'center' }}>
          <Typography variant='h6'>  Do You Want To Logout?</Typography>
        </DialogContent>
        <DialogActions sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Link to="/">
            <Button variant='contained' endIcon={<FiLogOut />} color='primary' onClick={() => handleLogOut(setProceed, toast, navigate, setOpenAlert)}>Logout</Button></Link>
          <Button variant='contained' color='error' endIcon={<AiFillCloseCircle />} onClick={() => handleClose(setOpenAlert)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>

  )
}

export default DesktopNavigation