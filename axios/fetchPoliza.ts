import axios from 'axios'

export async function fetchPoliza(
  page: number,
  limit: number,
  modelName: string,
  polizaId?: string,
  polizaNombre?: string,
  creationDate?: string
) {
  const response = await axios.get(`api/${modelName}`, {
    params: {
      page: page,
      limit: limit,
      polizaId: polizaId,
      polizaNombre: polizaNombre,
      creationDate: creationDate
    }
  })
  return response.data
}
