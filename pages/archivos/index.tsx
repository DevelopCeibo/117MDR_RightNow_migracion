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
    archivos: ArchivoType[]
  }

  const { isLoading, rows }: { isLoading: boolean; rows: RowType } =
    useArchivo(queryOptions)

  const columns = [
    {
      field: 'Nro_de_referencia',
      headerName: 'Nro_de_referencia',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      filterOperators: getGridStringOperators().filter(
        (operator) => operator?.value === 'equals'
      )
    },
    {
      field: 'Asociacion_de_tabla',
      headerName: 'Asociacion_de_tabla',
      minWidth: 200,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
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
      field: 'Desactivado',
      headerName: 'Desactivado',
      minWidth: 110,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Descripcion',
      headerName: 'Descripcion',
      minWidth: 130,
      flex: 2,
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
      field: 'Fecha_de_ultima_actualizacion',
      headerName: 'Fecha_de_ultima_actualizacion',
      minWidth: 210,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },

    {
      field: 'ID_de_archivo_anexo',
      headerName: 'ID_de_archivo_anexo',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Indice_de_palabras_clave',
      headerName: 'Indice_de_palabras_clave',
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
      field: 'Nombre_de_archivo_de_usuario',
      headerName: 'Nombre_de_archivo_de_usuario',
      minWidth: 210,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Nombre_de_archivo_local',
      headerName: 'Nombre_de_archivo_local',
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
      field: 'Tamanio',
      headerName: 'Tamanio',
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
      field: 'Tipo_de_contenido',
      headerName: 'Tipo_de_contenido',
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
