import axios from 'axios'

export async function fetchSiniestro(
  page: number,
  limit: number,
  modelName: string,
  siniestroNumero?: string,
  siniestroNumeroNuevo?: string,
  creationDate?: string
) {
  const response = await axios.get(`api/${modelName}`, {
    params: {
      page: page,
      limit: limit,
      siniestroNumero: siniestroNumero,
      siniestroNumeroNuevo: siniestroNumeroNuevo,
      creationDate: creationDate
    }
  })
  return response.data
}
