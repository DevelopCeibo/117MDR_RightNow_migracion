import { useCallback, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import type { NextPage } from 'next'
import { Box, Container, Typography } from '@mui/material'
import {
  DataGrid,
  GridFilterModel,
  GridPaginationModel,
  GridValueGetterParams,
  getGridDateOperators,
  getGridStringOperators,
  gridClasses
} from '@mui/x-data-grid'
import ReplyIcon from '@mui/icons-material/Reply'
import { useRespuestas } from '../../hooks'
import type { RespuestaType } from '../../types'
import styles from '../../styles/Respuestas.module.css'
import CustomToolbar from '../../components/CustomToolbar'

const RespuestaPage: NextPage = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 25
  })

  //Filtrando del lado del servidor
  const [queryOptions, setQueryOptions] = useState({
    page: paginationModel.page,
    limit: paginationModel.pageSize,
    incidentNumber: '',
    creationDate: ''
  })

  const onFilterChange = useCallback((filterModel: GridFilterModel) => {
    filterModel.items
    const incidentNumberFilter = filterModel.items.find(
      (item) => item.field === 'Nro_Incidente'
    )
    const creationDateFilter = filterModel.items.find(
      (item) => item.field === 'Fecha_de_creacion'
    )

    setQueryOptions((prevOptions) => ({
      ...prevOptions,
      incidentNumber: incidentNumberFilter ? incidentNumberFilter.value : null,
      creationDate: creationDateFilter ? creationDateFilter.value : null
    }))
  }, [])

  type RowType = {
    total: number
    respuestas: RespuestaType[]
  }

  const { isLoading, rows }: { isLoading: boolean; rows: RowType } =
    useRespuestas(queryOptions)

  const columns = [
    {
      field: 'Nro_Incidente',
      headerName: 'Nro_Incidente',
      minWidth: 150,
      flex: 1,
      headerClassName: 'theme--header',
      filterOperators: getGridStringOperators().filter(
        (operator) => operator?.value === 'equals'
      )
    },
    {
      field: 'Clave_ajena',
      headerName: 'Clave_ajena',
      minWidth: 130,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Cuenta',
      headerName: 'Cuenta',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Fecha_de_creacion',
      headerName: 'Fecha_de_creacion',
      type: 'dateTime',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      valueGetter: (params: GridValueGetterParams) =>
        new Date(params.row['Fecha_de_creacion']),
      filterOperators: getGridDateOperators().filter(
        (operator) => operator?.value === 'is'
      )
    },
    {
      field: 'ID_de_contacto',
      headerName: 'ID_de_contacto',
      minWidth: 130,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'ID_de_cuenta_de_canal',
      headerName: 'ID_de_cuenta_de_canal',
      minWidth: 170,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'ID_de_hilo_del_incidente',
      headerName: 'ID_de_hilo_del_incidente',
      minWidth: 170,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Secuencia',
      headerName: 'Secuencia',
      minWidth: 110,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Texto',
      headerName: 'Texto',
      minWidth: 750,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Tipo_de_entrada_de_hilo',
      headerName: 'Tipo_de_entrada_de_hilo',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Peso',
      headerName: 'Peso',
      minWidth: 130,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    }
  ]

  const handlePaginationChange = (param: GridPaginationModel) => {
    setPaginationModel(param)
    setQueryOptions((prev) => {
      return { ...prev, page: param.page, limit: param.pageSize }
    })
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
        <Box
          sx={{
            height: '85vh',
            width: '100%',
            '& .theme--header': { backgroundColor: 'rgba(25, 118, 210,0.1)' },
            '& .MuiDataGrid-toolbarContainer': {
              backgroundColor: 'rgba(25, 118, 210,0.1)'
            }
          }}>
          <DataGrid
            columns={columns}
            rows={rows.respuestas}
            rowCount={rows.total}
            getRowId={getRowId}
            pageSizeOptions={[25, 50, 100]}
            paginationMode='server'
            filterMode='server'
            onFilterModelChange={onFilterChange}
            loading={isLoading}
            onPaginationModelChange={handlePaginationChange}
            initialState={{
              pagination: {
                paginationModel: paginationModel
              }
            }}
            slots={{ toolbar: CustomToolbar }}
            getRowHeight={() => 'auto'}
            sx={{
              [`& .${gridClasses.cell}`]: {
                py: 1
              }
            }}
          />
        </Box>
      </Container>
    </>
  )
}

export default RespuestaPage
