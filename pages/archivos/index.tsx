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
import { useArchivo } from '../../hooks'
import type { ArchivoType } from '../../types'
import styles from '../../styles/NotasPrivadas.module.css'
import CustomToolbar from '../../components/CustomToolbar'

const ArchivoPage: NextPage = () => {
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
      (item) => item.field === 'Nº de referencia'
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
    archivos: ArchivoType[]
  }

  const { isLoading, rows }: { isLoading: boolean; rows: RowType } =
    useArchivo(queryOptions)

  const columns = [
    {
      field: 'Nº de referencia',
      headerName: 'Nº de referencia',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      filterOperators: getGridStringOperators().filter(
        (operator) => operator?.value === 'equals'
      )
    },
    {
      field: 'Asociación de tabla',
      headerName: 'Asociación de tabla',
      minWidth: 200,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Clave ajena',
      headerName: 'Clave ajena',
      minWidth: 130,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Desactivado',
      headerName: 'Desactivado',
      minWidth: 110,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Descripción',
      headerName: 'Descripción',
      minWidth: 130,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Fecha de creación',
      headerName: 'Fecha de creación',
      type: 'dateTime',
      minWidth: 200,
      flex: 1,
      headerClassName: 'theme--header',
      valueGetter: (params: GridValueGetterParams) =>
        new Date(params.row['Fecha de creación']),
      filterOperators: getGridDateOperators().filter(
        (operator) => operator?.value === 'is'
      )
    },
    {
      field: 'Fecha de última actualización',
      headerName: 'Fecha de última actualización',
      minWidth: 210,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },

    {
      field: 'ID de archivo anexo',
      headerName: 'ID de archivo anexo',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Índice de palabras clave',
      headerName: 'Índice de palabras clave',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Nombre',
      headerName: 'Nombre',
      minWidth: 130,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Nombre de archivo de usuario',
      headerName: 'Nombre de archivo de usuario',
      minWidth: 210,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Nombre de archivo local',
      headerName: 'Nombre de archivo local',
      minWidth: 300,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Privado',
      headerName: 'Privado',
      minWidth: 280,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Secuencia',
      headerName: 'Secuencia',
      minWidth: 170,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Tamaño',
      headerName: 'Tamaño',
      minWidth: 150,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Tipo',
      headerName: 'Tipo',
      minWidth: 170,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Tipo de contenido',
      headerName: 'Tipo de contenido',
      minWidth: 170,
      flex: 2,
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

  const getRowId = (row: ArchivoType) => row._id

  return (
    <>
      <Head>
        <title>Tabla de Archivos</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container className={styles.container} maxWidth='xl'>
        <div className={styles.header}>
          <Link href='./' className={styles.flex}>
            <ReplyIcon />
            <Typography variant='h6'>Home</Typography>
          </Link>
          <Typography variant='h3' className={styles.title} margin='auto'>
            Lista de Archivos
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
            rows={rows?.archivos}
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

export default ArchivoPage
