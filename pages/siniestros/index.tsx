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
import { useSiniestro } from '../../hooks'
import type { SiniestroType } from '../../types'
import styles from '../../styles/NotasPrivadas.module.css'
import CustomToolbar from '../../components/CustomToolbar'

const SiniestroPage: NextPage = () => {
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
      (item) => item.field === 'Número de Siniestro'
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
    siniestros: SiniestroType[]
  }

  const { isLoading, rows }: { isLoading: boolean; rows: RowType } =
    useSiniestro(queryOptions)

  const columns = [
    {
      field: 'Apellido Conductor',
      headerName: 'Apellido Conductor',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Apellido y Nombre',
      headerName: 'Apellido y Nombre',
      minWidth: 300,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Calle',
      headerName: 'Calle',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Causa',
      headerName: 'Causa',
      minWidth: 250,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Codigo de Productor',
      headerName: 'Codigo de Productor',
      minWidth: 160,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Código Postal',
      headerName: 'Código Postal',
      minWidth: 130,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Código Producto',
      headerName: 'Código Producto',
      minWidth: 130,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Comiseria',
      headerName: 'Comiseria',
      minWidth: 280,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Contact',
      headerName: 'Contact',
      minWidth: 130,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Daños Propios',
      headerName: 'Daños Propios',
      minWidth: 130,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Daños Terceros',
      headerName: 'Daños Terceros',
      minWidth: 130,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'DocumentoConductor',
      headerName: 'DocumentoConductor',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Estado',
      headerName: 'Estado',
      minWidth: 130,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Fecha de creación',
      headerName: 'Fecha de creación',
      type: 'dateTime',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      valueGetter: (params: GridValueGetterParams) =>
        new Date(params.row['Fecha de creación']),
      filterOperators: getGridDateOperators().filter(
        (operator) => operator?.value === 'is'
      )
    },
    {
      field: 'Fecha De Siniestro',
      headerName: 'Fecha De Siniestro',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },

    {
      field: 'Fecha de última actualización',
      headerName: 'Fecha de última actualización',
      minWidth: 200,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Fecha_Siniestro',
      headerName: 'Fecha_Siniestro',
      minWidth: 130,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Hora',
      headerName: 'Hora',
      minWidth: 110,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'ID',
      headerName: 'ID',
      minWidth: 110,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Lesiones Terceros',
      headerName: 'Lesiones Terceros',
      minWidth: 150,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Localidad',
      headerName: 'Localidad',
      minWidth: 230,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Nombre Conductor',
      headerName: 'Nombre Conductor',
      minWidth: 230,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Numero',
      headerName: 'Numero',
      minWidth: 130,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Numero de Documento',
      headerName: 'Numero de Documento',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Número de Siniestro',
      headerName: 'Número de Siniestro',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header'
    },
    {
      field: 'Numero de Siniestro',
      headerName: 'Numero de Siniestro',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Oficina',
      headerName: 'Oficina',
      minWidth: 110,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'País',
      headerName: 'País',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Poliza',
      headerName: 'Poliza',
      minWidth: 250,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Producto',
      headerName: 'Producto',
      minWidth: 280,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Productor',
      headerName: 'Productor',
      minWidth: 380,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Provincia',
      headerName: 'Provincia',
      minWidth: 210,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Responsable',
      headerName: 'Responsable',
      minWidth: 210,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Tomador / Riesgo',
      headerName: 'Tomador / Riesgo',
      minWidth: 300,
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

  const getRowId = (row: SiniestroType) => row._id

  return (
    <>
      <Head>
        <title>Tabla de Siniestros</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container className={styles.container} maxWidth='xl'>
        <div className={styles.header}>
          <Link href='./' className={styles.flex}>
            <ReplyIcon />
            <Typography variant='h6'>Home</Typography>
          </Link>
          <Typography variant='h3' className={styles.title} margin='auto'>
            Lista de Siniestros
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
            rows={rows?.siniestros}
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

export default SiniestroPage
