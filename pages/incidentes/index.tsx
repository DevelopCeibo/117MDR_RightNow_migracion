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
  getGridStringOperators,
  gridClasses
} from '@mui/x-data-grid'
import ReplyIcon from '@mui/icons-material/Reply'
import { useIncidentes } from '../../hooks'
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
    const incidentNumberFilter = filterModel.items.find(
      (item) => item.field === 'Nro_de_referencia'
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
    incidentes: IncidenteType[]
  }

  const { isLoading, rows }: { isLoading: boolean; rows: RowType } =
    useIncidentes(queryOptions)

  const columns = [
    {
      field: 'Nro_de_referencia',
      headerName: 'Nro_de_referencia',
      minWidth: 150,
      maxWidth: 300,
      width: 150,
      flex: 1,
      headerClassName: 'theme--header',
      filterOperators: getGridStringOperators().filter(
        (operator) => operator?.value === 'equals'
      )
    },
    {
      field: 'Actualizado_por',
      headerName: 'Actualizado_por',
      minWidth: 180,
      flex: 1.4,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Asunto',
      headerName: 'Asunto',
      minWidth: 400,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Buzon_de_correo',
      headerName: 'Buzon_de_correo',
      minWidth: 280,
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
      field: 'Creado_por_cuenta',
      headerName: 'Creado_por_cuenta',
      minWidth: 210,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Modo_de_Contacto',
      headerName: 'Modo_de_Contacto',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Usuario_Intra',
      headerName: 'Usuario_Intra',
      minWidth: 150,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Tipo_de_Incidente',
      headerName: 'Tipo_de_Incidente',
      minWidth: 130,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Tipo_de_estado',
      headerName: 'Tipo_de_estado',
      minWidth: 130,
      flex: 0.9,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Tipo_Cobro',
      headerName: 'Tipo_Cobro',
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
      field: 'Nro_Cuenta',
      headerName: 'Nro_Cuenta',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'ID_de_producto',
      headerName: 'ID_de_producto',
      minWidth: 230,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'ID_de_incidente',
      headerName: 'ID_de_incidente',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'ID_de_disposicion',
      headerName: 'ID_de_disposicion',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'ID_de_contacto',
      headerName: 'ID_de_contacto',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'ID_de_categoria',
      headerName: 'ID_de_categoria',
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
      field: 'Fecha_Efecto',
      headerName: 'Fecha_Efecto',
      minWidth: 200,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Fecha_de_ultima_respuesta',
      headerName: 'Fecha_de_ultima_respuesta',
      minWidth: 200,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Fecha_de_ultima_actualizacion',
      headerName: 'Fecha_de_ultima_actualizacion',
      minWidth: 200,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Fecha_de_creacion',
      headerName: 'Fecha_de_creacion',
      type: 'dateTime',
      minWidth: 200,
      flex: 1,
      headerClassName: 'theme--header',
      valueGetter: (params: GridValueGetterParams) =>
        new Date(params.row['Fecha_de_creacion']),
      filterOperators: getGridDateOperators().filter(
        (operator) => operator?.value === 'is'
      )
    },
    {
      field: 'Fecha_de_cierre',
      headerName: 'Fecha_de_cierre',
      minWidth: 200,
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
      field: 'Cuenta_asignada',
      headerName: 'Cuenta_asignada',
      minWidth: 130,
      flex: 1.1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'ID_de_organizacion',
      headerName: 'ID_de_organizacion',
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

export default IncidentePage
