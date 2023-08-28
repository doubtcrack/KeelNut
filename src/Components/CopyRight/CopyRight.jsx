import { Typography, Box } from '@mui/material'
import React from 'react'

const CopyRight = (props) => {
    return (
        <Box>
            <a href='https://tksuryavanshi.netlify.app/' target='_blank' rel='noreferrer' >

<Typography variant="body1" fontWeight="bold" color="text.secondary" align="center" {...props} style={{ color: '#1976d2',  }}>
    {' '}
    {new Date().getFullYear()}
    {/* {'.'} */}
    {' © '}
    Made with love by Techie Geek
</Typography>
</a>
        </Box>
        
    )
}

export default CopyRight