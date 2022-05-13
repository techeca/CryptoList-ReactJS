import React from "react";
import Container from '@mui/material/Container';
import Loading from './Images/loading.svg';
import Grid from '@mui/material/Grid';

export default () => (

  <Container position='static' maxWidth='xl' sx={{ width: '100%', overflow: 'hidden', backdropFilter: 'blur(5px)'}} >

    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >

  <Grid item xs={3}>
  <div className='body'>
    <img src={Loading} alt ="Loading" />
    </div>
  </Grid>

</Grid>

  </Container>
);
