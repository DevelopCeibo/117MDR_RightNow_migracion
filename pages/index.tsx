import { useContext } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { AuthContext } from '../context/auth'

const Home: NextPage = () => {
  const { isLogged } = useContext(AuthContext)
  console.log('isLogged', isLogged)
  return (
    <div className={styles.container}>
      <Head>
        <title>Indice de Tablas</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Listado de Tablas</h1>

        <div className={styles.grid}>
          <Link href='./incidentes' className={styles.card}>
            <h2>Tabla de Incidentes</h2>
            <p>Ingrese aquí para inspeccionar la tabla</p>
          </Link>

          <Link href='./respuestas' className={styles.card}>
            <h2>Tabla de Repuestas</h2>
            <p>Ingrese aquí para inspeccionar la tabla</p>
          </Link>

          <Link href='./incidentes' className={styles.card}>
            <h2>Tabla de Incidentes</h2>
            <p>Ingrese aquí para inspeccionar la tabla</p>
          </Link>

          <Link href='./incidentes' className={styles.card}>
            <h2>Tabla de Incidentes</h2>
            <p>Ingrese aquí para inspeccionar la tabla</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>footer</p>
      </footer>
    </div>
  )
}

export default Home
