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
    polizaId: '',
    polizaNombre: '',
    creationDate: ''
  })

  const onFilterChange = useCallback((filterModel: GridFilterModel) => {
    const polizaIdFilter = filterModel.items.find((item) => item.field === 'ID')

    const polizaNombreFilter = filterModel.items.find(
      (item) => item.field === 'Poliza'
    )

    const creationDateFilter = filterModel.items.find(
      (item) => item.field === 'Fecha_de_creacion'
    )

    setQueryOptions((prevOptions) => ({
      ...prevOptions,
      polizaId: polizaIdFilter ? polizaIdFilter.value : null,
      polizaNombre: polizaNombreFilter ? polizaNombreFilter.value : null,
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
      field: 'Acreedor_Prendario_Hipotecario',
      headerName: 'Acreedor_Prendario_Hipotecario',
      minWidth: 220,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Actualizado_por',
      headerName: 'Actualizado_por',
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
      field: 'Canal_de_cobro',
      headerName: 'Canal_de_cobro',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Codigo_Productor',
      headerName: 'Codigo_Productor',
      minWidth: 150,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Compania',
      headerName: 'Compania',
      minWidth: 300,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Condicion_de_IVA',
      headerName: 'Condicion_de_IVA',
      minWidth: 210,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Contacto',
      headerName: 'Contacto',
      minWidth: 130,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Creado_por',
      headerName: 'Creado_por',
      minWidth: 150,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'E_Cupones',
      headerName: 'E_Cupones',
      minWidth: 130,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'E_Poliza',
      headerName: 'E_Poliza',
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
      field: 'Fecha_de_Emision',
      headerName: 'Fecha_de_Emision',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Fecha_de_ultima_actualizacion',
      headerName: 'Fecha_de_ultima_actualizacion',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Fecha_Siniestro',
      headerName: 'Fecha_Siniestro',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Grupo_de_afinidad',
      headerName: 'Grupo_de_afinidad',
      minWidth: 300,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Grupo_Organizador',
      headerName: 'Grupo_Organizador',
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
      filterable: true,
      filterOperators: getGridStringOperators().filter(
        (operator) => operator?.value === 'equals'
      )
    },
    {
      field: 'Numero_de_cuenta',
      headerName: 'Numero_de_cuenta',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Numero_de_Cuenta_Enmascarado',
      headerName: 'Numero_de_Cuenta_Enmascarado',
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
      field: 'Poliza',
      headerName: 'Poliza',
      minWidth: 400,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: true,
      filterOperators: getGridStringOperators().filter(
        (operator) => operator?.value === 'equals'
      )
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
      field: 'Tipo_de_cuenta',
      headerName: 'Tipo_de_cuenta',
      minWidth: 210,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Tomador_Riesgo',
      headerName: 'Tomador_Riesgo',
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
      field: 'Vigencia_Desde',
      headerName: 'Vigencia_Desde',
      minWidth: 150,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Vigencia_Hasta',
      headerName: 'Vigencia_Hasta',
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
        <title>Tabla de Polizas</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container className={styles.container} maxWidth='xl'>
        <div className={styles.header}>
          <Link href='./' className={styles.flex}>
            <ReplyIcon />
            <Typography variant='h6'>Home</Typography>
          </Link>
          <Typography variant='h3' className={styles.title} margin='auto'>
            Lista de Polizas
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
            rowCount={rows?.total}
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
          />
        </Box>
      </Container>
    </>
  )
}

export default PolizaPage
