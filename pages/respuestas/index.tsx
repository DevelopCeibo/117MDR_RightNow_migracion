import type { NextPage } from 'next'
import styles from '../../styles/Respuestas.module.css'
import { Box, Container, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import type { RespuestaType } from '../../types'
import {
  DataGrid,
  GridPaginationModel,
  GridValueGetterParams
} from '@mui/x-data-grid'
import Link from 'next/link'
import ReplyIcon from '@mui/icons-material/Reply'
import Head from 'next/head'

const RespuestaPage: NextPage = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 25
  })
  const [total, setTotal] = useState(100)
  const [respuestas, setRespuestas] = useState<RespuestaType[] | []>([])

  useEffect(() => {
    fetch(
      `api/respuestas?page=${paginationModel.page}&limit=${paginationModel.pageSize}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRespuestas([...data.respuestas])
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
      field: 'Texto',
      headerName: 'Texto',
      minWidth: 240,
      flex: 2,
      headerClassName: 'theme--header'
    },
    {
      field: 'ID de hilo del incidente',
      headerName: 'ID de hilo del incidente',
      minWidth: 200,
      flex: 1,
      headerClassName: 'theme--header'
    },
    {
      field: 'Cabecera de correo',
      headerName: 'Cabecera de correo',
      minWidth: 200,
      flex: 1,
      headerClassName: 'theme--header'
    },
    {
      field: 'ID de contacto',
      headerName: 'ID de contacto',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header'
    },
    {
      field: 'Fecha de creación',
      headerName: 'Fecha de creación',
      type: 'date',
      minWidth: 120,
      flex: 1,
      headerClassName: 'theme--header',
      valueGetter: (params: GridValueGetterParams) =>
        new Date(params.row['Fecha de creación'])
    }
  ]

  const handlePaginationChange = (param: GridPaginationModel) => {
    setPaginationModel(param)
  }

  const getRowId = (row: RespuestaType) => row._id

  return (
    <>
      <Head>
        <title>Tabla de Respuestas</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container className={styles.container} maxWidth='xl'>
        <div className={styles.header}>
          <Link href='./' className={styles.flex}>
            <ReplyIcon />
            <Typography variant='h6'>Home</Typography>
          </Link>
          <Typography variant='h3' className={styles.title} margin='auto'>
            Lista de Respuestas
          </Typography>
        </div>
        <Box sx={{ height: '80vh', width: '100%' }}>
          <DataGrid
            columns={columns}
            rows={respuestas}
            rowCount={total}
            getRowId={getRowId}
            pageSizeOptions={[25, 50, 100]}
            paginationMode='server'
            onPaginationModelChange={handlePaginationChange}
            initialState={{
              pagination: {
                paginationModel: paginationModel
              }
            }}
          />
        </Box>
      </Container>
    </>
  )
}

export default RespuestaPage
