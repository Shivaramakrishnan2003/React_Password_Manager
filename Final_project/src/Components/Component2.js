import React, { useState } from 'react'
import './Component2style.css'
import { InputAdornment, TextField } from '@mui/material';
import { Button } from '@mui/material';
import Visible from './visibility.png';
import Notvisible from './visible.png';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import VisibilityIcon from '@mui/icons-material/Visibility';

function Component2() {

    const [pass,setpass] = useState(false);
    const [source,setsource] = useState(false);
    const togglePass= ()=>{
        setpass(!pass)
        setsource(!source)

    }
    let url=[];
    let username=[];
    let password=[];
    // a.every((ele)=>typeof ele==='string'
    const sub=()=>{
        url.push(document.getElementById("filled-basic").value)
        username.push(document.getElementById("filled-basic1").value)
        password.push(document.getElementById("filled-basic2").value)
        url.every((ele)=>console.log(ele))
        username.every((el)=>console.log(el))
        password.every((e)=>console.log(e))
    }
    return (
    <div className='comp2div1'>
        <h3 style={{paddingTop:'2%'}}>Enter Details</h3>
        <div className='credentials'>
            <TextField id="filled-basic" label="Enter URL" variant="filled" type={'url'}/>
        </div>
        <div className='credentials'>
            <TextField id="filled-basic1" label="Enter Email" variant="filled" type={'email'}/>
        </div>
        <div className='credentials'>
            <TextField id="filled-basic1" label="Enter Username" variant="filled" type={'text'}/>
        </div>
        <div className='credentials'>
            <TextField id="filled-basic2" label="Enter Password" variant="filled" type={pass ? "text" : "password"} 
            InputProps={{endAdornment: 
                <InputAdornment position='right'>
                    <img src={source ? Visible : Notvisible} style={{width:'30px'}} onClick={togglePass} alt=''/>   
                </InputAdornment>}}>
            </TextField>
        </div>
        <div>
            <Button variant="contained" color="success" onClick={sub}>
                Submit
            </Button>
        </div>
    </div>
  )
}

export default Component2