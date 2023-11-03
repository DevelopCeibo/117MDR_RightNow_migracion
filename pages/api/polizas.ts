import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB, { disconectDB } from '../../db'
import Poliza from '../../models/poliza'
import type { PolizaType } from '../../types'
import { FilterQuery } from 'mongoose'

connectDB()

type QueryParams = {
  page?: string
  limit?: string
  polizaId?: string
  polizaNombre?: string
  creationDate?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ polizas: PolizaType[]; total: number }>
) {
  const {
    page = '0',
    limit = '25',
    polizaId,
    polizaNombre,
    creationDate
  }: QueryParams = req.query

  let query: FilterQuery<PolizaType> = {}
  if (polizaId) {
    query['ID'] = polizaId
  }
  if (polizaNombre) {
    query['Poliza'] = polizaNombre
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
    Poliza.find(query)
      .skip(Number(page) * Number(limit))
      .limit(Number(limit)),
    Poliza.countDocuments(query)
  ]).then(([polizas, total]) => {
    res.status(200).json({ polizas, total })
  })
}
