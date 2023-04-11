import React, { useEffect, useState } from 'react'
import { Container, Typography } from '@mui/material'
import CartCard from '../../../Components/Card/CartCard/CartCard'
import axios from 'axios';
import { toast } from 'react-toastify';

const UserCartItem = ({ commonGetRequest, id, authToken }) => {
    const [userCart, setUserCart] = useState([]);


    const removeCartItemByAdmin = async (product) => {
        try {
            const { data } = await axios.delete(`${process.env.REACT_APP_ADMIN_DELETE_CART}/${product._id}`, {
                headers: {
                    'Authorization': authToken
                }
            })
            if (data.success === true) {
                setUserCart(userCart.filter(c => c.productId._id !== product.productId._id))
                toast.success("Removed From Cart", { autoClose: 500, theme: 'colored' })
            }
            else {
                toast.error("Something went wrong", { autoClose: 500, theme: 'colored' })

            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.msg, { autoClose: 500, theme: "colored" });
        }
    }
    useEffect(() => {
        commonGetRequest(process.env.REACT_APP_ADMIN_GET_CART, id, setUserCart);
    }, [])
    return (
        <>
            <Typography variant='h6' fontWeight="bold" sx={{ margin: '20px 0', textAlign: 'center' }}>User Cart</Typography>
            {userCart.length < 1 && <Typography variant='h6' sx={{ margin: '40px 0', textAlign: 'center' }}>No items in cart</Typography>}
            <Container maxWidth='xl' style={{ marginTop: 10, display: "flex", justifyContent: 'center', flexWrap: "wrap", paddingBottom: 20, marginBottom: 30, width: '100%' }}>
                {userCart.map(prod => (
                    <CartCard product={prod} removeFromCart={removeCartItemByAdmin} key={prod.id} />
                ))}

            </Container>
        </>
    )
}

export default UserCartItem