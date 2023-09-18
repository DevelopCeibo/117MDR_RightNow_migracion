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
    incidentes: IncidenteType[]
  }

  const { isLoading, rows }: { isLoading: boolean; rows: RowType } =
    useIncidentes(queryOptions)

  const columns = [
    {
      field: 'Nº de referencia',
      headerName: 'Nº de referencia',
      minWidth: 150,
      maxWidth: 300,
      width: 150,
      flex: 1,
      headerClassName: 'theme--header',
      filterOperators: getGridStringOperators().filter(
        (operator) => operator?.value === 'equals'
      ),
      resizable: true
    },
    {
      field: 'Actualizado por',
      headerName: 'Actualizado por',
      minWidth: 180,
      flex: 1.4,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Asunto',
      headerName: 'Asunto',
      minWidth: 250,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Buzón de correo',
      headerName: 'Buzón de correo',
      minWidth: 250,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Cola',
      headerName: 'Cola',
      minWidth: 210,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Creado por cuenta',
      headerName: 'Creado por cuenta',
      minWidth: 210,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Modo de Contacto',
      headerName: 'Modo de Contacto',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'UsuarioIntra',
      headerName: 'UsuarioIntra',
      minWidth: 150,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Tipo de Incidente',
      headerName: 'Tipo de Incidente',
      minWidth: 130,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Tipo de estado',
      headerName: 'Tipo de estado',
      minWidth: 130,
      flex: 0.9,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Tipo Cobro',
      headerName: 'Tipo Cobro',
      minWidth: 130,
      flex: 0.6,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Siniestro',
      headerName: 'Siniestro',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Poliza',
      headerName: 'Poliza',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'NroCuenta',
      headerName: 'NroCuenta',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'ID de producto',
      headerName: 'ID de producto',
      minWidth: 230,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'ID de incidente',
      headerName: 'ID de incidente',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'ID de disposición',
      headerName: 'ID de disposición',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'ID de contacto',
      headerName: 'ID de contacto',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'ID de categoría',
      headerName: 'ID de categoría',
      minWidth: 210,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Grupo',
      headerName: 'Grupo',
      minWidth: 90,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'FechaEfecto',
      headerName: 'FechaEfecto',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Fecha de última respuesta',
      headerName: 'Fecha de última respuesta',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Fecha de última actualización',
      headerName: 'Fecha de última actualización',
      minWidth: 180,
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
      field: 'Fecha de cierre',
      headerName: 'Fecha de cierre',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Estado',
      headerName: 'Estado',
      minWidth: 110,
      flex: 1.1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Cuenta asignada',
      headerName: 'Cuenta asignada',
      minWidth: 130,
      flex: 1.1,
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
