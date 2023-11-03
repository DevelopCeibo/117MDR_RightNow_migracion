import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB, { disconectDB } from '../../db'
import Riesgo from '../../models/riesgo'
import type { RiesgoType } from '../../types'
import { FilterQuery } from 'mongoose'

connectDB()

type QueryParams = {
  page?: string
  limit?: string
  riesgoContacto?: string
  riesgoNumeroPoliza?: string
  creationDate?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ riesgos: RiesgoType[]; total: number }>
) {
  const {
    page = '0',
    limit = '25',
    riesgoContacto,
    riesgoNumeroPoliza,
    creationDate
  }: QueryParams = req.query

  let query: FilterQuery<RiesgoType> = {}
  if (riesgoContacto) {
    query['Contacto'] = riesgoContacto
  }
  if (riesgoNumeroPoliza) {
    query['Numero_Poliza'] = riesgoNumeroPoliza
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
    Riesgo.find(query)
      .skip(Number(page) * Number(limit))
      .limit(Number(limit)),
    Riesgo.countDocuments(query)
  ]).then(([riesgos, total]) => {
    res.status(200).json({ riesgos, total })
  })
}
