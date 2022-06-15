import type { NextPage } from 'next'
import Title from '../interface/components/title/title'
import PetList from '../interface/components/list/list'
import {Dialog, TextField, Grid, DialogActions, Button, Snackbar} from '@mui/material'
import { useIndex } from '../data/hook/pages/useIndex'

const Home: NextPage = () => {
  const {
    petList,
    selectedPet,
    setSelectedPet,
    email,
    setEmail,
    value,
    setValue,
    message, 
    setMessage,
    adopt
  } = useIndex();

  return (
    <div >
      <Title title=''
      subtitle={
        <span>
          Com um pequeno valor mensal você <br/>
          <strong>pode adotar um pet virtualmente!</strong>
        </span>
      }/>

      <PetList 
        pets={petList}
        onSelect={(pet) => setSelectedPet(pet)}
      />

      <Dialog 
      open={selectedPet !== null}
      fullWidth
      PaperProps={{sx: { padding: 5 }}}
      onClose={() => setSelectedPet(null)}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField 
            label={'E-mail'}
            type={'email'}
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
            label={'Quantia por mês'}
            type={'number'}
            fullWidth
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ marginTop: 5 }}>
          <Button
          color={'secondary'}
          onClick={() => setSelectedPet(null)}
          >
            Voltar
          </Button>
          <Button
          variant={'contained'}
          onClick={adopt}
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar 
      open={message.length > 0}
      message={message}
      autoHideDuration={2000}
      onClose={() => setMessage('')}
      />
    </div>
  )
}

export default Home;
