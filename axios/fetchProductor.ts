import axios from 'axios'

export async function fetchProductor(
  page: number,
  limit: number,
  modelName: string,
  productorDniCuit?: string,
  productorId?: string,
  productorNombre?: string
) {
  const response = await axios.get(`api/${modelName}`, {
    params: {
      page: page,
      limit: limit,
      productorDniCuit: productorDniCuit,
      productorId: productorId,
      productorNombre: productorNombre
    }
  })
  return response.data
}
