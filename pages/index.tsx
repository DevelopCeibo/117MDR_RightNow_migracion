import Link from 'next/link'
import Head from 'next/head'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
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
            <h2>Tabla de Respuestas</h2>
            <p>Ingrese aquí para inspeccionar la tabla</p>
          </Link>

          <Link href='./notasPrivadas' className={styles.card}>
            <h2>Tabla de Notas Privadas</h2>
            <p>Ingrese aquí para inspeccionar la tabla</p>
          </Link>

          <Link href='./contactos' className={styles.card}>
            <h2>Tabla de Contactos</h2>
            <p>Ingrese aquí para inspeccionar la tabla</p>
          </Link>

          <Link href='./logActividades' className={styles.card}>
            <h2>Tabla de Log Actividad</h2>
            <p>Ingrese aquí para inspeccionar la tabla</p>
          </Link>

          <Link href='./tareas' className={styles.card}>
            <h2>Tabla de Tareas</h2>
            <p>Ingrese aquí para inspeccionar la tabla</p>
          </Link>

          <Link href='./organizaciones' className={styles.card}>
            <h2>Tabla de Organizaciones</h2>
            <p>Ingrese aquí para inspeccionar la tabla</p>
          </Link>

          <Link href='./polizas' className={styles.card}>
            <h2>Tabla de Polizas</h2>
            <p>Ingrese aquí para inspeccionar la tabla</p>
          </Link>

          <Link href='./productores' className={styles.card}>
            <h2>Tabla de Productores</h2>
            <p>Ingrese aquí para inspeccionar la tabla</p>
          </Link>

          <Link href='./riesgos' className={styles.card}>
            <h2>Tabla de Riesgos</h2>
            <p>Ingrese aquí para inspeccionar la tabla</p>
          </Link>

          <Link href='./siniestros' className={styles.card}>
            <h2>Tabla de Siniestros</h2>
            <p>Ingrese aquí para inspeccionar la tabla</p>
          </Link>

          <Link href='./tiposIncidentes' className={styles.card}>
            <h2>Tabla de Tipos de Incidentes</h2>
            <p>Ingrese aquí para inspeccionar la tabla</p>
          </Link>

          <Link href='./archivos' className={styles.card}>
            <h2>Tabla de Archivos</h2>
            <p>Ingrese aquí para inspeccionar la tabla</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Zurich - Ceibo Digital</p>
      </footer>
    </div>
  )
}

export default Home
