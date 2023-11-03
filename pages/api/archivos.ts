import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB, { disconectDB } from '../../db'
import Archivo from '../../models/archivo'
import type { ArchivoType } from '../../types'
import { FilterQuery } from 'mongoose'

connectDB()

type QueryParams = {
  page?: string
  limit?: string
  archivoIncidentNumber?: string
  archivoNombre?: string
  creationDate?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ archivos: ArchivoType[]; total: number }>
) {
  const {
    page = '0',
    limit = '25',
    archivoIncidentNumber,
    archivoNombre,
    creationDate
  }: QueryParams = req.query

  let query: FilterQuery<ArchivoType> = {}
  if (archivoIncidentNumber) {
    query['Nro_de_referencia'] = archivoIncidentNumber
  }
  if (archivoNombre) {
    query['Nombre_de_archivo_de_usuario'] = archivoNombre
  }
  if (creationDate) {
    const filterDate = new Date(creationDate)

    const day = filterDate.getDate()
    const month = filterDate.getMonth()
    const year = filterDate.getFullYear()
    const startDate = new Date(year, month, day + 1, 0, 0, 0, 0)
    const endDate = new Date(year, month, day + 1, 23, 59, 59, 999)

    query['Fecha_de_creacion'] = {
      $gte: startDate,
      $lt: endDate
    }
  }

  Promise.all([
    Archivo.find(query)
      .skip(Number(page) * Number(limit))
      .limit(Number(limit)),
    Archivo.countDocuments(query)
  ]).then(([archivos, total]) => {
    res.status(200).json({ archivos, total })
  })
}
