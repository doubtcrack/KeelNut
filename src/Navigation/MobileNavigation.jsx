import './Mobile.css'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { AiOutlineHeart, AiFillCloseCircle, AiOutlineUser } from 'react-icons/ai'
import {TbSmartHome} from 'react-icons/tb'
import { FiLogOut } from 'react-icons/fi'
import {BsHandbag, BsTools} from 'react-icons/bs'
import React, {  useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Badge, Button, Dialog, DialogActions, DialogContent, Slide, Typography } from '@mui/material';
import { ContextFunction } from '../Context/Context';
import { toast } from 'react-toastify';
import { Transition, getCart, getWishList, handleClickOpen, handleClose, handleLogOut } from '../Constants/Constant';


const MobileNavigation = () => {
    const { cart, setCart, wishlistData, setWishlistData } = useContext(ContextFunction)
    
    const [openAlert, setOpenAlert] = useState(false);

    const navigate = useNavigate()

    let authToken = localStorage.getItem('Authorization')
    let setProceed = authToken !== null ? true : false

    useEffect(() => {
        getCart(setProceed, setCart, authToken)
        getWishList(setProceed, setWishlistData, authToken)
    }, [])

    return (
        <Box className='showMobile' sx={{margin:'3%'}}>
        <BottomNavigation sx={{ display: 'flex', justifyContent: 'space-between', width: '94%', position: 'fixed', borderRadius: '50px', bottom: 0, overflowX: 'hidden', height: 70, background: '#F5F5F5' }}>
        {[
            { to: '/', icon: <TbSmartHome style={{ fontSize: 20, color: '#393939' }} /> },
            { to: '/wishlist', icon: <Badge badgeContent={setProceed ? wishlistData.length : 0}><AiOutlineHeart style={{ fontSize: 20, color: '#393939' }} /></Badge> },
            { to: '/cart', icon: <BsTools style={{ fontSize: 50, color: '#393939', background: '#35dbb6', borderRadius: '50px', padding: '18px', boxShadow: '4.8px 0px 7.6px rgba(0, 0, 0, 0.032),16.1px 0px 25.7px rgba(0, 0, 0, 0.048),72px 0px 115px rgba(0, 0, 0, 0.08)' }} /> },
            { to: '/cart', icon: <Badge badgeContent={setProceed ? cart.length : 0}><BsHandbag style={{ fontSize: 20, color: '#393939' }} /></Badge> },
            ...(setProceed
                ? [
                    { to: '/update', icon: <AiOutlineUser style={{ fontSize: 20, color: '#393939' }} /> },
                    // Add more items if needed
                ]
                : [{ to: '/login', icon: <AiOutlineUser style={{ fontSize: 20, color: '#393939' }} /> }]
            )
        ].map((item, index) => (
            <NavLink key={index} to={item.to} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className='links'>{item.icon}</div>
            </NavLink>
        ))}
    </BottomNavigation>
    <Dialog
                open={openAlert}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => handleClose(setOpenAlert)}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent sx={{ width: { xs: 280, md: 350, xl: 400 }, display: 'flex', justifyContent: 'center' }}>
                    <Typography variant='h6'>  Do You Want To Logout?</Typography>
                </DialogContent>
                <DialogActions sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Button variant='contained' endIcon={<FiLogOut />} color='primary' onClick={() => handleLogOut(setProceed, toast, navigate, setOpenAlert)}>Logout</Button>
                    <Button variant='contained' color='error' endIcon={<AiFillCloseCircle />} onClick={()=>handleClose(setOpenAlert)}>Close</Button>
                </DialogActions>
            </Dialog>
        </Box >
    );
}


export default MobileNavigation