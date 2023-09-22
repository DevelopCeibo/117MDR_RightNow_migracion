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
import { useContact } from '../../hooks'
import type { ContactoType } from '../../types'
import styles from '../../styles/Respuestas.module.css'
import CustomToolbar from '../../components/CustomToolbar'

const ContactoPage: NextPage = () => {
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
    contactos: ContactoType[]
  }

  const { isLoading, rows }: { isLoading: boolean; rows: RowType } =
    useContact(queryOptions)

  const columns = [
    {
      field: 'AceptaEnvioInformacion',
      headerName: 'AceptaEnvioInformacion',
      minWidth: 170,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Apellido',
      headerName: 'Apellido',
      minWidth: 170,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Calle',
      headerName: 'Calle',
      minWidth: 230,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Codigo Postal',
      headerName: 'Codigo Postal',
      minWidth: 130,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Conexión',
      headerName: 'Conexión',
      minWidth: 130,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Conflictivo',
      headerName: 'Conflictivo',
      minWidth: 110,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Correo electrónico no válido',
      headerName: 'Correo electrónico no válido',
      minWidth: 210,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Correo-E alternativo 1',
      headerName: 'Correo-E alternativo 1',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Correo-E alternativo 2',
      headerName: 'Correo-E alternativo 2',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Departamento',
      headerName: 'Departamento',
      minWidth: 130,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Dirección de correo electrónico',
      headerName: 'Dirección de correo electrónico',
      minWidth: 230,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Dni',
      headerName: 'Dni',
      minWidth: 150,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Fecha Alta',
      headerName: 'Fecha Alta',
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
      field: 'Fecha de última actualización',
      headerName: 'Fecha de última actualización',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'FechaRechazoOp',
      headerName: 'FechaRechazoOp',
      minWidth: 170,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'ID de contacto',
      headerName: 'ID de contacto',
      minWidth: 110,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'ID de usuario',
      headerName: 'ID de usuario',
      minWidth: 110,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'ID en AIS',
      headerName: 'ID en AIS',
      minWidth: 110,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Id en BI',
      headerName: 'Id en BI',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Marca_ADS',
      headerName: 'Marca_ADS',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'No Molestar',
      headerName: 'No Molestar',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Nombre',
      headerName: 'Nombre',
      minWidth: 210,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Nombre completo',
      headerName: 'Nombre completo',
      minWidth: 300,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Número de Domicilio',
      headerName: 'Número de Domicilio',
      minWidth: 150,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'País',
      headerName: 'País',
      minWidth: 150,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: ' Piso',
      headerName: ' Piso',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'PolizaVida',
      headerName: 'PolizaVida',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'PolizaVida2',
      headerName: 'PolizaVida2',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'PolizaVida3',
      headerName: 'PolizaVida3',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'PolizaVida4',
      headerName: 'PolizaVida4',
      minWidth: 110,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Provincia',
      headerName: 'Provincia',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Teléfono de la oficina sin formato',
      headerName: 'Teléfono de la oficina sin formato',
      minWidth: 230,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Teléfono de oficina',
      headerName: 'Teléfono de oficina',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Teléfono del asistente',
      headerName: 'Teléfono del asistente',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Teléfono del asistente sin formato',
      headerName: 'Teléfono del asistente sin formato',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Teléfono móvil',
      headerName: 'Teléfono móvil',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Teléfono móvil sin formato',
      headerName: 'Teléfono móvil sin formato',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Teléfono particular',
      headerName: 'Teléfono particular',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Teléfono particular sin formato',
      headerName: 'Teléfono particular sin formato',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'TipoDocumento',
      headerName: 'TipoDocumento',
      minWidth: 130,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Vendedor',
      headerName: 'Vendedor',
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

  const getRowId = (row: ContactoType) => row._id

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
            rows={rows?.contactos}
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

export default ContactoPage
