import BasicModal from './components/modal-demo'
import Counter from './components/counter'
import Container from '@mui/material/Container'
import { Box, Grid, Typography } from '@mui/material'

function App() {
  return (
    <Container
      maxWidth='sm'
      sx={{
        mt: 4,
        border: '1px solid rgba(163, 163, 163, 0.6)',
        backgroundColor: '#efefef',
        borderRadius: '5px',
        padding: '10px',
      }}
    >
      <Box sx={{ my: 4 }}>
        <Typography variant='h4' component='h1' gutterBottom>
          Modal State Demo
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Counter />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BasicModal />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default App
