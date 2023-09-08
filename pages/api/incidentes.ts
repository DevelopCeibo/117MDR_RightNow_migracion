import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB, { disconectDB } from '../../db'
import Incidente from '../../models/incidente'
import type { IncidenteType } from '../../types'

connectDB()

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ incidentes: IncidenteType[]; total: number }>
) {
  const page = Number(req.query.page) || 0
  const limit = Number(req.query.limit) || 25

  Promise.all([
    Incidente.find({})
      .skip(page * limit)
      .limit(limit),
    Incidente.countDocuments({})
  ]).then(([incidentes, total]) => {
    res.status(200).json({ incidentes, total })
  })
}
