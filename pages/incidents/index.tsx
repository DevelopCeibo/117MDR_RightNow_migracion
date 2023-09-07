import type { NextPage } from 'next'
import styles from '../../styles/Incedents.module.css'
import { Box, Container, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import type { IncidentType } from '../../types'
import {
  DataGrid,
  GridPaginationModel,
  GridValueGetterParams
} from '@mui/x-data-grid'
import Link from 'next/link'
import ReplyIcon from '@mui/icons-material/Reply'

const IncidentPage: NextPage = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 25
  })
  const [total, setTotal] = useState(100)
  const [incidents, setIncidents] = useState<IncidentType[] | []>([])

  useEffect(() => {
    fetch(
      `api/incident?page=${paginationModel.page}&limit=${paginationModel.pageSize}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data)
        setIncidents([...data.incidents])
        setTotal(data.total)
      })
  }, [paginationModel])

  const totalPages = Math.ceil(total / paginationModel.pageSize)

  const columns = [
    {
      field: 'Nro Incidente',
      headerName: 'Nro Incidente',
      minWidth: 150,
      flex: 1,
      headerClassName: 'theme--header'
    },
    {
      field: 'Motivo',
      headerName: 'Motivo',
      minWidth: 240,
      flex: 1.4,
      headerClassName: 'theme--header'
    },
    {
      field: 'Registrado por',
      headerName: 'Registrado por',
      minWidth: 200,
      flex: 1,
      headerClassName: 'theme--header'
    },
    {
      field: 'Buzón de correo',
      headerName: 'Buzón de correo',
      minWidth: 200,
      flex: 1,
      headerClassName: 'theme--header'
    },
    {
      field: 'Cliente',
      headerName: 'Cliente',
      minWidth: 210,
      flex: 1,
      headerClassName: 'theme--header'
    },
    {
      field: 'Estado',
      headerName: 'Estado',
      minWidth: 80,
      flex: 0.9,
      headerClassName: 'theme--header'
    },
    {
      field: 'Asignado a',
      headerName: 'Asignado a',
      minWidth: 90,
      flex: 0.6,
      headerClassName: 'theme--header'
    },
    {
      field: 'Sector Responsable',
      headerName: 'Sector Responsable',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header'
    },
    {
      field: 'Fecha de creación',
      headerName: 'Fecha de creación',
      type: 'date',
      minWidth: 140,
      flex: 1,
      headerClassName: 'theme--header',
      valueGetter: (params: GridValueGetterParams) =>
        new Date(params.row['Fecha de creación'])
    },
    {
      field: 'Productor',
      headerName: 'Productor',
      minWidth: 320,
      flex: 1.1,
      headerClassName: 'theme--header'
    },
    {
      field: 'Fecha de última actualización',
      headerName: 'Fecha de última actualización',
      type: 'date',
      minWidth: 150,
      flex: 1,
      headerClassName: 'theme--header',
      valueGetter: (params: GridValueGetterParams) =>
        new Date(params.row['Fecha de creación'])
    }
  ]

  const handlePaginationChange = (param: GridPaginationModel) => {
    setPaginationModel(param)
  }

  const getRowId = (row: IncidentType) => row._id

  return (
    <Container className={styles.container}>
      <div className={styles.header}>
        <Link href='./' className={styles.flex}>
          <ReplyIcon />
          <Typography variant='h6' className={styles.title}>
            Home
          </Typography>
        </Link>
        <Typography variant='h3' className={styles.title}>
          Lista de Incidentes
        </Typography>
      </div>
      <Box sx={{ height: '80vh', width: '100%' }}>
        <DataGrid
          columns={columns}
          rows={incidents}
          rowCount={total}
          getRowId={getRowId}
          pageSizeOptions={[25, 50, 100]}
          paginationMode={paginationModel}
          onPaginationModelChange={handlePaginationChange}
          initialState={{
            pagination: {
              paginationModel: paginationModel
            }
          }}
        />
      </Box>
    </Container>
  )
}

export default IncidentPage
