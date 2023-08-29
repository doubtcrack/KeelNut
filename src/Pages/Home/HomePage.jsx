import React, { useEffect } from 'react'
import axios from 'axios'
import { Container, Typography, useMediaQuery  } from '@mui/material'
import { Box } from '@mui/system'
import { useContext } from 'react'
import { ContextFunction } from '../../Context/Context'
import CategoryCard from '../../Components/Category_Card/CategoryCard';
import CategoryData from '../../Helpers/Categories';
import Carousel from '../../Components/Carousel/Carousel'
import CopyRight from '../../Components/CopyRight/CopyRight'
import {hero} from '../../Assets/Images/Image'

const HomePage = () => {
    const isLargeScreen = useMediaQuery('(min-width: 900px)');
    const { setCart } = useContext(ContextFunction)
    let authToken = localStorage.getItem('Authorization')
    useEffect(() => {
        getCart()
        window.scroll(0, 0)
    }, [])
    const getCart = async () => {
        if (authToken !== null) {
            const { data } = await axios.get(`${process.env.REACT_APP_GET_CART}`,
                {
                    headers: {
                        'Authorization': authToken
                    }
                })
            setCart(data);
        }

    }



    return (
        <>
            <Container maxWidth='xl' style={{ display: 'flex', justifyContent: "center", padding: 0, flexDirection: "column", marginBottom: 70, marginTop: 50 }}>
                <Box padding={2}>
                    <Box style={{ justifyContent:'center', alignItems:'center', marginBottom:0, alignItems:'center' }}  sx={{ display: isLargeScreen ? 'none' : 'flex' }}>
                    {/* <Typography variant='h5' sx={{ textAlign: 'left', color: '#4a4848',fontSize: 28, fontWeight: 'bold', lineHeight:'1.25' }}>Find your<br/> necessory Tools</Typography>
                    <CgSearch style={{ fontSize: 40, color:'#393939', border:'2px solid #EAEBED', padding:'10px', borderRadius:'50px'}} /> */}

                <img src={hero} style={{height:'300px'}} alt="hero" loading='lazy' />
                    </Box>
                    <Carousel />
                </Box>
                <Typography variant='h3' sx={{ textAlign: 'center', marginTop: 10, color: '#1976d2', fontWeight: 'bold' }}>Categories</Typography>
                <Container maxWidth='lg' style={{ marginTop: 90, display: "flex", justifyContent: 'center', flexGrow: 1, flexWrap: 'wrap', gap: 20, }}>
                    {
                        CategoryData.map(data => (
                            <CategoryCard data={data} key={data.img} />
                        ))
                    }
                </Container>
            </Container >
            <CopyRight sx={{ mt: 8, mb: 10 }} />
        </ >
    )
}

export default HomePage