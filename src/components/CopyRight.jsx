import React from 'react'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'


export default function CopyRight() {
  return (
    <Typography variant='body2' color='GrayTex' align='center'>
        {'Copyuringht (C)'}
        <Link color='inherit' href='https://www.google.com'>
            Google
        </Link>
        { ' '}
        { new Date().getFullYear() }
    </Typography>
  )
}
