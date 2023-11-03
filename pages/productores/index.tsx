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
import { useProductores } from '../../hooks'
import type { ProductorType } from '../../types'
import styles from '../../styles/Respuestas.module.css'
import CustomToolbar from '../../components/CustomToolbar'

const ProductorPage: NextPage = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 25
  })

  //Filtrando del lado del servidor
  const [queryOptions, setQueryOptions] = useState({
    page: paginationModel.page,
    limit: paginationModel.pageSize,
    productorDniCuit: '',
    productorId: '',
    productorNombre: ''
  })

  const onFilterChange = useCallback((filterModel: GridFilterModel) => {
    const productorDniCuitFilter = filterModel.items.find(
      (item) => item.field === 'Dni_Cuit'
    )
    const productorIdFilter = filterModel.items.find(
      (item) => item.field === 'ID'
    )
    const productorNombreFilter = filterModel.items.find(
      (item) => item.field === 'Nombre'
    )

    setQueryOptions((prevOptions) => ({
      ...prevOptions,
      productorDniCuit: productorDniCuitFilter
        ? productorDniCuitFilter.value
        : null,
      productorId: productorIdFilter ? productorIdFilter.value : null,
      productorNombre: productorNombreFilter
        ? productorNombreFilter.value
        : null
    }))
  }, [])

  type RowType = {
    total: number
    productores: ProductorType[]
  }

  const { isLoading, rows }: { isLoading: boolean; rows: RowType } =
    useProductores(queryOptions)

  const columns = [
    {
      field: 'Cliensec',
      headerName: 'Cliensec',
      minWidth: 150,
      flex: 1,
      headerClassName: 'theme--header',
      filterOperators: getGridStringOperators().filter(
        (operator) => operator?.value === 'equals'
      ),
      filterable: false
    },
    {
      field: 'Codigo_Completo',
      headerName: 'Codigo_Completo',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Dni_Cuit',
      headerName: 'Dni_Cuit',
      minWidth: 150,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: true,
      filterOperators: getGridStringOperators().filter(
        (operator) => operator?.value === 'equals'
      )
    },
    {
      field: 'Ejecutivo_Cuenta',
      headerName: 'Ejecutivo_Cuenta',
      minWidth: 350,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Gerente',
      headerName: 'Gerente',
      minWidth: 280,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Grupo_Organizador',
      headerName: 'Grupo_Organizador',
      minWidth: 350,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'ID',
      headerName: 'ID',
      minWidth: 130,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: true,
      filterOperators: getGridStringOperators().filter(
        (operator) => operator?.value === 'equals'
      )
    },
    {
      field: 'Nombre',
      headerName: 'Nombre',
      minWidth: 450,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: true,
      filterOperators: getGridStringOperators().filter(
        (operator) => operator?.value === 'equals'
      )
    },
    {
      field: 'Segmentacion',
      headerName: 'Segmentacion',
      minWidth: 210,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false
    },
    {
      field: 'Unidad_De_Negocio',
      headerName: 'Unidad_De_Negocio',
      minWidth: 280,
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

  const getRowId = (row: ProductorType) => row._id

  return (
    <>
      <Head>
        <title>Tabla de Productores</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container className={styles.container} maxWidth='xl'>
        <div className={styles.header}>
          <Link href='./' className={styles.flex}>
            <ReplyIcon />
            <Typography variant='h6'>Home</Typography>
          </Link>
          <Typography variant='h3' className={styles.title} margin='auto'>
            Lista de Productores
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
            rows={rows.productores}
            rowCount={rows.total}
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

export default ProductorPage
