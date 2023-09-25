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
  getGridStringOperators
} from '@mui/x-data-grid'
import ReplyIcon from '@mui/icons-material/Reply'
import { usePolizas } from '../../hooks'
import type { PolizaType } from '../../types'
import styles from '../../styles/Respuestas.module.css'
import CustomToolbar from '../../components/CustomToolbar'

const PolizaPage: NextPage = () => {
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
    polizas: PolizaType[]
  }

  const { isLoading, rows }: { isLoading: boolean; rows: RowType } =
    usePolizas(queryOptions)

  const columns = [
    {
      field: 'Acreedor Prendario/Hipotecario',
      headerName: 'Acreedor Prendario/Hipotecario',
      minWidth: 220,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Actualizado por',
      headerName: 'Actualizado por',
      minWidth: 150,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Bolso_Compra',
      headerName: 'Bolso_Compra',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Canal de cobro',
      headerName: 'Canal de cobro',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'CodigoProductor',
      headerName: 'CodigoProductor',
      minWidth: 150,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Compaña',
      headerName: 'Compaña',
      minWidth: 300,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'CondicionDeIVA',
      headerName: 'CondicionDeIVA',
      minWidth: 210,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Contact',
      headerName: 'Contact',
      minWidth: 130,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Creado por',
      headerName: 'Creado por',
      minWidth: 150,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'E-Cupones',
      headerName: 'E-Cupones',
      minWidth: 130,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'E-Póliza',
      headerName: 'E-Póliza',
      minWidth: 130,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Estado',
      headerName: 'Estado',
      minWidth: 150,
      flex: 2,
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
      field: 'Fecha De Emisión',
      headerName: 'Fecha De Emisión',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Fecha de última actualización',
      headerName: 'Fecha de última actualización',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'FechaSiniestro',
      headerName: 'FechaSiniestro',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Grupo de afinidad',
      headerName: 'Grupo de afinidad',
      minWidth: 300,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Grupo Organizador',
      headerName: 'Grupo Organizador',
      minWidth: 210,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'ID',
      headerName: 'ID',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Numero de cuenta',
      headerName: 'Numero de cuenta',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Numero de Cuenta Enmascarado',
      headerName: 'Numero de Cuenta Enmascarado',
      minWidth: 230,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Organizador',
      headerName: 'Organizador',
      minWidth: 350,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Póliza',
      headerName: 'Póliza',
      minWidth: 300,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Producto',
      headerName: 'Producto',
      minWidth: 300,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Productor',
      headerName: 'Productor',
      minWidth: 350,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'SubRamo',
      headerName: 'SubRamo',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Sucursal',
      headerName: 'Sucursal',
      minWidth: 210,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Tipo de cuenta',
      headerName: 'Tipo de cuenta',
      minWidth: 210,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'TomadorRiesgo',
      headerName: 'TomadorRiesgo',
      minWidth: 300,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Vendedor',
      headerName: 'Vendedor',
      minWidth: 300,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Vigencia Desde',
      headerName: 'Vigencia Desde',
      minWidth: 150,
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

  const getRowId = (row: PolizaType) => row._id

  return (
    <>
      <Head>
        <title>Tabla de Contactos</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container className={styles.container} maxWidth='xl'>
        <div className={styles.header}>
          <Link href='./' className={styles.flex}>
            <ReplyIcon />
            <Typography variant='h6'>Home</Typography>
          </Link>
          <Typography variant='h3' className={styles.title} margin='auto'>
            Lista de Contactos
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
            rows={rows?.polizas}
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

export default PolizaPage
