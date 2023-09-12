import React from 'react'
import Login from '../../components/Login'
import { Container } from '@mui/material'
import styles from '../../styles/Home.module.css'

const LoginPage = () => {
  return (
    <Container className={styles.container}>
      <main className={styles.main}>
        <Login />
      </main>
    </Container>
  )
}

export default LoginPage
