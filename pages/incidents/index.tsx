import type { NextPage } from 'next'
import styles from '../../styles/Incedents.module.css'
import { Box, Container, Typography, colors } from '@mui/material'
import { useEffect, useState } from 'react'
import type { IncidentType } from '../../types'
import { DataGrid, GridValueGetterParams } from '@mui/x-data-grid'

const IncidentPage: NextPage = () => {
  const [incident, setIncident] = useState<IncidentType[] | []>([])

  useEffect(() => {
    fetch('api/incident')
      .then((data) => data.json())
      .then((incidents) => setIncident(incidents))
  }, [])

  const columns = [
    {
      field: 'Nro Incidente',
      headerName: 'Nro Incidente',
      width: 150,
      flex: 1,
      headerClassName: 'theme--header'
    },
    {
      field: 'Motivo',
      headerName: 'Motivo',
      width: 240,
      flex: 1.4,
      headerClassName: 'theme--header'
    },
    {
      field: 'Registrado por',
      headerName: 'Registrado por',
      width: 200,
      flex: 1,
      headerClassName: 'theme--header'
    },
    {
      field: 'Buzón de correo',
      headerName: 'Buzón de correo',
      width: 180,
      flex: 1,
      headerClassName: 'theme--header'
    },
    {
      field: 'Cliente',
      headerName: 'Cliente',
      width: 210,
      flex: 1,
      headerClassName: 'theme--header'
    },
    {
      field: 'Estado',
      headerName: 'Estado',
      width: 80,
      flex: 0.9,
      headerClassName: 'theme--header'
    },
    {
      field: 'Asignado a',
      headerName: 'Asignado a',
      width: 50,
      flex: 0.6,
      headerClassName: 'theme--header'
    },
    {
      field: 'Sector Responsable',
      headerName: 'Sector Responsable',
      width: 180,
      flex: 1,
      headerClassName: 'theme--header'
    },
    {
      field: 'Fecha de creación',
      headerName: 'Fecha de creación',
      type: 'date',
      width: 200,
      flex: 1,
      headerClassName: 'theme--header',
      valueGetter: (params: GridValueGetterParams) =>
        new Date(params.row['Fecha de creación'])
    },
    {
      field: 'Productor',
      headerName: 'Productor',
      width: 320,
      flex: 1.1,
      headerClassName: 'theme--header'
    },
    {
      field: 'Fecha de última actualización',
      headerName: 'Fecha de última actualización',
      type: 'date',
      width: 200,
      flex: 1,
      headerClassName: 'theme--header',
      valueGetter: (params: GridValueGetterParams) =>
        new Date(params.row['Fecha de creación'])
    }
  ]

  const getRowId = (row: IncidentType) => row._id

  return (
    <Container className={styles.container}>
      <Typography variant='h3' className={styles.title}>
        Listas de Incidentes
      </Typography>
      <Box sx={{ height: '80vh', width: '100%' }}>
        <DataGrid columns={columns} rows={incident} getRowId={getRowId} />
      </Box>
    </Container>
  )
}

export default IncidentPage
