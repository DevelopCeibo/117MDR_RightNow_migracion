import type { NextApiRequest, NextApiResponse } from 'next'
import { connectDB } from '../../db'
import Respuesta from '../../models/respuesta'
import type { RespuestaType } from '../../types'

connectDB()

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ respuestas: RespuestaType[]; total: number }>
) {
  const page = Number(req.query.page) || 0
  const limit = Number(req.query.limit) || 25

  Promise.all([
    Respuesta.find({})
      .skip(page * limit)
      .limit(limit),
    Respuesta.countDocuments({})
  ]).then(([respuestas, total]) => {
    res.status(200).json({ respuestas, total })
  })
}
