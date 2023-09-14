import { useCallback, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Box, Container, Typography } from '@mui/material'
import {
  DataGrid,
  GridFilterModel,
  GridPaginationModel,
  GridValueGetterParams,
  getGridDateOperators,
  getGridStringOperators
} from '@mui/x-data-grid'
import ReplyIcon from '@mui/icons-material/Reply'
import { useIncidentes } from '../../hooks/useIncidentes'
import type { IncidenteType } from '../../types'
import styles from '../../styles/Incidentes.module.css'
import CustomToolbar from '../../components/CustomToolbar'

const IncidentePage: NextPage = () => {
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
      (item) => item.field === 'Nro Incidente'
    )
    const creationDateFilter = filterModel.items.find(
      (item) => item.field === 'Fecha de creación'
    )

    setQueryOptions((prevOptions) => ({
      ...prevOptions,
      incidentNumber: incidentNumberFilter ? incidentNumberFilter.value : null,
      creationDate: creationDateFilter ? creationDateFilter.value : null
    }))
  }, [])

  type RowType = {
    total: number
    incidentes: IncidenteType[]
  }

  const { isLoading, rows }: { isLoading: boolean; rows: RowType } =
    useIncidentes(queryOptions)

  const columns = [
    {
      field: 'Nro Incidente',
      headerName: 'Nro Incidente',
      minWidth: 150,
      flex: 1,
      headerClassName: 'theme--header',
      filterOperators: getGridStringOperators().filter(
        (operator) => operator?.value === 'equals'
      )
    },
    {
      field: 'Motivo',
      headerName: 'Motivo',
      minWidth: 240,
      flex: 1.4,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Registrado por',
      headerName: 'Registrado por',
      minWidth: 200,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Buzón de correo',
      headerName: 'Buzón de correo',
      minWidth: 200,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Cliente',
      headerName: 'Cliente',
      minWidth: 210,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Estado',
      headerName: 'Estado',
      minWidth: 80,
      flex: 0.9,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Asignado a',
      headerName: 'Asignado a',
      minWidth: 90,
      flex: 0.6,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Sector Responsable',
      headerName: 'Sector Responsable',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Fecha de creación',
      headerName: 'Fecha de creación',
      type: 'dateTime',
      minWidth: 160,
      flex: 1,
      headerClassName: 'theme--header',
      valueGetter: (params: GridValueGetterParams) =>
        new Date(params.row['Fecha de creación']),
      filterOperators: getGridDateOperators().filter(
        (operator) => operator?.value === 'is'
      )
    },
    {
      field: 'Productor',
      headerName: 'Productor',
      minWidth: 320,
      flex: 1.1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Fecha de última actualización',
      headerName: 'Fecha de última actualización',
      type: 'date',
      minWidth: 150,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false,
      valueGetter: (params: GridValueGetterParams) =>
        new Date(params.row['Fecha de creación'])
    }
  ]

  const handlePaginationChange = (param: GridPaginationModel) => {
    setPaginationModel(param)
    setQueryOptions((prev) => {
      return { ...prev, page: param.page, limit: param.pageSize }
    })
  }

  const getRowId = (row: IncidenteType) => row._id

  return (
    <>
      <Head>
        <title>Tabla de Incidentes</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container className={styles.container} maxWidth='xl'>
        <div className={styles.header}>
          <Link href='./' className={styles.flex}>
            <ReplyIcon />
            <Typography variant='h6'>Home</Typography>
          </Link>
          <Typography variant='h3' className={styles.title} margin='auto'>
            Lista de Incidentes
          </Typography>
        </div>
        <Box sx={{ height: '80vh', width: '100%' }}>
          <DataGrid
            columns={columns}
            rows={rows?.incidentes} //rows={incidentes}
            filterMode='server'
            rowCount={rows?.total}
            getRowId={getRowId}
            pageSizeOptions={[25, 50, 100]}
            paginationMode='server'
            onFilterModelChange={onFilterChange}
            loading={isLoading}
            onPaginationModelChange={handlePaginationChange}
            initialState={{
              pagination: {
                paginationModel: paginationModel
              }
            }}
            slots={{ toolbar: CustomToolbar }}
          />
        </Box>
      </Container>
    </>
  )
}

export default IncidentePage
