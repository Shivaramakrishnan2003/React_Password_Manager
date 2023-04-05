import React from "react";
import {Grid} from '@mui/material'
import './FooterStyle.css'

function Footer() {
  return (
    <div className="footer">
      <hr style={{marginRight:"10%"}}/>
          <Grid item><p style={{fontFamily:"sans-serif", fontSize:"xx-large", paddingBottom:"0.7%", marginBottom:"-0.07%", marginRight:"10%"}}>Password Manager</p></Grid>
        <Grid container spacing={5} style={{marginRight:"8%"}}>
          <Grid item><p>All Right Reserved</p> </Grid>
        </Grid>
        <Grid container spacing={5} style={{marginRight:"8%"}}>
          <Grid item><p>Terms of Service</p></Grid>
          <Grid item><p>Privacy</p></Grid>
          <Grid item><p>About</p></Grid>
          <Grid item><p>Developers</p></Grid>
          <Grid item><p>India(English)</p></Grid>
          <Grid item><p>Contact : +91987654321</p></Grid>
        </Grid>
    </div>
  );
}

export default Footer;