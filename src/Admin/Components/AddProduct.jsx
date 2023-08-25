import React, { useState } from 'react'
import {
    Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, TextField, Typography, InputLabel, MenuItem, FormControl, Select, 
} from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Transition } from '../../Constants/Constant';
import { MdOutlineCancel, MdProductionQuantityLimits } from 'react-icons/md';

const AddProduct = ({ getProductInfo, data }) => {
    // const [age, setAge] = useState('');

    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };
    const [open, setOpen] = useState(false);

    let authToken = localStorage.getItem("Authorization")
    const [productInfo, setProductInfo] = useState({
        name: "",
        image: "",
        price: "",
        rating: "",
        category: "",
        type: "",
        description: "",
        author: "",
        brand: ""
    });
    // const [productInfo, setCredentials] = useState({ firstName: "", lastName: '', email: "", phoneNumber: '', password: "" })
    const handleOnchange = (e) => {
        setProductInfo({ ...productInfo, [e.target.name]: e.target.value })
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (!productInfo.name && !productInfo.image && !productInfo.price && !productInfo.rating && !productInfo.category && !productInfo.type && !productInfo.description) {
                toast.error("Please Fill the all Fields", { autoClose: 500, theme: 'colored' })
            }
            else if (productInfo.rating < 0 || productInfo.rating > 5) {
                toast.error("Please add valid rating", { autoClose: 500, theme: 'colored' })

            }
            else {
                const { data } = await axios.post(`${process.env.REACT_APP_ADMIN_ADD_PRODUCT}`,
                    {
                        name: productInfo.name,
                        brand: productInfo.brand,
                        price: productInfo.price,
                        category: productInfo.category,
                        image: productInfo.image,
                        rating: productInfo.rating,
                        type: productInfo.type,
                        author: productInfo.author,
                        description: productInfo.description,
                    }, {
                    headers: {
                        'Authorization': authToken
                    }
                })
                setOpen(false);
                if (data === true) {
                    getProductInfo()
                    toast.success("Product added successfully", { autoClose: 500, theme: 'colored' })
                    setProductInfo({
                        name: "",
                        image: "",
                        price: "",
                        rating: "",
                        category: "",
                        type: "",
                        description: "",
                        author: "",
                        brand: ""
                    });
                }
                else {
                    toast.error("Some thing went wrong", { autoClose: 500, theme: 'colored' })
                }
            }
        } catch (error) {
            toast.error(error.response.data.error, { autoClose: 500, theme: 'colored' })
        }

    }
    const productFilter = []

    if (productInfo.type === 'Fasteners') {
        productFilter.push('Screws', 'Bolts', 'Nuts', 'Washers', 'Rivets')
    }
    else if (productInfo.type === 'Connectors') {
        productFilter.push('Bolts & Nuts', 'Pins & clips', 'Anchors')
    }
    else if (productInfo.type === 'Brackets and Supports') {
        productFilter.push('Angle Brackets', 'Shelf Brackets', 'Wall Mounts', 'Beam Hangers', 'Post Bases')
    }
    else if (productInfo.type === 'Hinges and Latches') {
        productFilter.push('Door Hinges', 'Gate Hinges', 'Cabinet Hinges', 'Latches')
    }
    else if (productInfo.type === 'Hooks and Fastening') {
        productFilter.push('Screw Hooks', 'Eye Bolts', 'Snap Hooks', 'Clevis Hooks', 'S-Hooks')
    }
    else if (productInfo.type === 'Braces and Plates') {
        productFilter.push('Mending Plates', 'Corner Braces', 'T-Plates', 'Flat Braces', 'Gusset Plates')
    }
    else if (productInfo.type === 'Adhesive and Sealants') {
        productFilter.push('Epoxy', 'Silicone Sealant', 'Construction Adhesive', 'Threadlocker', 'Sealant Tape')
    }
    else if (productInfo.type === 'Clamps and Vises') {
        productFilter.push('C-Clamps', 'Pipe Clamps', 'Bar Clamps', 'Bench Vises', 'Toggle Clamps')
    }

    else {
        productFilter.push('all')

    }
    const typeDropdown = ['Fasteners', 'Connectors', 'Brackets and Supports', 'Hinges and Latches', 'Hooks and Fastening', 'Braces and Plates', 'Adhesive and Sealants', 'Clamps and Vises'];
    const adhesiveBrand = ['3M', 'Loctite', 'Gorilla Glue', 'Dow', 'Henkel(Titebond)', 'Bostik', 'Sika', 'Permatex', 'Devcon', 'Master Bond', 'GE Silicone', 'DAP Products', 'Sachco', 'Tremco', 'Polyseamseal', 'OSI Sealants', 'Henkel(Loctite)', 'BASF(MasterSeal)']


    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: "20px 0" }} >
                <Typography variant='h6' textAlign='center' color="#1976d2" fontWeight="bold">Add new product </Typography>
                <Button variant='contained' endIcon={<MdProductionQuantityLimits />} onClick={handleClickOpen}>Add</Button>
            </Box>
            <Divider sx={{ mb: 5 }} />
            <Dialog
                open={open}
                onClose={handleClose}
                keepMounted
                TransitionComponent={Transition}>
                <DialogTitle sx={{ textAlign: "center", fontWeight: 'bold', color: "#1976d2" }}> Add new product</DialogTitle>
                <DialogContent>
                    <Box sx={{ mt: 2 }}>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                    <TextField label="Name" name='name' value={productInfo.name} onChange={handleOnchange} variant="outlined" fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Product Type</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={productInfo.type}
                                            label="Product Type"
                                            name='type'
                                            onChange={handleOnchange}
                                        >
                                            {typeDropdown.map(item =>
                                                <MenuItem value={item} key={item}>{item}</MenuItem>
                                            )}
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} sm={6} >
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Product Category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={productInfo.category}
                                            label="Product Category"
                                            name='category'
                                            onChange={handleOnchange}
                                        >
                                            {productFilter.map(item =>
                                                <MenuItem value={item} key={item}>{item}</MenuItem>
                                            )}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                {/* {
                                    productInfo.type === 'book' &&
                                    <Grid item xs={12} >
                                        <TextField label="Author" name='author' value={productInfo.author} onChange={handleOnchange} variant="outlined" required fullWidth />
                                    </Grid>
                                } */}
                                {
                                    productInfo.type === 'Adhesive and Sealants' &&
                                    <Grid item xs={12} >
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Adhesive Brand</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={productInfo.brand}
                                                label="Adhesive Brand"
                                                name='brand'
                                                required
                                                onChange={handleOnchange}
                                            >
                                                {adhesiveBrand.map(item =>
                                                    <MenuItem value={item} key={item}>{item}</MenuItem>
                                                )}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                }
                                <Grid item xs={12} >
                                    <TextField label="Image URL" name='image' value={productInfo.image} onChange={handleOnchange} variant="outlined" fullWidth />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField label="Price" name='price' value={productInfo.price} onChange={handleOnchange} variant="outlined" inputMode='numeric' fullWidth />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField label="Rating" name='rating' value={productInfo.rating} onChange={handleOnchange} variant="outlined" inputMode='numeric' fullWidth />
                                </Grid>

                                <Grid item xs={12} sx={{ margin: "10px auto" }}>
                                    <TextField
                                        id="filled-textarea"
                                        value={productInfo.description} onChange={handleOnchange}
                                        label="Description"
                                        multiline
                                        sx={{ width: "100%" }}
                                        variant="outlined"
                                        name='description'
                                        fullWidth

                                    />
                                </Grid>

                            </Grid>
                            <DialogActions sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', mt: 2 }}>
                                <Button fullWidth variant='contained' type='reset' color='error' onClick={handleClose} endIcon={<MdOutlineCancel />}>Cancel</Button>
                                <Button type="submit" fullWidth variant="contained" endIcon={<MdProductionQuantityLimits />}>Add</Button>
                            </DialogActions>
                        </form>
                    </Box >

                </DialogContent>
            </Dialog >
        </>
    )
}

export default AddProduct