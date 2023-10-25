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
      (item) => item.field === 'Numero_de_Siniestro'
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
    siniestros: SiniestroType[]
  }

  const { isLoading, rows }: { isLoading: boolean; rows: RowType } =
    useSiniestro(queryOptions)

  const columns = [
    {
      field: 'Apellido_Conductor',
      headerName: 'Apellido_Conductor',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Apellido_y_Nombre',
      headerName: 'Apellido_y_Nombre',
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
      field: 'Codigo_de_Productor',
      headerName: 'Codigo_de_Productor',
      minWidth: 160,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Codigo_Postal',
      headerName: 'Codigo_Postal',
      minWidth: 130,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Codigo_Producto',
      headerName: 'Codigo_Producto',
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
      field: 'Contacto',
      headerName: 'Contacto',
      minWidth: 130,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Danios_Propios',
      headerName: 'Danios_Propios',
      minWidth: 130,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Danios_Terceros',
      headerName: 'Danios_Terceros',
      minWidth: 130,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Documento_Conductor',
      headerName: 'Documento_Conductor',
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
      field: 'Fecha_de_siniestro',
      headerName: 'Fecha_de_siniestro',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },

    {
      field: 'Fecha_de_ultima_actualizacion',
      headerName: 'Fecha_de_ultima_actualizacion',
      minWidth: 200,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Fecha_siniestro',
      headerName: 'Fecha_siniestro',
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
      field: 'Lesiones_Terceros',
      headerName: 'Lesiones_Terceros',
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
      field: 'Nombre_Conductor',
      headerName: 'Nombre_Conductor',
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
      field: 'Numero_de_Documento',
      headerName: 'Numero_de_Documento',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Numero_de_Siniestro',
      headerName: 'Numero_de_Siniestro',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header'
    },
    {
      field: 'Numero_de_Siniestro_Nuevo',
      headerName: 'Numero_de_Siniestro_Nuevo',
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
      field: 'Pais',
      headerName: 'Pais',
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
      field: 'Tomador_Riesgo',
      headerName: 'Tomador_Riesgo',
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
