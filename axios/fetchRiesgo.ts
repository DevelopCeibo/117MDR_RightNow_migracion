import axios from 'axios'

export async function fetchRiesgo(
  page: number,
  limit: number,
  modelName: string,
  riesgoContacto?: string,
  riesgoNumeroPoliza?: string,
  creationDate?: string
) {
  const response = await axios.get(`api/${modelName}`, {
    params: {
      page: page,
      limit: limit,
      riesgoContacto: riesgoContacto,
      riesgoNumeroPoliza: riesgoNumeroPoliza,
      creationDate: creationDate
    }
  })
  return response.data
}
