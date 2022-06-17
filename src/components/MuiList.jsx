import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText} from '@mui/material'
import {Home, Settings } from '@mui/icon=material'
import {useNavigate} from 'react-router-dom'

const getIcon = (icon) =>{
    switch (icon){
        case 'HOME':
            return (<Home/>)
        case 'TASKS':
            return (<Settings/>)
        default:
            return  (<Home/>)
    }

    return(
        <List>

        </List>
    )
}



