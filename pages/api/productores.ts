import type { NextApiRequest, NextApiResponse } from 'next'
import { FilterQuery } from 'mongoose'
import { connectDB } from '../../db'
import Productor from '../../models/productor'

import type { ProductorType } from '../../types'

connectDB()

type QueryParams = {
  page?: string
  limit?: string
  productorDniCuit?: string
  productorId?: string
  productorNombre?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ productores: ProductorType[]; total: number }>
) {
  const {
    page = '0',
    limit = '25',
    productorDniCuit,
    productorId,
    productorNombre
  }: QueryParams = req.query

  let query: FilterQuery<ProductorType> = {}
  if (productorDniCuit) {
    query['Dni_Cuit'] = productorDniCuit
  }
  if (productorId) {
    query['ID'] = productorId
  }
  if (productorNombre) {
    query['Nombre'] = productorNombre
  }

  Promise.all([
    Productor.find(query)
      .skip(Number(page) * Number(limit))
      .limit(Number(limit)),
    Productor.countDocuments(query)
  ]).then(([productores, total]) => {
    res.status(200).json({ productores, total })
  })
}
