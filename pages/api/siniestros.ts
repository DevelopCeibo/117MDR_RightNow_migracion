import type { NextApiRequest, NextApiResponse } from 'next'
import { connectDB, disconectDB } from '../../db'
import Siniestro from '../../models/siniestro'
import type { SiniestroType } from '../../types'
import { FilterQuery } from 'mongoose'

connectDB()

type QueryParams = {
  page?: string
  limit?: string
  siniestroNumero?: string
  siniestroNumeroNuevo?: string
  creationDate?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ siniestros: SiniestroType[]; total: number }>
) {
  const {
    page = '0',
    limit = '25',
    siniestroNumero,
    siniestroNumeroNuevo,
    creationDate
  }: QueryParams = req.query

  let query: FilterQuery<SiniestroType> = {}
  if (siniestroNumero) {
    query['Numero_de_Siniestro'] = siniestroNumero
  }
  if (siniestroNumeroNuevo) {
    query['Numero_de_Siniestro_Nuevo'] = siniestroNumeroNuevo
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
    Siniestro.find(query)
      .skip(Number(page) * Number(limit))
      .limit(Number(limit)),
    Siniestro.countDocuments(query)
  ]).then(([siniestros, total]) => {
    //disconectDB()
    res.status(200).json({ siniestros, total })
  })
}
