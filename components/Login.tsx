import { ErrorOutline } from '@mui/icons-material'
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  TextField,
  Typography
} from '@mui/material'
import { useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { isEmail } from '../utils/validations'
import { AuthContext } from '../context/auth'
import { useRouter } from 'next/router'

type DataForm = {
  email: string
  password: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<DataForm>()

  const { login } = useContext(AuthContext)
  const [showError, setShowError] = useState(false)
  const router = useRouter()

  const onLogin: SubmitHandler<DataForm> = ({ email, password }) => {
    setShowError(false)
    if (!(email === 'admin@zurich.com' && password === '12345678')) {
      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
      return
    }

    login()
    router.back()
    return
  }
  return (
    <Container
      maxWidth='md'
      sx={{
        display: 'grid',
        placeItems: 'center'
      }}>
      <form onSubmit={handleSubmit(onLogin)}>
        <Box
          sx={{
            width: 350,
            padding: '60px 40px',
            border: '2px solid rgba(25, 118, 210, 0.5)',
            borderRadius: '10px'
          }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h4' component='h1'>
                Iniciar Sesión
              </Typography>
              <Chip
                label='No reconocemos ese usuario / contraseña'
                color='error'
                icon={<ErrorOutline />}
                className='fadeIn'
                sx={{ display: showError ? 'flex' : 'none' }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                type='email'
                label='Correo'
                variant='filled'
                fullWidth
                {...register('email', {
                  required: 'Este campo es requerido',
                  validate: isEmail
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Contraseña'
                type='password'
                variant='filled'
                fullWidth
                {...register('password', {
                  required: 'Este campo es requerido',
                  minLength: { value: 6, message: 'Mínimo 6 caracteres' }
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type='submit'
                color='primary'
                variant='contained'
                className='circular-btn'
                size='large'
                fullWidth>
                Ingresar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Container>
  )
}

export default Login
